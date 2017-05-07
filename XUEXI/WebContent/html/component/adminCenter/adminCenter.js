import {app} from "../../bootstrap.js"
export let name = "adminCenter";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/adminCenter/adminCenter.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
 
}

  