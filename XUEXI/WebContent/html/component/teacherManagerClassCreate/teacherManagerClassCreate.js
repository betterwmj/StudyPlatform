import {app} from "../../bootstrap.js"
export let name = "teacherManagerClassCreate";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherManagerClassCreate/teacherManagerClassCreate.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  $scope.$on("ready_back",function(){
    $state.go("teacher.center");
  });
  let vm = this;
  vm.classInfo = {  
    className:"",
  };
  vm.msg = "";
  vm.$onInit = async function(){
    try {
      vm.userInfo = $cookies.getObject("userInfo");
      vm.subjectlist = await http.get("GetAllSubject");
      if( vm.subjectlist.length > 0 ){
        vm.currentSubject = vm.subjectlist[0].SubjectID;
      }
    } catch (error) {
      http.alert({
        parent:$element,content:"加载数据异常异常"
      });
    }
  }
  vm.create = async function(){
    try {
      let result = await http.get("CreateClass",{
        className:vm.classInfo.className,
        subjectID:vm.currentSubject
      });
      if( result === true ){
        http.alert({
          parent:$element,content:"班级创建成功"
        });
      }else{
        http.alert({
          parent:$element,content:"该班级已存在"
        });
      }
    } catch (error) {
      http.alert({
        parent:$element,content:"班级创建失败"
      });
    }
  }
}