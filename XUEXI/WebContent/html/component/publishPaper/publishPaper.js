import {app} from "../../bootstrap.js"
export let name = "publishPaper";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/publishPaper/publishPaper.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
  vm.papers = [];
  vm.msg = "";
  vm.$onInit = async function(){
    try {
      vm.papers = await http.get("GetPaper");
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
}