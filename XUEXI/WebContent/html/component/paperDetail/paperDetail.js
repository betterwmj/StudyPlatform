import {app} from "../../bootstrap.js"
export let name = "paperDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/paperDetail/paperDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams","$uibModal",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams,$uibModal){
  let vm = this;
  vm.msg = "";
  vm.paper = {};
  vm.paperDetail = null;
  vm.$onInit = async function(){ 
    vm.paper = {
      testName:$stateParams.testName,
      testpaperID:$stateParams.testpaperID,
    }
    if( vm.paper === null || vm.paper.testpaperID === null ){
      return;
    }
    try {
      vm.paperDetail = await http.get("GetPaperDetail",{
        paperID:vm.paper.testpaperID
      });
    } catch (error) {
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return "获取试卷详情异常";}
        }
      });
    }
    
  }
}