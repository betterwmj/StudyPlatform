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
    console.log($stateParams);
    vm.homework = {
      homeWorkName:$stateParams.homeWorkName,
      homeworkId:$stateParams.homeworkId,
    };
    vm.homeworkDetail = await http.get("GetHomeworkDetail",{
      homeworkID:vm.homework.homeworkId
    });
    $scope.$applyAsync(null);
  };
}