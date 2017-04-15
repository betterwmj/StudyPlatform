import {app} from "../../bootstrap.js"
export let name = "paperResultDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/paperResultDetail/paperResultDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.paperResult = null;
  vm.paperResultList = [];
  vm.$onInit = async function(){
    vm.paperResult = $stateParams.paperResult;
    
    $scope.$applyAsync(null);
  }
}