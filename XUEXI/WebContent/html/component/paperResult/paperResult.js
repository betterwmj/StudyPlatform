import {app} from "../../bootstrap.js"
export let name = "paperResult";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/paperResult/paperResult.html",
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
  vm.paper = null;
  vm.paperResultList = [];
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
      vm.paperResultList = await http.get("GetPaperResult",{
        paperID:vm.paper.testpaperID
      });
    } catch (error) {
      http.alert({
        parent:$element,content:"获取试卷作答结果异常"
      });
    }
  }
}