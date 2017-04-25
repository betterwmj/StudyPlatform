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
   vm.homework = $stateParams.homework;
   vm.homeworkResult = await http.get("GetHomeworkResult",{
     homeworkID:vm.homework.homeId
   });
   vm.homeworkResultDetail = await http.get("GetHomeworkResultDetail",{
     homeworkResultID:vm.homeworkResult.id
   });

  } 
}