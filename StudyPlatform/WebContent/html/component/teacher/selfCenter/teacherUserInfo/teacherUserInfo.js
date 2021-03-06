import {app} from "../../../../bootstrap.js"
export let name = "teacherUserInfo";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacher/selfCenter/teacherUserInfo/teacherUserInfo.html",
    controller:["$scope","$element","$state","$cookies","http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
	$scope.$on("ready_back",function(){
    $state.go("teacher.center");
  });
	let vm=this;
	vm.$onInit=init();
	vm.classes = [];//教授的班级信息
	vm.userInfo = {
		teacher_number:"",
		realName:"",
		password:"",
		subjectID:"",
		teacherID:""
	};
	async function init(){
		try {
			let user= $cookies.getObject("userInfo");
			let userInfo = await http.get("GetUserInfoByName",{user_number:user.teacher_number,type:user.type});
			let classes = await http.get("GetTeacherClasses");
			vm.userInfo = userInfo;
			vm.classes = classes;
		} catch (error) {
			http.alert({
					parent:$element,content:"加载个人信息异常"
			});
		}		
	}
	
	vm.updateinfo=async function(){
		if( check() === false ){
			return;
		}
		try {
			let data={
				"teacher_number" :vm.userInfo.teacher_number,
				"realName" :vm.userInfo.realName,
				"password" :vm.userInfo.password,
				"teacherID":vm.userInfo.userID
			}
			let result = await http.post("UpdateTeacher",data);
			if(result == true){
				http.alert({
					parent:$element,content:"修改成功"
				});
			}else{
				http.alert({
					parent:$element,content:"修改失败"
				});
			}
		} catch (error) {
				http.alert({
					parent:$element,content:"更新信息异常"
				});
		}
	}
	function check(){
		if( !vm.userInfo.teacher_number ){
			http.alert({
				parent:$element,content:"请输入用户名"
			});
			return false;
		}
		vm.userInfo.teacher_number = vm.userInfo.teacher_number.trim();
		if( vm.userInfo.teacher_number === ""){
			http.alert({
				parent:$element,content:"请输入用户名"
			});
			return false;
		}
		if( !vm.userInfo.realName ){
			http.alert({
				parent:$element,content:"请输入姓名"
			});
			return false;
		}
		vm.userInfo.realName = vm.userInfo.realName.trim();
		if( vm.userInfo.realName === ""){
			http.alert({
				parent:$element,content:"请输入姓名"
			});
			return false;
		}

		if( !vm.userInfo.password ){
			http.alert({
				parent:$element,content:"请输入密码"
			});
			return false;
		}
		vm.userInfo.password = vm.userInfo.password.trim();
		if( vm.userInfo.password === ""){
			http.alert({
				parent:$element,content:"请输入密码"
			});
			return false;
		}

		return true;
	}
}
 