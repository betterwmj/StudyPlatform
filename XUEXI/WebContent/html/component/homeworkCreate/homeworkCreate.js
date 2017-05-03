import {app} from "../../bootstrap.js"
export let name = "homeworkCreate";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/homeworkCreate/homeworkCreate.html",
    controller:["$scope","$element","$state",'$cookies',"http","$uibModal",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$uibModal){
  let vm = this;
  vm.types = [
    {label:"选择题",value:1},
    {label:"判断题",value:2},
    {label:"简答题",value:3}
  ];
  let temp = {
    "type":vm.types[0],
    "title":"",
    "answer":'',
    "optionA":"",
    "optionB":"",
    "optionC":"",
    "optionD":"",
  };
  vm.homework = {
    name:new Date().toLocaleString(),
    finishTime:new Date(),
    questions:[]
  };
  vm.questions = [];
  vm.currentQuestion = Object.assign({},temp);
  vm.currentQuestion.type = vm.types[0];
  vm.questions.push( vm.currentQuestion );
  vm.currIndex = 0;
  vm.$onInit = function(){

  };
  vm.upItem = function(){
    if( vm.currIndex === 0) {
      return;
    }
    --vm.currIndex;
    vm.currentQuestion = vm.questions[vm.currIndex];
  };
  vm.createNextQuestion = function(){
    if( checkQuestion(vm.currentQuestion) === false){
      return;
    }
    ++vm.currIndex;
    if( vm.questions[vm.currIndex] ){
      vm.currentQuestion = vm.questions[vm.currIndex];
    }else{
      let itemTemp = Object.assign({},temp);
      itemTemp.type = vm.types[0];
      vm.questions.push(itemTemp);
      vm.currentQuestion = itemTemp;
    }
  };

  vm.createHomework = async function(){
    let questionList = {
      titles:[]
    };
    vm.questions.forEach( (item)=>{
      let temp = Object.assign({},item);
      temp.type = temp.type.value;
      questionList.titles.push(temp);
    });
    try {
      let list = await http.post("AddQuestion",questionList);
      list.forEach( (item)=>{
        vm.homework.questions.push({
          questionID:item.itemId
        });
      });
      let rs = await http.post("CreateHomework",vm.homework)
      if(rs === true){
        let dialog = $uibModal.open({
          animation: true,
          component: 'commonDialog',
          resolve: {
            content:()=>{ return "创建作业成功";}
          }
        });
        dialog.result.then(function(){
          $state.go("teacher.homeWorkHistory");
        },function(){
          $state.go("teacher.homeWorkHistory");
        });
      }else{
        $uibModal.open({
          animation: true,
          component: 'commonDialog',
          resolve: {
            content:()=>{ return "创建作业失败";}
          }
        });
      }
    } catch (error) {
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return "创建作业失败";}
        }
      });
    }
  }

  function checkQuestion(question){
    let type = question.type.value;
    let title = question.title.trim();
    if( title === ""){
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return "请输入题目内容";}
        }
      });
      return false;
    }
    if( type === 1){
      let optionA = question.optionA.trim();
      if( optionA === ""){
        $uibModal.open({
          animation: true,
          component: 'commonDialog',
          resolve: {
            content:()=>{ return "请输入选项A";}
          }
        });
        return false;
      }
      let optionB = question.optionB.trim();
      if( optionB === ""){
        $uibModal.open({
          animation: true,
          component: 'commonDialog',
          resolve: {
            content:()=>{ return "请输入选项B";}
          }
        });
        return false;
      }
      let optionC = question.optionC.trim();
      if( optionC === ""){
        $uibModal.open({
          animation: true,
          component: 'commonDialog',
          resolve: {
            content:()=>{ return "请输入选项C";}
          }
        });
        return false;
      }
      let optionD = question.optionD.trim();
      if( optionD === ""){
        $uibModal.open({
          animation: true,
          component: 'commonDialog',
          resolve: {
            content:()=>{ return "请输入选项D";}
          }
        });
        return false;
      }
    }
    if(question.answer.trim() === ""){
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return "请输入答案";}
        }
      });
      return false;
    }
    return true;
  }
}