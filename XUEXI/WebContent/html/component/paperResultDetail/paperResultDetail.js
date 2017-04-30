import {app} from "../../bootstrap.js"
export let name = "paperResultDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/paperResultDetail/paperResultDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams","$uibModal",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams,$uibModal){
  let vm = this;
  vm.msg = "";
  vm.paperResult = null;
  vm.paperResultList = [];
  vm.$onInit = async function(){
    vm.paperResult = {
      id:$stateParams.resultId,
      testpaperID:$stateParams.testpaperID,
      testName:$stateParams.testName,
    };
    try {
      vm.paperResultList = await http.get("GetPaperResultDetail",{
        paperResultID:vm.paperResult.id
      });
    } catch (error) {
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return "获取试卷作答结果详情异常";}
        }
      }); 
    }
  }
}