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
	vm.imgUrl=null;
    vm.userinfo = null;
	function init(){ 
	    vm.onlineQuesionsDetail = $stateParams.onlineQuestionsDetail; 
	    vm.currentClass = $stateParams.currentClass;
	    vm.isHistroy = $stateParams.isHistroy;
	    vm.userinfo = $cookies.getObject("userInfo");
	    vm.userinfoId =parseInt("10", vm.userinfo.id);
	    getQuestionReply();
	    setTimeout(function(){
	        let imgInputs = findImgInput();
	        imgInputs.eq(0).bind("change",onSelectImg);
	    },0);
   }
   vm.reply=function(){
	   vm.isShow = true;
	   vm.msg="";
   }
   function findImgInput(){
	      return angular.element(document.getElementsByClassName("js_product_imgs"));
	  }
	  function onSelectImg(event){
	      let parentElement=event.target.parentNode;
	      let img=null;
	      for(let i=0;i<parentElement.children.length;i++){
	          if(parentElement.children[i].nodeName==="IMG"){
	              img=parentElement.children[i];
	          }
	      }
	      let files=event.target.files;
	      if( files.length === 0 ){
	          img.src="";
	          return;
	      }
	      let file = files[0];
	      let reader = new FileReader();
	      reader.onload = function(e) { 
	          img.src = e.target.result;
	      }; 
	      reader.readAsDataURL(file);
	  }
	  vm.sure = async function(){
		   let imgs=[];
	      imgs = findImgInput();
	      let file=[];
	      for(var i=0;i<imgs.length;i++){
	          if(imgs[i].files[0]!==undefined){
	               file.push(imgs[i].files[0]);
	          } 
	      }
	      let formData = new FormData();
	      for(var i=0;i<file.length;i++){
	          formData.append("img"+i,file[i]);
	      } 
		   try {
			   if(file.length!=0){
				   let imgResult = await http.submitForm("UploadImage",formData);
				   vm.imgUrl =imgResult;
				}
			   reply();
		   } catch (error) {
			   console.log(error);
			   http.alert({
					parent:$element,content:"上传图片失败"
			   });
		   }
	      
	  }
	  vm.goToImgUrl=function(img){
		  //window.open(img);
		  http.imgDialog(img);
	  }
    async function reply(){	
	   let userInfo = $cookies.getObject("userInfo");
	   let content =vm.answerContent;
	   if(content ===null || content==="" ||content ===undefined){
		 
		   http.alert({
				parent:$element,content:"请输入内容"
			});
		   return;
	   }
	   let data = {
		  answer:vm.answerContent,
		  questionID:$stateParams.onlineQuestionsDetail.id,
		  img:vm.imgUrl,
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