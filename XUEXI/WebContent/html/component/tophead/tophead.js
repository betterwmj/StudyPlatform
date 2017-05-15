import {app} from "../../bootstrap.js"
export let name = "tophead";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/tophead/tophead.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;

  vm.$onInit = function(){
    vm.userInfo = $cookies.getObject("userInfo");
  }

  vm.goBack = function(){
	    $scope.$emit("request_back");
	  };
	  vm.goHomePage =function(){
		 $state.go("student.studentIndex");
	  }
}