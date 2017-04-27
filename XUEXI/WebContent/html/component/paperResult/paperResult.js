import {app} from "../../bootstrap.js"
export let name = "paperResult";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/paperResult/paperResult.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.paper = null;
  vm.paperResultList = [];
  vm.$onInit = async function(){
    vm.paper = {
      testName:$stateParams.testName,
      testpaperID:$stateParams.testpaperID,
    }
    if( vm.paper === null || vm.paper.testpaperID === null ){
      return;
    }
    vm.paperResultList = await http.get("GetPaperResult",{
      paperID:vm.paper.testpaperID
    });
    $scope.$applyAsync(null);
  }
}