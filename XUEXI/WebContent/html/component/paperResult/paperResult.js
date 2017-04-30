import {app} from "../../bootstrap.js"
export let name = "paperResult";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/paperResult/paperResult.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams","$uibModal",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams,$uibModal){
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
    try {
      vm.paperResultList = await http.get("GetPaperResult",{
        paperID:vm.paper.testpaperID
      });
    } catch (error) {
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return "获取试卷作答结果异常";}
        }
      });
    }
  }
}