import {app} from "../../bootstrap.js"
export let name = "homeworkDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/homeworkDetail/homeworkDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  $scope.$on("ready_back",function(){
    $state.go("teacher.homeWorkHistory",{
    	currentPage : vm.currentPage,
	    pageItems :   vm.pageItems ,
	    totalpage :   vm.totalpage
    });
    
  });
  let vm = this;
  vm.$onInit = async function(){
    try {
      vm.homework = {
        homeWorkName:$stateParams.homeWorkName,
        homeworkId:$stateParams.homeworkId,
      };
      vm.currentPage = $stateParams.currentPage;
      vm.pageItems = $stateParams.pageItems;
      vm.totalpage = $stateParams.totalpage;
      vm.homeworkDetail = await http.get("GetHomeworkDetail",{
        homeworkID:vm.homework.homeworkId
      });
    } catch (error) {
      http.alert({
        parent:$element,content:"获取作业详情异常"
      });
    }
  };
}