import {app} from "../../../../bootstrap.js"
export let name = "studentQuestionHistory";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/student/onlineQuestion/studentQuestionHistory/studentQuestionHistory.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
	let vm = this;
	vm.questionsList=null;
	vm.currentPage=1;
	vm.pageItems =7;
	vm.previousPage =previousPage;
	vm.nextPage =nextPage;
	vm.$onInit = async function(){
		  if($stateParams.currentPage!==null){
			  vm.currentPage = $stateParams.currentPage;
			  vm.pageItems = $stateParams.pageItems;
			  vm.totalpage = $stateParams.totalpage;
		  }
		getTeacherQuestion();
	}
  async function  getTeacherQuestion(){
 
	  try{	
			let result = await http.get("GetStudentQuestion",{		
				currentPage:vm.currentPage,
				pageItems:vm.pageItems
		    });
			vm.questionsList = result;
			if(result.length!==0){
				vm.questionsList.totalpage =Math.ceil(result[0].count/vm.pageItems);
				vm.questionsList.forEach( async (item)=>{
					item.createTime =new Date(item.createTime.time);
					let studentInfo = await http.get("GetStudents",{
						userID:item.studentId,
					});
					if(studentInfo.length!==0){
						item.studentName =studentInfo[0].realName;
						 
					} 
				});
			}
			
			
		}catch (error) {
			http.alert({
				parent:$element,content:"获取历史数据失败"
			});
		}
	}
   function previousPage(){
		vm.currentPage--;
		getTeacherQuestion();
	}
	function nextPage(){
		vm.currentPage++;
		getTeacherQuestion();
	}	
	$scope.$on("ready_back",function(){
      $state.go("student.question");
    });
}