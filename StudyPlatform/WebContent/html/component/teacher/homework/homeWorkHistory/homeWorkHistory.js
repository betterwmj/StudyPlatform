import {app} from "../../../../bootstrap.js"
export let name = "homeWorkHistory";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacher/homework/homeWorkHistory/homeWorkHistory.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  $scope.$on("ready_back",function(){
    $state.go("teacher.homework");
  });
  let vm = this;
  vm.currentPage=1;
  vm.pageItems =7;
  vm.previousPage =previousPage;
  vm.nextPage =nextPage;
  vm.getHomework=getHomework;
  vm.$onInit = async function(){
	  if( $stateParams.currentPage !=null){
			 vm.currentPage = $stateParams.currentPage;
		     vm.pageItems = $stateParams.pageItems;
		     vm.totalpage = $stateParams.totalpage;
	  }
	  getHomework();
  }
   function previousPage(){
		vm.currentPage--;
		getHomework();
   }
    function nextPage(){
		vm.currentPage++;
		getHomework();
	}	
  async function getHomework(){
	  try {
	      vm.homeworks = await http.get("GetHomework",{
	    	  currentPage:vm.currentPage,
			  pageItems:vm.pageItems
	      });
	      if(vm.homeworks.length===0){
				vm.homeworks.totalpage=0;
		   }
	      if(vm.homeworks.length!==0){
				vm.homeworks.totalpage=Math.ceil(vm.homeworks[0].count/vm.pageItems);
		   }
	      vm.homeworks.forEach( (item)=>{
	        if( item.finishTime ){
	          item.finishTime = new Date(item.finishTime.time);
	        }
	      });
	    } catch (error) {
	      http.alert({
	        parent:$element,content:"获取作业列表异常"
	      });
	    }
  }
  vm.deleteHomeWork =async function(homeId){
	  let dialog = http.confirm({
	      parent:$element,content:"是否删除该作业?"
		});
		dialog.then(async function(){
			  let result = await http.get("DeleteHomeWork",{
			    	 homeworkID:homeId
			      });
			      if( result === true ){
			    	 http.alert({
				            parent:$element,content:"作业删除成功"
				     });
			    	 getHomework();
			      }else{
			     
			        http.alert({
			            parent:$element,content:"删除失败"
			        });
			   }
		},function(){
		  
		});
  }
}