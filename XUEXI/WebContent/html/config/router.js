export function routerConfig($stateProvider){
    var states = [
			{
				name: 'login',
				url: '/login',
				views:{
					"content":{
						component:"login"
					}
				}
			},
			{
				name:"student",
				url: '/student',
				abstract:true,
			},
			{
				name:"student.register",
				url: '/register',
				views:{
					"content@":{
						component:"registerStudent"
					}
				}
			},
			
			{
				name:"student.test",
				url: '/test',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentTest"
					}
				}
			},
			{
				name:"student.studentTestPaperList",
				url: '/studentTestPaperList',
				params:{
					subject:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentTestPaperList"
					}
				}
			},
			{
				name:"student.studentTestPaper",
				url: '/studentTestPaper',
				params:{
					paper:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentTestPaper"
					}
				}
			},
			{
				name:"student.studentTestPaperResultDetail",
				url: '/studentTestPaperResultDetail',
				params:{
					paper:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentTestPaperResultDetail"
					}
				}
			},
			{
				name:"student.homework",
				url: '/homework',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentHomework"
					}
				}
			},
			{
				name:"teacher",
				url: '/teacher',
				abstract:true,
			},
			{
				name:"teacher.register",
				url: '/register',
				views:{
					"content@":{
						component:"registerTeacher"
					}
				}
			},
			{
				name:"teacher.paper",
				url: '/paper',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherPaperNavigation"
					}
				}
			},
			{
				name:"teacher.paperCreate",
				url: '/paperCreate',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherPaper"
					}
				}
			},
			{
				name:"teacher.publishPaper",
				url: '/publishPaper',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"publishPaper"
					}
				}
			},
			{
				name:"teacher.paperDetail",
				url: '/paperDetail',
				params:{
					paper:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"paperDetail"
					}
				}
			},
			{
				name:"teacher.paperResult",
				url: '/paperResult',
				params:{
					paper:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"paperResult"
					}
				}
			},
			{
				name:"teacher.paperResultDetail",
				url: '/paperResultDetail',
				params:{
					paperResult:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"paperResultDetail"
					}
				}
			},
			{
				name:"teacher.center",
				url: '/center',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherCenter"
					}
				}
			},
			{
				name:"teacher.teacherManagerClassCreate",
				url: '/teacherManagerClassCreate',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherManagerClassCreate"
					},
				}
			},
			{
				name:"teacher.teacherAssignStudent",
				url: '/teacherAssignStudent',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherAssignStudent"
					},
				}
			},
			{
				name:"teacher.homework",
				url: '/homework',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherHomeworkNavigation"
					}
				}
			},
			{
				name:"teacher.homeworkCreate",
				url: '/homeworkCreate',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"homeworkCreate"
					},
				}
			},
			{
				name:"teacher.homeWorkHistory",
				url: '/homeWorkHistory',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"homeWorkHistory"
					},
				}
			},
			{
				name:"teacher.onlineanswer",
				url: '/onlineanswer',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"onlineAnswer"
					},
				}
			},
  	];
	states.forEach( (state)=>{
		$stateProvider.state(state);
	});
}