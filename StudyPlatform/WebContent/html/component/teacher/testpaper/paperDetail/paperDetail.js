import {app} from "../../../../bootstrap.js"
export let name = "paperDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacher/testpaper/paperDetail/paperDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  $scope.$on("ready_back",function(){
    $state.go("teacher.publishPaper",{
    	currentPage : vm.currentPage,
	    pageItems :   vm.pageItems ,
	    totalpage :   vm.totalpage
    });
    
  });
  let vm = this;
  vm.msg = "";
  vm.paper = {};
  vm.paperDetail = null;
  vm.$onInit = async function(){ 
    vm.paper = {
      testName:$stateParams.testName,
      testpaperID:$stateParams.testpaperID,
    }
    vm.currentPage = $stateParams.currentPage;
	vm.pageItems = $stateParams.pageItems;
	vm.totalpage = $stateParams.totalpage;
    if( vm.paper === null || vm.paper.testpaperID === null ){
      return;
    }
    try {
      vm.paperDetail = await http.get("GetPaperDetail",{
        paperID:vm.paper.testpaperID
      });
    
    } catch (error) {
      http.alert({
        parent:$element,content:"获取试卷详情异常"
      });
    }
  }


}