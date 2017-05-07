import {app} from "../../bootstrap.js"
export let name = "teacherHomeworkResultList";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherHomeworkResultList/teacherHomeworkResultList.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.homework = null;
  vm.homeworkResultList = [];
  vm.$onInit = async function(){
    try {
      vm.homework = {
        homeworkID:$stateParams.homeworkId,
        homeWorkName:$stateParams.homeWorkName,
      };
      vm.homeworkResultList = await http.get("GetHomeworkResult",{
        homeworkID:vm.homework.homeworkID
      });
      vm.homeworkResultList.forEach( (item)=>{
        item.homework.time = new Date(item.homework.time.time);
      });
    } catch (error) {
      http.alert({
        parent:$element,content:"获取学生作业情况列表数据异常"
      });
    }
  }
}