import {app} from "../../bootstrap.js"
export let name = "studentHomeworkResultDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentHomeworkResultDetail/studentHomeworkResultDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.$onInit = async function(){
    try {
     vm.subject = {
	        SubjectName:$stateParams.SubjectName,
	        SubjectID:$stateParams.SubjectID
     };
      vm.homework = {
        homeId:parseInt($stateParams.homeworkId)
      };
      vm.homeworkResults = await http.get("GetHomeworkResult");
      vm.homeworkResult = vm.homeworkResults.find((item)=>{
          return item.homework.homeworkId === vm.homework.homeId;
      });
      vm.homeworkResultDetail = await http.get("GetHomeworkResultDetail",{
        homeworkResultID:vm.homeworkResult.homework.id
      });
    } catch (error) {
      http.alert({
        parent:$element,content:"获取学生作业结果详情异常"
      });
    }
  }

  $scope.$on("ready_back",function(){
  
    $state.go("student.studentHomeworkList",{
    	SubjectName:$stateParams.SubjectName,
        SubjectID:$stateParams.SubjectID
      });
  }); 
}