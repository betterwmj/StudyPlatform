import {app} from "../../bootstrap.js"
export let name = "registerStudent";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/registerStudent/registerStudent.html",
    controller:["$scope","$element","$state",'$cookies',"http",'$httpParamSerializerJQLike',"$uibModal",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$httpParamSerializerJQLike,$uibModal){
  let vm = this;
  vm.userInfo = {
    school_number:"",
    realName:"",
    password:"",
    rePassword:"",
    school:"",
    telephone:"",
  };
  vm.register = async function(){
    if( check() === false ){
      return;
    }
    let userResult =null;
    try {
    	userResult = await http.get("GetUserInfoByName",{user_number: vm.userInfo.school_number,type:0});
    	if(userResult === null ){
    		$uibModal.open({
    	        animation: true,
    	        component: 'commonDialog',
    	        resolve: {
    	          content:()=>{ return "您不是本校学生，无法注册";}
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
    		studentRegister();
    	}
     }catch (error) {
          return;
     }
   
  }
  async function studentRegister(){
	  try {
	      let result = await http.post("StudentRegister",
	        $httpParamSerializerJQLike({
	          school_number:vm.userInfo.school_number,
	          realName:vm.userInfo.realName,
	          password:vm.userInfo.password,
	          school:vm.userInfo.school,
	          telephone:vm.telephone
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
	          content:()=>{ return "注册失败,"+error;}
	        }
	      });
	    }
  }
  
  function check(){
    let msg = "";
    if(vm.userInfo.school_number.trim() === ""){
      msg = "用户名不能为空";
    }else if(vm.userInfo.realName.trim() === ""){
      msg = "真实姓名不能为空";
    }else if( vm.userInfo.password.trim() === "" ){
      msg = "密码不能为空";
    }else if( vm.userInfo.rePassword !== vm.userInfo.password ){
      msg = "两次输入密码不一致";
    }else if( vm.userInfo.school.trim() === "" ){
      msg = "学校不能为空";
    }else if( vm.userInfo.telephone.trim() === "" ){
      msg = "手机号不能为空";
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