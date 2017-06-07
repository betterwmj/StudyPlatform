import {app} from "../../../bootstrap.js"
export let name = "studentIndexHead";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/student/studentIndexHead/studentIndexHead.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;

  vm.$onInit = function(){
    vm.userInfo = $cookies.getObject("userInfo");
  }

  vm.logout = function(){
    //$cookies.remove("userInfo");
    $state.go("login");
  }
}