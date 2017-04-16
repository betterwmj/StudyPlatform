import {app} from "../../bootstrap.js"
export let name = "studentTest";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentTest/studentTest.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.subjects = [];
  vm.$onInit = async function(){
    let subjects = await http.get("GetClassSubject");
    vm.subjects = subjects;
    $scope.$applyAsync(null);
  }
}