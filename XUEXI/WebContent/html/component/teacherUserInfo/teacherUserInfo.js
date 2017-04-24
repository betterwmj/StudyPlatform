import {app} from "../../bootstrap.js"
export let name = "teacherUserInfo";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherUserInfo/teacherUserInfo.html",
    controller:["$scope","$element","$state","http",controller]
  });
}
function controller($scope,$element,$state,http){
	let vm=this;
	vm.$onInit=init();
	vm.currentSubjectName=null;
	vm.classes = [];//教授的班级信息
	async function init(){
		let userinfo = await http.get("GetUserInfoByName");
		let classes = await http.get("GetTeacherClasses");
		vm.userinfo = userinfo;
		vm.classes = classes;
		getSubjectName();
		$scope.$applyAsync(null);
	}
	async function getSubjectName(){
		  let result = await http.get("GetAllSubject");
		  vm.subject=result;
		  vm.currentSubjectName = vm.subject[vm.userinfo.subjectId-1];
		  $scope.$applyAsync(null);
	}
	vm.userinfo = {
		userName:"",
		realName:"",
		password:"",
		subjectID:"",
		teacherID:""
	};
	vm.updateinfo=async function(){
		let data={
			"userName" :vm.userinfo.userName,
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
