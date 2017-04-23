import {app} from "../../bootstrap.js"
export let name = "root";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/root/root.html",
    controller:["$scope","$rootScope","$element","$state",controller]
  });
}
function controller($scope,$rootScope,$element,$state){
  let vm = this;
  vm.$onInit = function(){
    $rootScope.teacherActive = [true,false,false,false];
    $rootScope.studentActive = [true,false,false,false];
    //$state.go("login");
  }
}