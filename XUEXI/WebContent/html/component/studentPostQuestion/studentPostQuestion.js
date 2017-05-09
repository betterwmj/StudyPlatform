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
  vm.currTeacher = null;
  async function init(){
    let userInfo = $cookies.getObject("userInfo");
    let subjectTeacherData = await http.get("GetAllSubject");
    vm.subjectList = dataGroup(subjectTeacherData);
    vm.currSubject = vm.subjectList[0];
    vm.currTeacher = vm.currSubject.teacherList[0];
    $scope.$watch("$ctrl.currSubject",function(){
      vm.currTeacher = vm.currSubject.teacherList[0];
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
      teacherID:vm.currTeacher.teacherId
    };
    try {
      let result = await http.post("PostStudentQuestion",question);
      makeDialog("提交成功");
    } catch (error) {
      makeDialog("提交问题失败");
    }
  }

  function checkQuestion(){
    try {
      vm.title = vm.title.trim();
      vm.content = vm.content.trim();
      if( vm.title === "" ){
        makeDialog("请输入标题");
        return false;
      }
      if( vm.title.length < 5 ){
        makeDialog("标题不能少于五个字");
        return false;
      }
      if( vm.content === "" ){
        makeDialog("请输入内容");
        return false;
      }
      if( vm.content.length < 5 ){
        makeDialog("内容不能少于五个字");
        return false;
      }
      return true;
    } catch (error) {
      makeDialog("数据检查异常");
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

  function makeDialog(text){
	  http.alert({
          parent:$element,content:text
      });
  }
}