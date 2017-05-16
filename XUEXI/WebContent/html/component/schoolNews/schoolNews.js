import {app} from "../../bootstrap.js"
export let name = "schoolNews";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/schoolNews/schoolNews.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
	 let useinfo=$cookies.getObject("userInfo");
	  
	 $scope.$on("ready_back",function(){
       
        if(useinfo.type ===0){
        	 $state.go("student.studentIndex");
   	    }else{
   	        $state.go("teacher.teacherIndex");
   	    }
        
    });
	let vm = this;
	vm.newsList=null;
	vm.currentPage=1;
	vm.pageItems =5;
	vm.previousPage =previousPage;
	vm.nextPage =nextPage;
	vm.getNews = getNews;
	vm.$onInit = async function(){
		if( $stateParams.currentPage !=null){
			 vm.currentPage = $stateParams.currentPage;
		     vm.pageItems = $stateParams.pageItems;
		     vm.totalpage =$stateParams.totalpage;
		}
		getNews();
	}
	function previousPage(){
		vm.currentPage--;
		getNews();
	}
	function nextPage(){
		vm.currentPage++;
		getNews();
	}	
    async function  getNews(){
    	vm.newsList = await http.get("GetNews",{
			currentPage:vm.currentPage,
			pageItems:vm.pageItems
		});
		vm.newsList.forEach( async (item)=>{
			 item.creatTime =new Date(item.creatTime.time);
		});
		if(vm.newsList.length===0){
			vm.newsList.totalpage=0;
		}
		if(vm.newsList.length !==0){
			 vm.newsList.totalpage =Math.ceil(vm.newsList[0].count/vm.pageItems);
		}
     }
		
  
}