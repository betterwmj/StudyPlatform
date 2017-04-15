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
    vm.papers = await http.get("GetPaper");
    $scope.$applyAsync(null);
  }

  vm.publishPaper = async function(paper){
    vm.msg = '';
    try {
      let result = await http.get("PublishPaper",{
        paperID:paper.testpaperID
      });
      if( result === true ){
        vm.papers = await http.get("GetPaper");
      }else{
        vm.msg = "发布试卷失败";
      }
      $scope.$applyAsync(null);
    } catch (error) {
      console.log(error);
      vm.msg = "发布试卷失败";
      $scope.$applyAsync(null);
    }
    
  }
}