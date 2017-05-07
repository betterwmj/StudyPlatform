import {app} from "../../bootstrap.js"
export let name = "teacherUserInfo";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherUserInfo/teacherUserInfo.html",
    controller:["$scope","$element","$state","$cookies","http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
	let vm=this;
	vm.$onInit=init();
	vm.classes = [];//教授的班级信息
	async function init(){
		let user= $cookies.getObject("userInfo");
		let userinfo = await http.get("GetUserInfoByName",{user_number:user.teacher_number,type:user.type});
		let classes = await http.get("GetTeacherClasses");
		vm.userinfo = userinfo;
		vm.classes = classes;
		$scope.$applyAsync(null);
	}
	vm.userinfo = {
		teacher_number:"",
		realName:"",
		password:"",
		subjectID:"",
		teacherID:""
	};
	vm.updateinfo=async function(){
		let data={
			"teacher_number" :vm.userinfo.teacher_number,
			"realName" :vm.userinfo.realName,
			"password" :vm.userinfo.password,
			"subjectID":vm.currentSubjectName.SubjectID,
			"teacherID":vm.userinfo.userID
		}
		let result = await http.post("UpdateTeacher",data);
		if(result == true){
			vm.msg="修改成功";
		}else{
			vm.msg="修改失败";
		}
		$scope.$applyAsync(null);	
	}
}
