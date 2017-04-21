import {app} from "../../bootstrap.js"
export let name = "studentHomework";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentHomework/studentHomework.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.subjects = [];
  vm.$onInit = async function(){
    try {
      vm.subjects = await http.get("GetClassSubject");
    } catch (error) {
      
    }finally{
      $scope.$applyAsync(null);
    }
  }
}