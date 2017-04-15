import {app} from "../../bootstrap.js"
export let name = "studentCeneter";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/StudentCenter/StudentCenter.html",
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