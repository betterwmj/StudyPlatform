import {app} from "../../bootstrap.js"
export let name = "publishHomework";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/publishHomework/publishHomework.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams","$uibModal",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams,$uibModal){
  let vm = this;
  vm.msg = "";
  vm.$onInit = async function(){
    vm.homework = {
      homeId:$stateParams.homeworkId
    };
    vm.subjectId = $stateParams.subjectId;
    try {
      vm.classes = await http.get("GetTeacherSubjectClass",{subjectId:vm.subjectId});
      
    } catch (error) {
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return "获取教师班级信息异常";}
        }
      }); 
    }
  }
  vm.publish = async function(){
    let data = {
      homeworkID:vm.homework.homeId,
      classesID:[]
    };
    vm.classes.forEach( (item)=>{
      if( item.isCheck){
        data.classesID.push({classId:item.classId});
      }
    });
    try {
      let result = await http.post("PublishHomework",data);
      if(result === true){
        $uibModal.open({
          animation: true,
          component: 'commonDialog',
          resolve: {
            content:()=>{ return "作业发布成功";}
          }
        });
      }else{
        $uibModal.open({
          animation: true,
          component: 'commonDialog',
          resolve: {
            content:()=>{ return "作业发布失败";}
          }
        }); 
      }
    } catch (error) {
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return "作业发布失败";}
        }
      }); 
    }
  }
}