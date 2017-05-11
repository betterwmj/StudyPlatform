import {app} from "../../bootstrap.js"
export let name = "teacherIndex";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherIndex/teacherIndex.html",
    controller:["$scope","$rootScope","$element","$state",controller]
  });
}
function controller($scope,$rootScope,$element,$state){
  let vm = this;
  vm.$onInit = function(){
   
  }
}