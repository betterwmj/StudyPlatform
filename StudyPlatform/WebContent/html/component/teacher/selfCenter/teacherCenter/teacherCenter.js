import {app} from "../../../../bootstrap.js"
export let name = "teacherCenter";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacher/selfCenter/teacherCenter/teacherCenter.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
  $scope.$on("ready_back",function(){
    $state.go("teacher.teacherIndex");
  });
  vm.$onInit = function(){
    vm.userInfo = $cookies.getObject("userInfo");
  }

  vm.logout = function(){
    
  }
}