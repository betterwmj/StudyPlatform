import {app} from "../../bootstrap.js"
export let name = "studentCenter";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentCenter/studentCenter.html",
    controller:["$scope","$element","$state",'$cookies',"http",'$httpParamSerializerJQLike',controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$httpParamSerializerJQLike){
	  let vm = this;
	  vm.$onInit = async function(){
	    let userinfo = await http.get("GetUserInfoByName");
	    vm.userinfo = userinfo;
	    $scope.$applyAsync(null);
	  }
}