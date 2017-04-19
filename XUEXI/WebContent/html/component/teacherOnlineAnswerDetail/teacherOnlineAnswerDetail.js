import {app} from "../../bootstrap.js"
export let name = "teacherOnlineAnswerDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherOnlineAnswerDetail/teacherOnlineAnswerDetail.html",
    controller:["$scope","$element","$state","http","$stateParams",controller]
  });
}
//参数不能写反
function controller($scope,$element,$state,http,$stateParams,){
	let vm = this;
	vm.$onInit=init;
	vm.isShow=false;
	function init(){ 
	    vm.onlineQuesionsDetail = $stateParams.onlineQuestionsDetail;
	   
   }
   vm.reply=function(){
	   vm.isShow = true;
   }
   vm.sure=function(){
	   vm.isShow = true;
   }
   
}