import {app} from "../../../../bootstrap.js"
export let name = "teacherClassStudent";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacher/selfCenter/teacherClassStudent/teacherClassStudent.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.classStudent =null;
  let classId=null;
  vm.$onInit = async function(){
      classId = $stateParams.classId;
	  try{
      vm.classStudent = await http.get("GetAllClassStudent",{classId:classId});
    } catch (error) {
      http.alert({
	        parent:$element,content:"加载数据异常异常"
	  });
    }
  }
  $scope.$on("ready_back",function(){
	    $state.go("teacher.teacherManagerClassCreate");
  });
  vm.deleteStudent =async function(userId){
      let dialog = http.confirm({
          parent:$element,content:"是否删除?"
        });
        dialog.then(async function(){
        	 let result =await http.get("updateStudentClass",{
	       		  studentId:userId,
	       		  classId:classId,
	       		  typeId:0
       		  
       	      });
	       	  if(result ===true){
	       		  http.alert({
	       		        parent:$element,content:"删除成功"
	       		  });
	       		  vm.classStudent = await http.get("GetAllClassStudent",{classId:classId});
	       	  }else{
	       		  http.alert({
	     		        parent:$element,content:"删除失败"
	     		   });
	       	  }
         
        },function(){
          
        });    
  }

}