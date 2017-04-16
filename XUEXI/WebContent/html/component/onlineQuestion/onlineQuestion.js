import {app} from "../../bootstrap.js"
export let name = "onlineQuestion";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/onlineQuestion/onlineQuestion.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;

}