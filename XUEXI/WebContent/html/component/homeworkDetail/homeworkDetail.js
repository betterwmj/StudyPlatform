import {app} from "../../bootstrap.js"
export let name = "homeworkDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/homeworkDetail/homeworkDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.$onInit = async function(){
    vm.homework = $stateParams.homework;
    vm.homeworkDetail = await http.get("GetHomeworkDetail",{
      homeworkID:vm.homework.homeId
    });
    $scope.$applyAsync(null);
  };
}