import {app} from "../../bootstrap.js"
export let name = "paperDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/paperDetail/paperDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  $scope.$on("ready_back",function(){
    $state.go("teacher.publishPaper");
  });
  let vm = this;
  vm.msg = "";
  vm.paper = {};
  vm.paperDetail = null;
  vm.$onInit = async function(){ 
    vm.paper = {
      testName:$stateParams.testName,
      testpaperID:$stateParams.testpaperID,
    }
    if( vm.paper === null || vm.paper.testpaperID === null ){
      return;
    }
    try {
      vm.paperDetail = await http.get("GetPaperDetail",{
        paperID:vm.paper.testpaperID
      });
      setColor();
    } catch (error) {
      http.alert({
        parent:$element,content:"获取试卷详情异常"
      });
    }
  }

  function setColor(){
    vm.paperDetail.forEach( (item)=>{
      item.color = http.getColor();
    });
  }
}