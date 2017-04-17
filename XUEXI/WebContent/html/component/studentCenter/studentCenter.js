import {app} from "../../bootstrap.js"
export let name = "studentCenter";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentCenter/studentCenter.html",
    controller:["$scope","$element","$state",'$cookies',"http",'$httpParamSerializerJQLike',controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$httpParamSerializerJQLike){
	  let vm = this;
	  vm.msg = "";
	  vm.$onInit = async function(){
	    let userinfo = await http.get("GetUserInfoByName");
	    vm.userinfo = userinfo;
	    getClassName(vm.userinfo.classId);
	    $scope.$applyAsync(null);
	  }
	  async function getClassName(classId){
		  let result = await http.get("GetClassNameByClassId",{"classID":classId});
		  vm.userinfo.className=result.className;
		  $scope.$applyAsync(null);
	  }
	  vm.userinfo = {
		    userName:"",
		    realName:"",
		    password:"",
		    school:"",
		    telephone:"",
		    studentID:""
	 };
	  
	  vm.updateinfo=async function(){
		  let data={
				"userName" :vm.userinfo.userName,
				"realName" :vm.userinfo.realName,
				"password" :vm.userinfo.pass,
				"school"   :vm.userinfo.school,
				"telephone":vm.userinfo.telephone,
				"studentID":vm.userinfo.userID		
		  };
		  let result= await http.post("UpdateStudent",data);
		  if(result==true){
			  vm.msg = "修改成功";
		  }else{
			  vm.msg = "修改失败";
		  }
		  $scope.$applyAsync(null);
	  }
	  
	  
}