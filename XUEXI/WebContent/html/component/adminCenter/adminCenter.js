import {app} from "../../bootstrap.js"
export let name = "adminCenter";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/adminCenter/adminCenter.html",
    controller:["$scope","$element","$state",'$cookies',"http","$httpParamSerializerJQLike",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$httpParamSerializerJQLike){
  let vm = this;
  vm.userResult =null;
  vm.isStudent =true;
  vm.isTeacher =false;
  vm.types = [
	    {label:"学生",value:0},
	    {label:"老师",value:1},
   ];
  vm.$onInit = init;
  async function init(){
	 vm.currentType =vm.types[0];
	 vm.userResult = await http.get("GetStudents");  
  }
  vm.getUser = async function(){
	  if(vm.currentType.value === 0){
		  vm.isStudent =true;
		  vm.isTeacher =false;
		  try {
	        vm.userResult = await http.get("GetStudents");  
	      }catch(error){
	        http.alert({
	          parent:$element,content:"获取学生信息失败,"+error
	        });
	        return;
	      }
      }else if(vm.currentType.value ===1){
    	  vm.isStudent =false;
    	  vm.isTeacher =true;
    	  try {
	        vm.userResult = await http.get("GetTeachers");
	        
	      }catch(error){
	        http.alert({
	          parent:$element,content:"获取老师信息失败,"+error
	        });
	        return;
	      }
      }
  }
  vm.search = async function(){
	  if( vm.user_number ===""){
		  vm.getUser();
	  }
	  else{
		  if(vm.currentType.value ===0){
			  vm.isStudent =true;
			  vm.isTeacher =false;
		  }else{
			  vm.isStudent =false;
			  vm.isTeacher =true;
		  }
		  let result= await http.get("GetUserInfoByName",{user_number:vm.user_number,type:vm.currentType.value});
		  vm.userResult.splice(0,vm.userResult.length);
		  vm.userResult.push(result);
		  
			  
	  }
	  
  }
  vm.addStudent =async function(){
	  let result= await http.post("StudentRegister",
	  $httpParamSerializerJQLike({
		  school_number:vm.school_number,
          realName:vm.studentRealName,
        }),
        {
          'Content-Type': 'application/x-www-form-urlencoded'
        });
	  if(result ===true){
		  vm.getUser();
		  alert("添加学生成功");
	  }
	  
  }
  vm.addTeacher =async function(){
	  let result= await http.post("TeacherRegister",
		  $httpParamSerializerJQLike({
			  teacher_number:vm.teacher_number,
			  realName:vm.teacherRealName,
	        }),
	        {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        });
		  if(result ===true){
			  alert("添加老师成功");
			  vm.getUser();
		  }
    }
   
}

  