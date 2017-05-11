import {app} from "../../bootstrap.js"
export let name = "teacherHomeworkNavigation";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherHomeworkNavigation/teacherHomeworkNavigation.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  $scope.$on("ready_back",function(){
    $state.go("teacher.teacherIndex");
  });
  let vm = this;

  vm.$onInit = function(){
  
  }
}