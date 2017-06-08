import {app} from "../../../bootstrap.js"
export let name = "teacherUploadFile";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacher/teacherUploadFile/teacherUploadFile.html",
    controller:["$scope","$rootScope","$element","$state",'$cookies','$transitions',"http",controller]
  });
}
function controller($scope,$rootScope,$element,$state,$cookies,$transitions,http){
     let vm = this;
     vm.progress =0; 
  	vm.recourceList=null;
  	vm.currentPage=1;
  	vm.pageItems =7;
  	vm.previousPage =previousPage;
  	vm.nextPage =nextPage;
	  vm.$onInit = function(){
		  getResource();
            let fileInputs = findFileInput();
            fileInputs.eq(0).bind("change",onSelectFile);
		    
	   }
		 function findFileInput(){
		       return angular.element(document.getElementsByClassName("js_file"));
		  }
		   vm.uploadFile = async function(){
			   let uploadFile=[];
			   uploadFile = findFileInput();
		       let file=[];
		       for(var i=0;i<uploadFile.length;i++){
		           if(uploadFile[i].files[0]!==undefined){
		                file.push(uploadFile[i].files[0]);
		           } 
		       }
		       let formData = new FormData();
		       for(var i=0;i<file.length;i++){
		           formData.append("uploadFile"+i,file[i]);
		           formData.append("isImg",false);
		       } 
			   try {

				   if(file.length!=0){
					   let result = await http.submitForm("UploadFile",formData,{     
		                    progress: 
		                      function(e){
			                        if (e.lengthComputable) {
			                        	vm.progress=Math.round(((e.loaded / e.total) * 100 ));
			                        }
		                      }      	
			                
			            });
					   if(result!=null){
						   
						   http.alert({
						          parent:$element,content:"上传文件成功"
						   });
						   getResource();
					   }
					   
				   }
			   } catch (error) {
				   console.log(error);
				   http.alert({
				          parent:$element,content:"上传文件失败"
				   });
			   }
		       
		   }
		   function onSelectFile(event){
		       let files=event.target.files;
		       if( files.length === 0 ){
		           return;
		       }
		       let file = files[0];
		       let reader = new FileReader();
		       reader.onload = function(e) { 
		         
		       }; 
		       reader.readAsDataURL(file);
		   }
		   async function  getResource(){
			   
				  try{	
						let result = await http.get("GetRecource",{		
							currentPage:vm.currentPage,
							pageItems:vm.pageItems
					    });
						vm.recourceList = result;
						if(result.length!==0){
							vm.recourceList.totalpage =Math.ceil(result[0].count/vm.pageItems);
							vm.recourceList.forEach( async (item)=>{
								item.createTime =new Date(item.createTime.time);
						    });
						}
						
					}catch (error) {
						http.alert({
							parent:$element,content:"获取课程资源失败"
						});
					}
				}
			   function previousPage(){
					vm.currentPage--;
					getResource();
				}
				function nextPage(){
					vm.currentPage++;
					getResource();
				}
				 vm.download =async function(paperId){
					  let dialog = http.confirm({
				            parent:$element,content:"是否下载?"
			         });
			         dialog.then(async function(){
			        	 let downLink = document.getElementById("download_paper");
			 	         let event = document.createEvent("MouseEvents"); 
			 	         event.initEvent("click", false, false); 
			 	         downLink.dispatchEvent(event);
			         },function(){
			           
			         });
				
				  }
				 vm.deleteSource =async function(Id){
					  let dialog = http.confirm({
					      parent:$element,content:"是否删除该文件?"
						});
						dialog.then(async function(){
							  let result = await http.get("DeleteSource",{
								  sourceID:Id
							      });
							      if( result === true ){
							    	 http.alert({
								            parent:$element,content:"文件删除成功"
								     });
							    	 getResource();
							      }else{
							     
							        http.alert({
							            parent:$element,content:"删除失败"
							        });
							   }
						},function(){
						  
						});
				  }
		   $scope.$on("ready_back",function(){
		        $state.go("teacher.teacherIndex");
		   	       
		    });
		  
}