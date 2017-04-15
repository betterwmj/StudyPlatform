import {app} from "../../bootstrap.js"
export let name = "paperDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/paperDetail/paperDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.paper = null;
  vm.paperDetail = null;
  vm.$onInit = async function(){
    vm.paper = $stateParams.paper;
    if( vm.paper === null || vm.paper.testpaperID === null ){
      return;
    }
    vm.paperDetail = await http.get("GetPaperDetail",{
      paperID:vm.paper.testpaperID
    });
    $scope.$applyAsync(null);
  }
}