import {app} from "../../bootstrap.js"
export let name = "onlineAnswer";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/onlineAnswer/onlineAnswer.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
	let vm = this;
	vm.onlineQuestions=null;
	vm.$onInit = async function(){
	    let result = await http.get("GetStudentQuestion");
	    vm.onlineQuesions = result;
	    console.log(result);
	    $scope.$applyAsync(null);
//		vm.onlineQuestions.forEach( (item)=>{
//			item.createTime =new Date(item.createTime.time);
//		});
		$scope.$applyAsync(null);
	}

}