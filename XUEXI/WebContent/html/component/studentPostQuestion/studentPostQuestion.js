import {app} from "../../bootstrap.js"
export let name = "studentPostQuestion";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentPostQuestion/studentPostQuestion.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
  vm.$onInit = init;
  vm.postQuestion = postQuestion;
  vm.title = "";
  vm.content = "";
  vm.subjectList = [];
  vm.currSubject = null;
  vm.currSubjectId = null;
  vm.currTeacher = null;
  async function init(){
    let userInfo = $cookies.getObject("userInfo");
    let subjectTeacherData = await http.get("GetAllSubject");
    vm.subjectList = dataGroup(subjectTeacherData);
    if(vm.subjectList.length !==0){
	    vm.currSubject = vm.subjectList[0];
	    vm.currSubjectId = vm.currSubject.SubjectID;
	    vm.currTeacher = vm.currSubject.teacherList[0].teacherId;
   }  
    $scope.$watch("$ctrl.currSubject",function(){
      vm.currSubject = vm.subjectList.find(function(item){
        return item.SubjectID === vm.currSubject.SubjectID;
      });
      if(vm.currSubject!=null)
        vm.currTeacher = vm.currSubject.teacherList[0].teacherId;;
    });
  }

  async function postQuestion(){
    if( checkQuestion() === false ){
      return;
    }
    let userInfo = $cookies.getObject("userInfo");
    let question = {
      title:vm.title,
      content:vm.content,
      studentId:userInfo.id,
      teacherID:vm.currTeacher,
      subjectID:vm.currSubjectId
    };
    try {
      let result = await http.post("PostStudentQuestion",question);
      http.alert({
          parent:$element,content:"提交成功"
      }).then(function(){
        $state.go("student.studentQuestionHistory");
      });
    } catch (error) {
    
      http.alert({
          parent:$element,content:"提交问题失败"
      });
    }
  }

  function checkQuestion(){
    try {
      vm.title = vm.title.trim();
      vm.content = vm.content.trim();
      if( vm.title === "" ){
        http.alert({
            parent:$element,content:"请输入标题"
        });
        return false;
      }
      if( vm.title.length < 5 ){
   
        http.alert({
            parent:$element,content:"标题不能少于五个字"
        });
        return false;
      }
      if( vm.content === "" ){
        http.alert({
            parent:$element,content:"请输入内容"
        });
        return false;
      }
      if( vm.content.length < 5 ){
        http.alert({
            parent:$element,content:"内容不能少于五个字"
        });
        return false;
      }
      return true;
    } catch (error) {
      http.alert({
          parent:$element,content:"数据检查异常"+error
      });
      return false;
    }
  }

  /**
   * 按科目，对老师进行分组
   */
  function dataGroup(data){
    let groupList = [];
    data.forEach(function(item){
      let findGroup = groupList.find( (group)=>{
        return item.SubjectID === group.SubjectID;
      });
      if( !findGroup ){
        findGroup = {
          SubjectID:item.SubjectID,
          SubjectName:item.SubjectName,
          teacherList:[],
        };
        groupList.push(findGroup);
      }
      findGroup.teacherList.push({
        teacherId:item.teacherId,teacherName:item.realName
      });
    });
    return groupList;
  }

  $scope.$on("ready_back",function(){
    $state.go("student.question");
  });
}