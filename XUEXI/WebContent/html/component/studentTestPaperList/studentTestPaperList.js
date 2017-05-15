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
  vm.displayPaper = [];
  vm.showFlag = true;
  vm.paperLink = null;
  vm.isDownload =false;
  vm.$onInit = async function(){
    try {
      vm.subject = {
        SubjectName:$stateParams.SubjectName,
        SubjectID:$stateParams.SubjectID,
        teacherID :$stateParams.teacherID
      };
      let rs = await getPaper();
    } catch (error) {
      http.alert({
        parent:$element,content:"初始化页面异常"
      });
    }
  }
  async function  getPaper(){
    vm.papers = await http.get("GetPaper",{
      subjectId:vm.subject.SubjectID,
    });
    let result =[];
    for( var i=0 ;i< vm.papers.length;i++ ){
    	let flag =0;
    	for(var j=0;j<result.length;j++){
        	if(result[j].testpaperID ===vm.papers[i].testpaperID){
        		flag=1;
        		break;
        	}
    	}
    	if(flag===0){
    		result.push(vm.papers[i]);
    	} 	
    	console.log(result);
    }
    vm.papers  = result;
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
    vm.displayPaper = vm.paperUnfinish;
  }

  vm.changePaperType = function(flag){
    vm.showFlag = flag;
    if( flag ){
      vm.displayPaper = vm.paperUnfinish;
    }else{
      vm.displayPaper = vm.paperFinish;
    }
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