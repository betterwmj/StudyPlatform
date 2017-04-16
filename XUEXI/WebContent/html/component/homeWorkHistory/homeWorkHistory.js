import {app} from "../../bootstrap.js"
export let name = "homeWorkHistory";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/homeWorkHistory/homeWorkHistory.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
  vm.types = [
    {label:"选择题",value:1},
    {label:"判断题",value:2}
  ];
  vm.currentType = vm.types[0];

}