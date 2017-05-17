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
				name:"student.studentIndex",
				url: '/studentIndex',
				views:{
					"head@":{
						component:"studentIndexHead"
					},
					"content@":{
						component:"studentIndex"
					}
				}
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
					SubjectName:null,
					SubjectID:null,
					teacherID:null,
					currentUnfinishPage:null,
					pageItems:null,
					currentFinishPage:null

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
					SubjectName:null,
					SubjectID:null,
					teacherID:null,
					testpaperID:null,
					testName:null,
					currentUnfinishPage:null,
					pageItems:null
				
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
					SubjectName:null,
					SubjectID:null,
					teacherID:null,
					testpaperID:null,
					paperResultID:null,
					pageItems:null,
					currentFinishPage:null
				
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
				params:{
					SubjectName:null,
					SubjectID:null,
				
				},
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
				name:"student.studentHomeworkList",
				url: '/studentHomeworkList',
				params:{
					SubjectName:null,
					SubjectID:null,
					currentUnfinishPage:null,
					pageItems:null,
					currentFinishPage:null
					
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentHomeworkList"
					}
				}
			},
			{
				name:"student.studentHomeworkDetail",
				url: '/studentHomeworkDetail',
				params:{
					homeWorkName:null,
					homeworkId:null,
					SubjectID:null,
					SubjectName:null,
					currentUnfinishPage:null,
					pageItems:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentHomeworkDetail"
					}
				}
			},
			{
				name:"student.studentHomeworkResultDetail",
				url: '/studentHomeworkResultDetail',
				params:{
					homeWorkName:null,
					homeworkId:null,
					SubjectID:null,
					SubjectName:null,
					currentFinishPage:null,
					pageItems:null,
					
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentHomeworkResultDetail"
					}
				}
			},
			{

				name:"student.question",
				url: '/question',
				
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentOnlineNavigation"

					}
				}
			},
			{
				name:"student.onlineQuestion",
				url: '/onlineQuestion',
				params:{
					currentClass:null,
					currentPage:null,
					pageItems:null,
					totalpage:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"onlineQuestion"
					}
				}
			},
			{
				name:"student.postQuestion",
				url: '/postQuestion',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentPostQuestion"
					}
				}
			},
			{
				name:"student.studentOnlineAnswerDetail",
				url: '/studentOnlineAnswerDetail',
				params:{
					onlineQuestionsDetail:null,
					currentClass:null,
					isHistroy:null,
					currentPage:null,
					pageItems:null,
					totalpage:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentOnlineAnswerDetail"
					}
				}
			},
			{
				name:"student.studentQuestionHistory",
				url: '/studentQuestionHistory',
				params:{
					currentPage:null,
					pageItems:null,
					totalpage:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentQuestionHistory"
					}
				}
			},
			{

				name:"student.news",
				url: '/news',
				params:{
					currentPage:null,
					pageItems:null,
					totalpage:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"schoolNews"

					}
				}
			},
			{

				name:"student.courceRescource",
				url: '/courceRescource',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"courceRescource"

					}
				}
			},
			{

				name:"student.newsDetail",
				url: '/newsDetail',
				params:{
					newsDetail:null,
					currentPage:null,
					pageItems:null,
					totalpage:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"schoolNewsDetail"

					}
				}
			},
			{
				name:"student.center",
				url: '/center',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"studentSidebar"
					},
					"content@":{
						component:"studentCenter"
					}
				}
			},
			{
				name:"teacher",
				url: '/teacher',
				abstract:true,
			},
			{
				name:"teacher.teacherIndex",
				url: '/teacherIndex',
				views:{
					"head@":{
						component:"teacherIndexHead"
					},
					"content@":{
						component:"teacherIndex"
					}
				}
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
				params:{
					
					currentPage:null,
					pageItems:null,
					totalpage:null
				},
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
					testpaperID:null,
					testName:null,
					currentPage:null,
					pageItems:null,
					totalpage:null
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
					testpaperID:null,
					testName:null,
					currentPage:null,
					pageItems:null,
					totalpage:null
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
					resultId:null,
					testpaperID:null,
					testName:null,
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
				name:"teacher.homeworkDetail",
				url: '/homeworkDetail',
				params:{
					homeWorkName:null,
					homeworkId:null,
					currentPage:null,
					pageItems:null,
					totalpage:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"homeworkDetail"
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
				name:"teacher.classStudent",
				url: '/classStudent/{classId}',
				params:{
					classId:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherClassStudent"
					},
				}
			},
			{
				name:"teacher.teacherUploadFile",
				url: '/teacherUploadFile',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherUploadFile"
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
				params:{
					
					currentPage:null,
					pageItems:null,
					totalpage:null
				},
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
				name:"teacher.publishHomework",
				url: '/publishHomework',
				params:{
					homeworkId:null,
					subjectId:null,
					currentPage:null,
					pageItems:null,
					totalpage:null
					
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"publishHomework"
					},
				}
			},
			{
				name:"teacher.teacherHomeworkResultList",
				url: '/teacherHomeworkResultList',
				params:{
					homeworkId:null,
					homeWorkName:null,
					currentPage:null,
					pageItems:null,
					totalpage:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherHomeworkResultList"
					},
				}
			},
			{
				name:"teacher.teacherHomeworkResultDetail",
				url: '/teacherHomeworkResultDetail/{homeworkId}/{homeWorkName}/{homeworkResultID}/{studentName}/{studentId}',
				params:{
					homeworkId:null,
					homeWorkName:null,
					homeworkResultID:null,
					studentName:null,
					studentId:null,
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherHomeworkResultDetail"
					},
				}
			},
			{
				name:"teacher.onlineanswerNavigation",
				url: '/onlineanswerNavigation',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherOnlineAnswerNavigation"
					},
				}
			},
			{
				name:"teacher.onlineanswer",
				url: '/onlineanswer',
				params:{
					currentClass:null,
					currentPage:null,
					pageItems:null,
					totalpage:null
				},
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
			{
				name:"teacher.onlineAnswerDetail",
				url: '/onlineAnswerDetail',
				params:{
					onlineQuestionsDetail:null,
					currentClass:null,
					isHistroy:null,
					currentPage:null,
					pageItems:null,
					totalpage:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherOnlineAnswerDetail"
					},
				}
			},
			{
				name:"teacher.onlineHistoryAnswer",
				url: '/onlineHistoryAnswer',
				params:{
					currentPage:null,
					pageItems:null,
					totalpage:null
				},
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacheronlineHistoryAnswer"
					},
				}
			},
			{
				name:"teacher.UserInfo",
				url: '/UserInfo',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					},
					"content@":{
						component:"teacherUserInfo"
					},
				}
			},
			{
				name:"admin",
				url:'/admin',
				abstract:true,
			},
			{
				name:"admin.center",
				url: '/center',
				views:{
					"head@":{
						component:"tophead"
					},
					"content@":{
						component:"adminCenter"
					}
				}
			},
			
			
  	];
	states.forEach( (state)=>{
		$stateProvider.state(state);
	});
}