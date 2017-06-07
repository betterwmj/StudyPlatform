import {app} from "../../bootstrap.js"
export let name = "schoolNewsDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/schoolNewsDetail/schoolNewsDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
	  let vm = this;
	  vm.msg = "";
	  vm.$onInit = async function(){
	    try {
	        vm.currentPage = $stateParams.currentPage;
		    vm.pageItems = $stateParams.pageItems;
		    vm.totalpage =$stateParams.totalpage;
		    vm.newsDetail =$stateParams.newsDetail;
	    } catch (error) {
	      http.alert({
	        parent:$element,content:"获取校园动态详情异常"
	      });
	    }
	  }
    
	  $scope.$on("ready_back",function(){
	  
	    $state.go("student.news",{
	    	currentPage: vm.currentPage,
		    pageItems :  vm.pageItems ,
		    totalpage :  vm.totalpage
	      });
	  }); 

 
		
  
}