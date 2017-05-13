import {app} from "../../bootstrap.js"
export let name = "teacherManagerClassCreate";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherManagerClassCreate/teacherManagerClassCreate.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  $scope.$on("ready_back",function(){
    $state.go("teacher.center");
  });
  let vm = this;
  vm.classInfo = {  
    className:"",
  };
  vm.msg = "";
  vm.$onInit = async function(){
    try {
      vm.userInfo = $cookies.getObject("userInfo");
      vm.subjectlist = await http.get("GetAllSubject");
      let classes = await http.get("GetTeacherClasses");
	  vm.classes = classes;
      if( vm.subjectlist.length > 0 ){
        vm.currentSubject = vm.subjectlist[0].SubjectID;
      }
    } catch (error) {
      http.alert({
        parent:$element,content:"加载数据异常异常"
      });
    }
  }
  vm.create = async function(){
	  if( checkClass(vm.classInfo.className) ===true){
		  try {
		      let result = await http.get("CreateClass",{
		        className:vm.classInfo.className,
		        subjectID:vm.currentSubject
		      });
		      if( result === true ){
		        http.alert({
		          parent:$element,content:"班级创建成功"
		        });
		      }else{
		        http.alert({
		          parent:$element,content:"该班级已存在"
		        });
		      }
		    } catch (error) {
		      http.alert({
		        parent:$element,content:"班级创建失败"
		      });
		    }
	  }else{
	    	 http.alert({
			        parent:$element,content:"班级名不能为空！"
			  });
	   }
  }
  vm.deleteClass =async function(classId){
	    let dialog = http.confirm({
          parent:$element,content:"是否删除?"
	    });
	    dialog.then(async function(){
	    	 let userInfo = $cookies.getObject("userInfo");
 		     let result = await http.get("DeleteTeacherClass",{
 		    	 teacherId:userInfo.id,
 		    	 classId:classId
 		      });
 		      if( result === true ){
 		      
 		       http.alert({
			        parent:$element,content:"班级删除成功！"
			    });
 		        let classes = await http.get("GetTeacherClasses");
 		  	    vm.classes = classes;
 		      }else{
 		    	 http.alert({
 			        parent:$element,content:"删除失败！"
 			    });       
 		      }
	    },function(){
	      
	    });	    	 
}
  function checkClass(className){
	  if(className === null || className ===undefined ||className ==="" ){ 
	    	 return false;
	   }  else{
		    return true;
	   }
	  
  }
}