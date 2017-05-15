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
  let isTest =false;
  vm.$onInit = function(){
      vm.userInfo = $cookies.getObject("userInfo");
  }

  vm.goBack = function(){
	   $scope.$emit("request_back");
  };
  $scope.$on("testpaper",function(){
	  isTest =true;
  });
  vm.goHomePage =function(){
	  if(isTest ===true){
		  $scope.$emit("homepage_back");
	  }else{
		  $state.go("student.studentIndex");
	  }
	  
  }
  
}