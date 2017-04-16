import {app} from "../../bootstrap.js"
export let name = "studentTestPaper";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentTestPaper/studentTestPaper.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.subject = null;
  vm.$onInit = async function(){
    console.log($stateParams);
    $scope.$applyAsync(null);
  }
}