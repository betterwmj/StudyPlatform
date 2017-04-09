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
		}
  	];
	states.forEach( (state)=>{
		$stateProvider.state(state);
	});
}