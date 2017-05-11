import {app} from "../../bootstrap.js"
export let name = "teacheronlineHistoryAnswer";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacheronlineHistoryAnswer/teacheronlineHistoryAnswer.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
	$scope.$on("ready_back",function(){
    $state.go("teacher.onlineanswerNavigation");
  });
  let vm = this;
  vm.questionsList=null;
  vm.$onInit = async function(){
	  getTeacherQuestion();
  }
  async function  getTeacherQuestion(){
		try{	
		    let result = await http.get("GetStudentQuestion");
				vm.questionsList = result;
				vm.questionsList.forEach( async (item)=>{
			   	item.createTime =new Date(item.createTime.time);
			   	let studentInfo = await http.get("GetStudents",{
						userID:item.studentId
			   	});
			   	if(studentInfo.length!==0){
						item.studentName =studentInfo[0].realName;
					}
				});
	  }catch (error) {
	      http.alert({
					parent:$element,content:"获取历史数据失败"
				});
	  }
	}
}