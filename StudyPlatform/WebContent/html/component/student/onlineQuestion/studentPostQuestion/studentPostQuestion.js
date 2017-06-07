import { app } from "../../../../bootstrap.js"
export let name = "studentPostQuestion";
export default function root(app) {
  app.component(name, {
    templateUrl: "./component/student/onlineQuestion/studentPostQuestion/studentPostQuestion.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http","$mdDialog", controller]
  });
}
function controller($scope, $element, $state, $cookies, http,$mdDialog) {
  let vm = this;
  vm.$onInit = init;
  vm.title = "";
  vm.content = "";
  vm.subjectList = [];
  vm.currSubject = null;
  vm.currSubjectId = null;
  vm.currTeacher = null;
  vm.imgUrl = null;
  vm.postQuestion = postQuestion;
  async function init() {
    let userInfo = $cookies.getObject("userInfo");
    let subjectTeacherData = await http.get("GetAllSubject");
    vm.subjectList = dataGroup(subjectTeacherData);
    if (vm.subjectList.length !== 0) {
      vm.currSubject = vm.subjectList[0];
      vm.currSubjectId = vm.currSubject.SubjectID;
      vm.currTeacher = vm.currSubject.teacherList[0].teacherId;
    }
    $scope.$watch("$ctrl.currSubject", function () {
      vm.currSubject = vm.subjectList.find(function (item) {
        return item.SubjectID === vm.currSubject.SubjectID;
      });
      if (vm.currSubject != null)
        vm.currTeacher = vm.currSubject.teacherList[0].teacherId;;
    });
    let fileInput = document.getElementsByClassName("js_question_imgs")[0];
    angular.element(fileInput).bind("change", onSelectImg);
  }

  async function postQuestion() {
    if (checkQuestion() === false) {
      return;
    }
    http.wait();
    let userInfo = $cookies.getObject("userInfo");
    let question = {
      title: vm.title,
      content: vm.content,
      img: "",
      studentId: userInfo.id,
      teacherID: vm.currTeacher,
      subjectID: vm.currSubjectId
    };
    let imgFile = document.getElementsByClassName("js_question_imgs")[0].files[0];
    if (imgFile) {
      //有图片的时候，先选择上传图片
      try {
        let formData = new FormData();
        formData.append("img", imgFile);
        let imgResult = await http.submitForm("UploadImage", formData);
        question.img = imgResult;
      } catch (error) {
        http.alert({
          parent: $element, content: "图片上传失败"
        });
        $mdDialog.hide();
        return;
      }
    }
    try {
      let result = await http.post("PostStudentQuestion", question);
      $mdDialog.hide();
      http.alert({
        parent: $element, content: "提交成功"
      }).then(function () {
        $state.go("student.studentQuestionHistory");
      });
    } catch (error) {
      $mdDialog.hide();
      http.alert({
        parent: $element, content: "提交问题失败"
      });
    }
  }

  function checkQuestion() {
    try {
      vm.title = vm.title.trim();
      vm.content = vm.content.trim();
      if (vm.title === "") {
        http.alert({
          parent: $element, content: "请输入标题"
        });
        return false;
      }
      if (vm.title.length < 5) {

        http.alert({
          parent: $element, content: "标题不能少于五个字"
        });
        return false;
      }
      if (vm.content === "") {
        http.alert({
          parent: $element, content: "请输入内容"
        });
        return false;
      }
      if (vm.content.length < 5) {
        http.alert({
          parent: $element, content: "内容不能少于五个字"
        });
        return false;
      }
      //let imgFile = document.getElementsByClassName("js_question_imgs")[0].files[0];
      return true;
    } catch (error) {
      http.alert({
        parent: $element, content: "数据检查异常" + error
      });
      return false;
    }
  }

  /**
   * 按科目，对老师进行分组
   */
  function dataGroup(data) {
    let groupList = [];
    data.forEach(function (item) {
      let findGroup = groupList.find((group) => {
        return item.SubjectID === group.SubjectID;
      });
      if (!findGroup) {
        findGroup = {
          SubjectID: item.SubjectID,
          SubjectName: item.SubjectName,
          teacherList: [],
        };
        groupList.push(findGroup);
      }
      findGroup.teacherList.push({
        teacherId: item.teacherId, teacherName: item.realName
      });
    });
    return groupList;
  }

  function onSelectImg(event) {
    let img = document.getElementsByClassName("js_question_img_preview")[0];
    let imgFile = document.getElementsByClassName("js_question_imgs")[0].files[0];
    if (!imgFile) {
      img.src = "";
      return;
    }
    let reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
    };
    reader.readAsDataURL(imgFile);
  }

  $scope.$on("ready_back", function () {
    $state.go("student.question");
  });
}