import {app} from "../../bootstrap.js"
export let name = "studentTestPaper";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentTestPaper/studentTestPaper.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.paper = null;
  vm.paperDetail = null;
  vm.questionIndex = 0;
  vm.currQuestion = null;
  vm.$onInit = async function(){
    console.log($stateParams);
    vm.paper = $stateParams.paper;
    vm.paperDetail = await http.get("GetPaperDetail",{
      paperID:vm.paper.testpaperID
    });
    vm.currQuestion = vm.paperDetail[0];
    console.log(vm.paperDetail);
    $scope.$applyAsync(null);
  } 

  vm.changeIndex = function(upOrDown){
    if( upOrDown === 'up'){
      --vm.questionIndex;
      vm.questionIndex = vm.questionIndex >= 0 ? vm.questionIndex : 0;
    }else{
      ++vm.questionIndex;
      if( vm.questionIndex >= vm.paperDetail.length ){
        vm.questionIndex -= 1;
      }
    }
    vm.currQuestion = vm.paperDetail[vm.questionIndex];
  }

  vm.submitResult = async function(){
    let userInfo = $cookies.getObject("userInfo");
    let result = { 
      "paperID":vm.paper.testpaperID,
      "studentID":userInfo.id,
      "score":0,
      "paperresult":[]
    };
    vm.paperDetail.forEach( (item)=>{
      let studentAnswer = item.studentAnswer;
      let answer = item.answer;
      if( studentAnswer === answer ){
        result.score += item.score;
      }
      result.paperresult.push({
        "questionID":item.itemId,
   		  "answer":studentAnswer
      });
    });
    try {
      let rs = await http.post("SubmitPaper",result);
    } catch (error) {
      vm.msg = "提交答案失败";
    }
  }
}