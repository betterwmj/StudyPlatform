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
				name:"teacher.paper",
				url: '/paper',
				views:{
					"head@":{
						component:"tophead"
					},
					"sidebar@":{
						component:"teacherSidebar"
					}
				}
			},
  	];
	states.forEach( (state)=>{
		$stateProvider.state(state);
	});
}