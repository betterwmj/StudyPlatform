import {app} from "../../bootstrap.js"
export let name = "login";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/login/login.html",
    controller:["$scope","$element","$state",controller]
  });
}
function controller($scope,$element,$state){
  let vm = this;
  vm.$onInit = function(){
    
  }
}