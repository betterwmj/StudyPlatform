import {app} from "../../bootstrap.js"
export let name = "homeWorkHistory";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/homeWorkHistory/homeWorkHistory.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  $scope.$on("ready_back",function(){
    $state.go("teacher.homework");
  });
  let vm = this;
  vm.$onInit = async function(){
    try {
      vm.homeworks = await http.get("GetHomework");
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
}