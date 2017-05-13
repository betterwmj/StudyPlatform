import {app} from "../../bootstrap.js"
export let name = "studentOnlineAnswerDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentOnlineAnswerDetail/studentOnlineAnswerDetail.html",
    controller:["$scope","$cookies","$element","$state","http","$stateParams",controller]
  });
}
function controller($scope, $cookies,$element,$state,http,$stateParams){
	let vm = this;
	vm.$onInit=init;
	vm.isShow=false;
	vm.replyList=null;
	vm.onlineQuesionsDetail =null;
	vm.currentClass=null;
	vm.isHistroy =null;
	function init(){ 
	    vm.onlineQuesionsDetail = $stateParams.onlineQuestionsDetail; 
	    vm.currentClass = $stateParams.currentClass;
	    vm.isHistroy = $stateParams.isHistroy;
	    getQuestionReply();
   }
   vm.reply=function(){
	   vm.isShow = true;
	   vm.msg="";
   }
   vm.sure=async function(){	
	   let userInfo = $cookies.getObject("userInfo");
	   let data = {
		  answer:vm.answerContent,
		  questionID:$stateParams.onlineQuestionsDetail.id,
		  answerID:userInfo.id,
		  type:userInfo.type
	   };
	   vm.isShow = true;
		 try {
			 	let result= await http.post('ReplyStudentQuestion',data);
				if(result === true){
					http.alert({
						parent:$element,content:"回复成功"
					});
					vm.isShow = false;
		   		getQuestionReply();
				}else{
					http.alert({
						parent:$element,content:"回复失败"
					});
				}
		 } catch (error) {
			 http.alert({
				parent:$element,content:"回复失败"
			 });
		 }
	     
   }
   async function getQuestionReply(){	
			try {
		   	let result= await http.get('getQuestionAnswer',{questionID:vm.onlineQuesionsDetail.id});
				vm.replyList =result;
				vm.replyList.forEach( async (item)=>{
					item.answerTime =new Date(item.answerTime.time);
					if(item.type ===0){
						let studentInfo = await http.get("GetStudents",{
							userID:item.answerId
						});
						if(studentInfo.length!==0)
								item.realName =studentInfo[0].realName;
					}else{
						let teacherInfo = await http.get("GetTeachers",{
							userID:item.answerId
						});
						if(teacherInfo.length!==0)
								item.realName =teacherInfo[0].realName;
					}
				});	    
	   }catch (error) {
				http.alert({
					parent:$element,content:"获取回复失败,"+error
				});
				return;
	    }
   }
   vm.deleleReply = async function(replyId,answerId){
		  let userinfo = $cookies.getObject("userInfo");
		  if(parseInt("10", userinfo.id) === answerId){
			  let dialog = http.confirm({
		            parent:$element,content:"是否删除?"
	         });
	          dialog.then(async function(){
	        	  let result= await http.get('DeleteReply',{ReplyID:replyId});
				   if(result === true){
					 
					   getQuestionReply();
				   }else{
					   
					   http.alert({
							parent:$element,content:"删除失败"
					   });
				  }	 
	        },function(){
	          
	        }); 
		}
	 }
	$scope.$on("ready_back",function(){
    	if(vm.isHistroy === true){
				$state.go("student.studentQuestionHistory");
			}else{
				$state.go("student.onlineQuestion",{currentClass:vm.currentClass});
			}
	});
}