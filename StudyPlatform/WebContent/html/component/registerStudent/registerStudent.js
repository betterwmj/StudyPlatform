import {app} from "../../bootstrap.js"
export let name = "registerStudent";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/registerStudent/registerStudent.html",
    controller:["$scope","$element","$state",'$cookies',"http",'$httpParamSerializerJQLike',controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$httpParamSerializerJQLike){
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
    	if( userResult === null ){
				http.alert({
					parent:$element,content:"您不是本校学生，无法注册"
				});
    		return;
    	}
    	if( userResult.realName !==  vm.userInfo.realName ){
				http.alert({
					parent:$element,content:"请检查您的真实姓名是否正确"
				});
				return;
    	}
    	if(userResult.password !== "" ){
				http.alert({
					parent:$element,content:"您已注册，请登录"
				});
				return;
    	}else{
    		studentRegister();
    	}
     }catch (error) {
				http.alert({
					parent:$element,content:"注册时发生异常"
				});
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
				http.alert({
					parent:$element,content:"注册失败,"+error
				});
	    }
  }
  
  function check(){
    if( !vm.userInfo.school_number || vm.userInfo.school_number.trim() === ""){
				http.alert({
					parent:$element,content:"用户名不能为空"
				});
				return false;
		}
		vm.userInfo.school_number = vm.userInfo.school_number.trim();

		if( !vm.userInfo.realName || vm.userInfo.realName.trim() === ""){
				http.alert({
					parent:$element,content:"真实姓名不能为空"
				});
				return false;
		}
		vm.userInfo.realName = vm.userInfo.realName.trim();

		if( !vm.userInfo.password || vm.userInfo.password.trim() === ""){
				http.alert({
					parent:$element,content:"密码不能为空"
				});
				return false;
		}
		vm.userInfo.password = vm.userInfo.password.trim();

		if( vm.userInfo.rePassword !== vm.userInfo.password ){
			http.alert({
				parent:$element,content:"两次输入密码不一致"
			});
			return false;
    }

		if( !vm.userInfo.school || vm.userInfo.school.trim() === ""){
				http.alert({
					parent:$element,content:"学校不能为空"
				});
				return false;
		}
		vm.userInfo.school = vm.userInfo.school.trim();

		if( !vm.userInfo.telephone || vm.userInfo.telephone.trim() === ""){
				http.alert({
					parent:$element,content:"手机号不能为空"
				});
				return false;
		}
		vm.userInfo.telephone = vm.userInfo.telephone.trim();

		return true;
  }
}