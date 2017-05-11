import {app} from "../../bootstrap.js"
export let name = "paperResultDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/paperResultDetail/paperResultDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  $scope.$on("ready_back",function(){
    $state.go("teacher.paperResult",{
      testpaperID:  vm.paperResult.testpaperID,
      testName:     vm.paperResult.testName
    });
  });
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
      http.alert({
        parent:$element,content:"获取试卷作答结果详情异常"
      });
    }
  }
}