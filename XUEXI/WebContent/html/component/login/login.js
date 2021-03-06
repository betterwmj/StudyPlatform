import {app} from "../../bootstrap.js"
export let name = "login";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/login/login.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
  vm.userInfo = {
    user_number:"",
    password:"",
    type:"0"
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
    	}else if(userInfo.type==="2"){
	        vm.userInfo.user_number = userInfo.teacher_number;
	        vm.userInfo.password = userInfo.password; 
    	}
      vm.userInfo.type = userInfo.type;
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
          http.alert({
            parent:$element,content:"该账号未注册，请先注册"
          });
          return;
        }
      }catch(error){
        http.alert({
          parent:$element,content:"检查用户信息失败,"+error
        });
        return;
      }
      let result = null;
      try {
          result = await http.post("Login",userData);
      } catch (error) {
          http.alert({
            parent:$element,content:"登录失败,"+error
          });
        return;
      }
      if( vm.remember ){
          result.password = vm.userInfo.password;
        }
        if(userData.type === 0 ){
      
          $cookies.putObject("userInfo",result);
          $state.go("student.studentIndex");

        }else if(userData.type === 1){
          $cookies.putObject("userInfo",result);
          $state.go("teacher.teacherIndex");
        }else{
        	$cookies.putObject("userInfo",result);
            $state.go("admin.center");
        }
        
     
  }

  function loginCheck(){
    if( !vm.userInfo.user_number ){
      http.alert({
        parent:$element,content:"用户名不能为空"
      });
      return false;
    }
    if( !vm.userInfo.password ){
      http.alert({
        parent:$element,content:"密码不能为空"
      });
      return false;
    }
    vm.userInfo.user_number = vm.userInfo.user_number.trim();
    vm.userInfo.password = vm.userInfo.password.trim();
    if(!vm.userInfo.user_number || vm.userInfo.user_number === ""){
      http.alert({
        parent:$element,content:"用户名不能为空"
      });
      return false;
    }
    if(!vm.userInfo.password || vm.userInfo.password === ""){
      http.alert({
        parent:$element,content:"密码不能为空"
      });
      return false;
    }
    return true;
  }
}