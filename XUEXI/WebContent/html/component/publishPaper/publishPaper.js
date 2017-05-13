import {app} from "../../bootstrap.js"
export let name = "publishPaper";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/publishPaper/publishPaper.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  $scope.$on("ready_back",function(){
    $state.go("teacher.paper");
  });
  let vm = this;
  vm.papers = [];
  vm.msg = "";
  vm.paperLink = null;
  vm.isDownload =false;
  vm.$onInit = async function(){
    try {
      vm.papers = await http.get("GetPaper");
      vm.papers.forEach( (item)=>{
    	  item.createTime =new Date(item.createTime.time);
      });
    } catch (error) {
      http.alert({
        parent:$element,content:"获取试卷信息异常"
      });
    }
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
        vm.papers = await http.get("GetPaper");
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
	  http.alert({
			parent:$element,content:"试卷生成成功，文件路径如下：\n" +  vm.paperLink + "\n"
			
	  });
	  vm.isDownload =true;  
  }
}