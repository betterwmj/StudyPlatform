import {app} from "../../bootstrap.js"
export let name = "studentSidebar";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentSidebar/studentSidebar.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;

  vm.$onInit = function(){
    
  }
  vm.onActive = function($event){
    $event;
  }
}