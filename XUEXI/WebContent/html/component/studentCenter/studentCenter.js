import {app} from "../../bootstrap.js"
export let name = "studentCenter";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentCenter/studentCenter.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
	  let vm = this;
		vm.userinfo = {
			school_number:"",
			realName:"",
			password:"",
			school:"",
			telephone:"",
			studentID:""
	  };
		vm.classList = [];
	  vm.$onInit = async function(){
			try {
				let user= $cookies.getObject("userInfo");
				let userinfo = await http.get("GetUserInfoByName",{user_number:user.school_number,type:user.type});
				vm.userinfo = userinfo;
				let classes = await http.get("GetAllSubject");
				vm.classes = classes;
				vm.classes.forEach( async (item)=>{
					let result =await http.get("GetClassNameByClassId",{"classID":item.classId});
					item.className=result.className;
				});
				vm.classList = await http.get("GetClasses");
				vm.classList.forEach( function(itemClass){
					let find = vm.classes.find( (ele)=>{
						return ele.classId == itemClass.classId;
					});
					if( find ){
						itemClass.isCheck = true;
					}else{
						itemClass.isCheck = false;
					}
				});
			} catch (error) {
				http.alert({
					parent:$element,content:"加载个人信息异常"
				});
			}
	  }
		vm.updateinfo=async function(){
				try {
					let data={
						"school_number" :vm.userinfo.school_number,
						"realName" :vm.userinfo.realName,
						"password" :vm.userinfo.password,
						"school"   :vm.userinfo.school,
						"telephone":vm.userinfo.telephone,
						"studentID":vm.userinfo.userID		
					};
					let result= await http.post("UpdateStudent",data);
					if(result==true){
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
						parent:$element,content:"修改失败"
					});
				}
		}

		vm.updateClass = async function(item){
			try {
				let data = {
					typeId:null,studentId:vm.userinfo.userID,classId:item.classId
				};
				data.typeId = item.isCheck === true ? 1 : 0;
				let result = await http.get("updateStudentClass",data);
				if( result ){
					http.alert({
						parent:$element,content:"更新班级信息成功"
					});
				}else{
					http.alert({
						parent:$element,content:"更新班级信息失败"
					});
				}
			} catch (error) {
				http.alert({
					parent:$element,content:"更新班级信息失败"
				});
			}
		} 
}