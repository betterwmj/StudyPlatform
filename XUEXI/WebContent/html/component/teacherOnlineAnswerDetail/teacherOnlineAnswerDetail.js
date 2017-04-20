import {app} from "../../bootstrap.js"
export let name = "teacherOnlineAnswerDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherOnlineAnswerDetail/teacherOnlineAnswerDetail.html",
    controller:["$scope","$cookies","$element","$state","http","$stateParams",controller]
  });
}
//参数不能写反
function controller($scope, $cookies,$element,$state,http,$stateParams,){
	let vm = this;
	vm.$onInit=init;
	vm.isShow=false;
	function init(){ 
	    vm.onlineQuesionsDetail = $stateParams.onlineQuestionsDetail;
	   
   }
   vm.reply=function(){
	   vm.isShow = true;
   }
   vm.sure=async function(){	
	   let userInfo = $cookies.getObject("userInfo");
	   let data = {
		  answer:vm.answerContent,
		  questionID:$stateParams.onlineQuestionsDetail.id,
		  answerID:userInfo.id
	   };
	   vm.isShow = true;
	   let result= await http.post('ReplyStudentQuestion',data);
	   if(result === true){
		   vm.msg="回复成功";
	   }else{
		   vm.msg="回复失败";
	   }	
	   $scope.$applyAsync(null);
   }
   
}