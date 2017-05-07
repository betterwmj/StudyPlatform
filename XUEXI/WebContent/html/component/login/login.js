import {app} from "../../bootstrap.js"
export let name = "login";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/login/login.html",
    controller:["$scope","$element","$state",'$cookies',"http","$uibModal",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$uibModal){
  let vm = this;
  vm.userInfo = {
    user_number:"",
    password:"",
    type:"0"
  };
  vm.errorMsg = {
    user_number:false,
    password:false
  };
  vm.subjects = [];
  vm.loginResultMsg = false;
  vm.remember = true;//是否记住密码
  vm.login = login;
  vm.$onInit = async function(){
    let userInfo = $cookies.getObject("userInfo");
    if( userInfo ){
    	if(userInfo.type==="0"){
    		vm.userInfo.user_number = userInfo.school_number;
            vm.userInfo.password = userInfo.password;
    	}else if(userInfo.type==="1"){
    		 vm.userInfo.user_number = userInfo.teacher_number;
             vm.userInfo.password = userInfo.password; 
    	}
    }
  }

  async function login(){
    if( false === loginCheck() ){
      return;
    }
    
    let userData = {};
    angular.copy(vm.userInfo,userData);
    userData.type = parseInt(userData.type);
    let userResult =null;
    try {
    	userResult = await http.get("GetUserInfoByName",{user_number: userData.user_number,type:userData.type});
    	if(userResult === null || userResult.password ==="" ){
    		$uibModal.open({
    	        animation: true,
    	        component: 'commonDialog',
    	        resolve: {
    	          content:()=>{ return "该账号未注册，请先注册";}
    	        }
    	    });
    	}
    	else{
    		  let result = null;
    		    try {
    		      result = await http.post("Login",userData);
    		    } catch (error) {
    		      $uibModal.open({
    		        animation: true,
    		        component: 'commonDialog',
    		        resolve: {
    		          content:()=>{ return error;}
    		        }
    		      });
    		      return;
    		    }
    		    if( vm.remember ){
    		        result.password = vm.userInfo.password;
    		      }
    		      if(userData.type === 0 ){
    		   
    		        $cookies.putObject("userInfo",result);
    		        $state.go("student.test");

    		      }else{
    		        $cookies.putObject("userInfo",result);
    		        $state.go("teacher.paper");
    		      }
    	}
    		
      } catch (error) {
        return;
      }
  }

  function loginCheck(){
    vm.loginResultMsg = false;
    vm.errorMsg = {
      user_number:false,
      password:false
    };
    if(vm.userInfo.user_number === ""){
      vm.errorMsg.user_number = "用户名不能为空";
      return false;
    }
    if(vm.userInfo.password === ""){
      vm.errorMsg.password = "密码不能为空";
      return false;
    }
    return true;
  }
}