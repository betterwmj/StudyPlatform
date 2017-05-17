import {app} from "../../bootstrap.js"
export let name = "publishPaper";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/publishPaper/publishPaper.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  $scope.$on("ready_back",function(){
    $state.go("teacher.paper");
  });
  let vm = this;
  vm.papers = [];
  vm.msg = "";
  vm.paperLink = null;
  vm.isDownload =false;
  vm.currentPage=1;
  vm.pageItems =7;
  vm.previousPage =previousPage;
  vm.nextPage =nextPage;
  vm.getPaper=getPaper;
  vm.$onInit = async function(){
	  if( $stateParams.currentPage !=null){
			 vm.currentPage = $stateParams.currentPage;
		     vm.pageItems = $stateParams.pageItems;
		     vm.totalpage = $stateParams.totalpage;
	  }
	  getPaper();
  }
  function previousPage(){
		vm.currentPage--;
		getPaper();
   }
  function nextPage(){
		vm.currentPage++;
		getPaper();
	}	
  async function getPaper(){
	  try {
	      vm.papers = await http.get("GetPaper", {
	    	    currentPage:vm.currentPage,
				    pageItems:vm.pageItems
	      });
	      vm.papers.forEach( (item)=>{
	    	  item.createTime =new Date(item.createTime.time);
	      });
	      if(vm.papers.length===0){
				  vm.papers.totalpage=0;
		    }
	      if(vm.papers.length!==0){
				vm.papers.totalpage=Math.ceil(vm.papers[0].count/vm.pageItems);
		   }
	    } catch (error) {
	      http.alert({
	        parent:$element,content:"获取试卷信息异常"
	      });
	    }
  }
  vm.deletePaper =async function(paperId){
	  let dialog = http.confirm({
			parent: $element, content: "是否删除该试卷?"
		});
		dialog.then(async function () {

			let result = await http.get("DeletePaper",{
		    	 paperID:paperId
		      });
		      if( result === true ){
		        http.alert({
		            parent:$element,content:"试卷删除成功"
		         });
		        getPaper();
		      }else{
		     
		        http.alert({
		            parent:$element,content:"删除失败"
		         });
		      }
		}, function () {

		});
  }
  vm.publishPaper = async function(paper){
    try {
      let result = await http.get("PublishPaper",{
        paperID:paper.testpaperID
      });
      if( result === true ){
        http.alert({
          parent:$element,content:"发布试卷成功"
        });
       	getPaper();
      }else{
        http.alert({
          parent:$element,content:"发布试卷失败"
        });
      }
    } catch (error) {
      http.alert({
        parent:$element,content:"发布试卷失败"
      });
    }  
  }

  vm.downloadPaper =async function(paperId){
	  let result = await http.get("DownLoadPaper",{paperID:paperId});
	  vm.paperLink = result;
	  let dialog = http.confirm({
		  parent:$element,content:"试卷生成成功，文件路径如下：\n" +  vm.paperLink + "\n"
     });
     dialog.then(async function(){
    	  let downLink = document.getElementById("download_paper");
          let event = document.createEvent("MouseEvents"); 
          event.initEvent("click", false, false); 
          downLink.dispatchEvent(event);
     },function(){
       
     });
  }
}