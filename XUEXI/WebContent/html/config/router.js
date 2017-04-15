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
						component:"teacherPaper"
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
  	];
	states.forEach( (state)=>{
		$stateProvider.state(state);
	});
}