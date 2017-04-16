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
  vm.$onInit = async function(){
    console.log($stateParams);
    vm.subject = $stateParams.subject;
    let rs = await getPaper(0);
    $scope.$applyAsync(null);
  }

  async function  getPaper(isTest){
    vm.papers = await http.get("GetPaper",{
      subjectId:vm.subject.SubjectID,
    });
    vm.papers.forEach( (paper)=>{
      paper.createTime = new Date(paper.createTime.time);
    });
    
  }

  function changePaperType(type){
    let rs = await getPaper(0);
    $scope.$applyAsync(null);
  }
}