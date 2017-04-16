import {app} from "../../bootstrap.js"
export let name = "studentTestPaperResultDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentTestPaperResultDetail/studentTestPaperResultDetail.html",
    controller:["$scope","$element","$state",'$cookies',"$stateParams","http",controller]
  });
}
function controller($scope,$element,$state,$cookies,$stateParams,http){
  let vm = this;
  vm.paper = null;
  vm.resultDetail = [];
  vm.$onInit = async function(){
    console.log($stateParams);
    vm.paper = $stateParams.paper;
    vm.paper.resultObj.paper.time = new Date(vm.paper.resultObj.paper.time.time);
    vm.resultDetail = await http.get("GetPaperResultDetail",{
      paperResultID:vm.paper.resultObj.paper.id
    });
    $scope.$applyAsync(null);
  }
}