import {app} from "../../../../bootstrap.js"
export let name = "teacherOnlineAnswerNavigation";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacher/onlineAnswer/teacherOnlineAnswerNavigation/teacherOnlineAnswerNavigation.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  $scope.$on("ready_back",function(){
    $state.go("teacher.teacherIndex");
  });
  let vm = this;
}