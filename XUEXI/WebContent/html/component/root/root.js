import {app} from "../../bootstrap.js"
export let name = "root";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/root/root.html",
    controller:["$scope","$element","$state",controller]
  });
}
function controller($scope,$element,$state){
  let vm = this;
  vm.$onInit = function(){
    $state.go("login");
  }
}