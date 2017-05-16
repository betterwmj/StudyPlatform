import {app} from "../../bootstrap.js"
export let name = "studentTestPaperList";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentTestPaperList/studentTestPaperList.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.subject = null;
  vm.paperUnfinish = [];
  vm.paperFinish = [];
  vm.paperLink = null;
  vm.isDownload =false;
  vm.currentUnfinishPage=1;
  vm.pageItems =5;
  vm.currentFinishPage=1;
  vm.previousFinishPage =previousFinishPage;
  vm.nextFinishPage =nextFinishPage;
  vm.previousUnfinishPage=previousUnfinishPage;
  vm.nextUnfinishPage=nextUnfinishPage;
  vm.paperFinishTemp =[];
  vm.paperUnfinishTemp=[];
 
  vm.$onInit = async function(){
    try {
      if($stateParams.SubjectName!==null){
	      vm.subject = {
	        SubjectName:$stateParams.SubjectName,
	        SubjectID:$stateParams.SubjectID,
	        teacherID :$stateParams.teacherID
	      };	    
      }
      if($stateParams.currentUnfinishPage!=null){	  
    	  vm.currentUnfinishPage=$stateParams.currentUnfinishPage;
          vm.pageItems=$stateParams.pageItems;
      }
      if($stateParams.currentFinishPage!=null){	  
    	  vm.currentFinishPage=$stateParams.currentFinishPage;
          vm.pageItems=$stateParams.pageItems;
          vm.selectedIndex =1
      }
      let rs = await getPaper();
    } catch (error) {
      http.alert({
        parent:$element,content:"初始化页面异常"
      });
    }
  }
  function previousFinishPage(){
		vm.currentFinishPage--;
		getFinishData();
	}
	function nextFinishPage(){
		vm.currentFinishPage++;
		getFinishData();
	}	
	function previousUnfinishPage(){
		vm.currentUnfinishPage--;
		getUnFinishData();
   }
   function nextUnfinishPage(){
		vm.currentUnfinishPage++;
		getUnFinishData();
   }
  async function  getPaper(){
    vm.papers = await http.get("GetPaper",{
      subjectId:vm.subject.SubjectID,
    });
    vm.papers.forEach( (paper)=>{
      paper.createTime = new Date(paper.createTime.time);
    });
    let paperResult = await http.get("GetPaperResult");
    vm.papers.forEach( (paper)=>{
      var findResult = paperResult.find( (result)=>{
        if( result.paper.paperId === paper.testpaperID ){
          paper.resultObj = result;
          return true;
        }
      });
      if( findResult !== undefined ){
            vm.paperFinish.push(paper);
      }else{
            vm.paperUnfinish.push(paper);       
      }
      
    });
    if(vm.paperFinish.length===0){
    	 vm.paperFinishTemp=vm.paperFinish;
    	 vm.paperFinishTemp.totalpage=0; 	
    } else{
    	
    	 vm.paperFinishTemp=vm.paperFinish;
    	 vm.paperFinishTemp.totalpage =Math.ceil( vm.paperFinishTemp.length/vm.pageItems);
    	 getFinishData();
    }  
    if(vm.paperUnfinish.length===0){
    	 vm.paperUnfinishTemp=vm.paperUnfinish;
    	 vm.paperUnfinishTemp.totalpage=0;
    }else{
    	  vm.paperUnfinishTemp=vm.paperUnfinish;
    	  vm.paperUnfinishTemp.totalpage =Math.ceil( vm.paperUnfinishTemp.length/vm.pageItems);
    	  getUnFinishData();
    }  
  }
  function getFinishData(){
	    let newData = [];
	    let start = (vm.currentFinishPage-1)*vm.pageItems;
	    console.log("start"+start);
	    for(let i = start; i < start+vm.pageItems; ++i){
	      if( i >= vm.paperFinishTemp.length ){
	        vm.paperFinish = newData;
	        return;
	      }
	      newData.push( vm.paperFinishTemp[i]);
	    }
	    vm.paperFinish = newData;
	    console.log("newData"+newData);
	    console.log("newData"+newData.length);
	    console.log("paperFinish"+ vm.paperFinish.length);
  }
  function getUnFinishData(){
	    let newData = [];
	    let start = (vm.currentUnfinishPage-1)*vm.pageItems;
	    for(let i = start; i < start+vm.pageItems; ++i){
	      if( i >= vm.paperUnfinishTemp.length ){
	        vm.paperUnfinish = newData;
	        return;
	      }
	      newData.push( vm.paperUnfinishTemp[i]);
	    }
	    vm.paperUnfinish = newData;
	    console.log("newData"+newData.length);
	    console.log("paperUnfinish"+ vm.paperUnfinish.length);
	}
  vm.downloadPaper =async function(paperId){
    try {
      let result = await http.get("DownLoadPaper",{paperID:paperId});
      vm.paperLink = result;
      http.alert({
        parent:$element,content:"试卷生成成功，文件路径如下：\n" +  vm.paperLink + "\n"
      })
      .then(function(){
          let downLink = document.getElementById("download_paper");
          let event = document.createEvent("MouseEvents"); 
          event.initEvent("click", false, false); 
          downLink.dispatchEvent(event);
      });
    } catch (error) {
      http.alert({
        parent:$element,content:"生成试卷异常"
      });
    }
	  

  }
  $scope.$on("ready_back",function(){
    $state.go("student.test");
  });

  vm.openMenu = function($mdMenu, ev){
    $mdMenu.open(ev);
  }
}