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
    finishTime:null,
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
        $uibModal.open({
          animation: true,
          component: 'commonDialog',
          resolve: {
            content:()=>{ return "创建作业成功";}
          }
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
}