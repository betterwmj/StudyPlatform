import {app} from "../../bootstrap.js"
export let name = "root";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/root/root.html",
    controller:["$scope","$rootScope","$element","$state","$transitions",controller]
  });
}
function controller($scope,$rootScope,$element,$state,$transitions){
  let vm = this;
  vm.$onInit = function(){
    $rootScope.teacherActive = [true,false,false,false];
    $rootScope.studentActive = [true,false,false,false];
    //$state.go("login");
  }
  $scope.$on("request_back",function(){
    $scope.$broadcast("ready_back");
  });
  
  // $transitions.onBefore({ to: 'student.studentTestPaperList',from:'student.studentTestPaper' },function(trans){
  //     console.log(trans);
  //     let from = trans.from();
  //     let to = trans.to();
  //     if( to.params === undefined || to.params.SubjectID === null ){
  //       let url = window.location.origin + window.location.pathname + "#!/student/studentTestPaper";
  //       window.history.pushState("","student.studentTestPaper",url);
  //       $scope.$broadcast("ready_back");
  //       return false;
  //     }
  //     return true;
  //  });
}