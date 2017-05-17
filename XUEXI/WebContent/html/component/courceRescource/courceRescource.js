import {app} from "../../bootstrap.js"
export let name = "courceRescource";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/courceRescource/courceRescource.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
	let vm = this;
	vm.recourceList=null;
	vm.currentPage=1;
	vm.pageItems =7;
	vm.previousPage =previousPage;
	vm.nextPage =nextPage;
	vm.$onInit = async function(){
		  getResource();
	}
  async function  getResource(){
 
	  try{	
			let result = await http.get("GetRecource",{		
				currentPage:vm.currentPage,
				pageItems:vm.pageItems
		    });
			vm.recourceList = result;
			if(result.length!==0){
				vm.recourceList.totalpage =Math.ceil(result[0].count/vm.pageItems);
				vm.recourceList.forEach( async (item)=>{
					item.createTime =new Date(item.createTime.time);
			    });
			}
			
		}catch (error) {
			http.alert({
				parent:$element,content:"获取课程资源失败"
			});
		}
	}
   function previousPage(){
		vm.currentPage--;
		getResource();
	}
	function nextPage(){
		vm.currentPage++;
		getResource();
	}
	 vm.download =async function(paperId){
		  let dialog = http.confirm({
	            parent:$element,content:"是否下载?"
         });
         dialog.then(async function(){
        	 let downLink = document.getElementById("download_paper");
 	         let event = document.createEvent("MouseEvents"); 
 	         event.initEvent("click", false, false); 
 	         downLink.dispatchEvent(event);
         },function(){
           
         });
	
	  }
	$scope.$on("ready_back",function(){
      $state.go("student.studentIndex");
    });
}