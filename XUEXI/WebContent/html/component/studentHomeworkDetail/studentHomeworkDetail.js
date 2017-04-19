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
  vm.msg = "";
  vm.$onInit = async function(){
    console.log($stateParams);
    vm.homework = $stateParams.homework;
    vm.homeDetail = await http.get("GetHomeworkDetail",{
      homeworkID:$stateParams.homework.homeId
    });
    vm.curr = vm.homeDetail[index];
    $scope.$applyAsync(null);
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
        vm.msg = "提交作业成功";
      }else{
        vm.msg = "提交作业失败";
      }
    } catch (error) {
      vm.msg = "提交作业成功";
    }finally{
      $scope.$applyAsync(null);
    }
  }
}