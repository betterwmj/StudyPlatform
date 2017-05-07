import {app} from "../../bootstrap.js"
export let name = "registerTeacher";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/registerTeacher/registerTeacher.html",
    controller:["$scope","$element","$state",'$cookies',"http",'$httpParamSerializerJQLike',"$uibModal",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$httpParamSerializerJQLike,$uibModal){
  let vm = this;
  vm.userInfo = {
    teacher_number:"",
    realName:"",
    password:"",
    rePassword:"",
  };
  vm.register = async function(){
    if( checkRegister() === false ){
      return;
    }
    let userResult =null;
    try {
    	userResult = await http.get("GetUserInfoByName",{user_number: vm.userInfo.teacher_number,type:1});
    	if(userResult === null ){
    		$uibModal.open({
    	        animation: true,
    	        component: 'commonDialog',
    	        resolve: {
    	          content:()=>{ return "您不是本校教师，无法注册";}
    	        }
    	   });
    	}
    	else if(userResult.realName !==  vm.userInfo.realName ){
    		$uibModal.open({
    	        animation: true,
    	        component: 'commonDialog',
    	        resolve: {
    	          content:()=>{ return "请检查您的真实姓名是否正确";}
    	        }
    	   });
    	}
    	else if(userResult.password !== "" ){
    		$uibModal.open({
    	        animation: true,
    	        component: 'commonDialog',
    	        resolve: {
    	          content:()=>{ return "您已注册，请登录";}
    	        }
    	   });
    	}else{
    		register();
    	}
    	
    	
      } catch (error) {
        return;
      }
      async function register(){
    	 try {
    	      let result = await http.post("TeacherRegister",
    	        $httpParamSerializerJQLike({
    	          teacher_number:vm.userInfo.teacher_number,
    	          realName:vm.userInfo.realName,
    	          password:vm.userInfo.password,
    	        }),
    	        {
    	          'Content-Type': 'application/x-www-form-urlencoded'
    	        });
    	      if( result === true ){
    	        $state.go('login');
    	      }
    	         
    	    } catch (error) {
    	      $uibModal.open({
    	        animation: true,
    	        component: 'commonDialog',
    	        resolve: {
    	          content:()=>{ return "注册失败";}
    	        }
    	      });
    	    }
    	  }
     }
     
  function checkRegister(){
    let msg = "";
    if( vm.userInfo.teacher_number.trim() === ""){
      msg = "请输入用户名";
    }else if( vm.userInfo.realName.trim() === "" ){
      msg = "请输入真实姓名";
    }else if( vm.userInfo.password.trim() === "" ){
      msg = "请输入密码";
    }else if( vm.userInfo.password !== vm.userInfo.rePassword ){
      msg = "两次输入密码不一样";
    }
    if( msg === ""){
      return true;
    }else{
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return msg;}
        }
      });
      return false;
    }
  }
}