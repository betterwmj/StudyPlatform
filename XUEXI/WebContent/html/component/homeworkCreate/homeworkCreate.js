import {app} from "../../bootstrap.js"
export let name = "homeworkCreate";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/homeworkCreate/homeworkCreate.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
  vm.types = [
    {label:"选择题",value:1},
    {label:"判断题",value:2},
    {label:"简答题",value:3}
    
  ];
  vm.currentType = vm.types[0];

}