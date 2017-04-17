import {app} from "../../bootstrap.js"
export let name = "homeWorkHistory";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/homeWorkHistory/homeWorkHistory.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
  vm.$onInit = async function(){
    vm.homeworks = await http.get("GetHomework");
    vm.homeworks.forEach( (item)=>{
      if( item.finishTime ){
        item.finishTime = new Date(item.finishTime.time);
      }
    });
    $scope.$applyAsync(null);
  }
}