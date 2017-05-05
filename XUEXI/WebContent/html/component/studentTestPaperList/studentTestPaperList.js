import {app} from "../../bootstrap.js"
export let name = "studentTestPaperList";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentTestPaperList/studentTestPaperList.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.subject = null;
  vm.paperUnfinish = [];
  vm.paperFinish = [];
  vm.displayPaper = [];
  vm.showFlag = true;
  vm.$onInit = async function(){
    vm.subject = {
      SubjectName:$stateParams.SubjectName,
      SubjectID:$stateParams.SubjectID,
      teacherID :$stateParams.teacherID
    };
    let rs = await getPaper();
    $scope.$applyAsync(null);
  }
  async function  getPaper(){
    vm.papers = await http.get("GetPaper",{
      subjectId:vm.subject.SubjectID,
      teacherId:vm.subject.teacherID
    });
    vm.papers.forEach( (paper)=>{
      paper.createTime = new Date(paper.createTime.time);
    });
    let paperResult = await http.get("GetPaperResult");
    vm.papers.forEach( (paper)=>{
      var findResult = paperResult.find( (result)=>{
        if( result.paper.paperId === paper.testpaperID ){
          paper.resultObj = result;
          return true;
        }
      });
      if( findResult !== undefined ){
        vm.paperFinish.push(paper);
      }else{
        vm.paperUnfinish.push(paper);
      }
    });
    vm.displayPaper = vm.paperUnfinish;
  }

  vm.changePaperType = function(flag){
    vm.showFlag = flag;
    if( flag ){
      vm.displayPaper = vm.paperUnfinish;
    }else{
      vm.displayPaper = vm.paperFinish;
    }
  }
}