import {app} from "../../bootstrap.js"
export let name = "homeWorkHistory";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/homeWorkHistory/homeWorkHistory.html",
    controller:["$scope","$element","$state",'$cookies',"http","$uibModal",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
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
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return "获取作业列表异常";}
        }
      });
    }
  }
}