import {app} from "../../bootstrap.js"
export let name = "studentHomeworkDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentHomeworkDetail/studentHomeworkDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  let index = 0;
  vm.currIndex = 0;
  vm.$onInit = async function(){
    try {
      vm.homework = {
        homeWorkName:$stateParams.homeWorkName,
        homeId:$stateParams.homeworkId,
      };
      vm.subject = {
	        SubjectName:$stateParams.SubjectName,
	        SubjectID:$stateParams.SubjectID,
    	       
     };
      vm.currentUnfinishPage=$stateParams.currentUnfinishPage;
      vm.pageItems=$stateParams.pageItems;
      vm.homeDetail = await http.get("GetHomeworkDetail",{
        homeworkID:vm.homework.homeId
      });
      vm.curr = vm.homeDetail[index];
    } catch (error) {
      http.alert({
        parent:$element,content:"初始化页面异常"
      });
    }
  }
  vm.upOrNext = function(type){
    if( type === "up"){
      --index;
      index = index >= 0 ? index : 0;
    }else{
      ++index;
      index = index < vm.homeDetail.length ? index : --index;
    }
    vm.curr = vm.homeDetail[index];
    vm.currIndex = index;
  }

  vm.submit = async function(){
    let data = {
      homeworkID:vm.homework.homeId,
      evaluation:"",
      homeworkResult:[]
    };
    vm.homeDetail.forEach( ( item )=>{
      data.homeworkResult.push({
        questionID:item.itemId,
        answer:item.studentAnswer
      });
    });
    try {
      let result = await http.post("SubmitHomework",data);
      if( result === true ){
        let dialog = http.alert({
          parent:$element,content:"提交作业成功"
        });
        dialog.then(function(){
          $state.go('student.homework');
        },function(){
          $state.go('student.homework');
        });
      }else{
        http.alert({
          parent:$element,content:"提交作业失败"
        });
      }
    } catch (error) {
      http.alert({
        parent:$element,content:"提交作业失败"
      });
    }
  }

  $scope.$on("ready_back",function(){
	let dialog = http.confirm({
          parent:$element,content:"您当前正在做作业，如果离开本页面，作业将不会被保留，请先提交！"
    });
    dialog.then(async function(){
    	 $state.go("student.studentHomeworkList",{
    		 SubjectName:vm.subject.SubjectName,
	          SubjectID:vm.subject.SubjectID,
	          currentUnfinishPage:vm.currentUnfinishPage,
	          pageItems:vm.pageItems
    	  });
    },function(){
      
    });
   
  });
}