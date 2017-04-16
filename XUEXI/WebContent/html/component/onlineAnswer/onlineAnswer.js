import {app} from "../../bootstrap.js"
export let name = "onlineAnswer";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/onlineAnswer/onlineAnswer.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;

}