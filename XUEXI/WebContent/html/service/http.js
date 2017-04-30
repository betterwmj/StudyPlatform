export default function httpService(app){
  app.factory("http",["$q","$http","$httpParamSerializerJQLike","$rootScope",serviceFunc]);
}

function serviceFunc($q,$http,$httpParamSerializerJQLike,$rootScope){
  const baseUrl = "http://192.168.1.101:8080/XUEXI/";
  let service = {
    post:post,
    get:get
  };

  async function post(url,data,headers){
    url = baseUrl + url;
    headers = headers || {};
    let deferred = $q.defer();
    let response = null;
    try {
      response = await $http({
        method: 'POST',
        url: url,
        data: data,
        headers:headers
      });
      let result = response.data;
      if( result.code === 0 ){
        deferred.resolve(result.data);
      }else{
        deferred.reject(result.message);
      }
    } catch (error) {
      console.log(error);
      deferred.reject("操作失败");
    }finally{
      window.setTimeout(function(){
        $rootScope.$applyAsync(null);
      },0);
    }
    
    return deferred.promise;
  };

  async function get(url,data){
    url = baseUrl + url;
    let deferred = $q.defer();
    let response = null;
    try {
      response = await $http({
        method: 'GET',
        url: url,
        params: data,
      });
      let result = response.data;
      if( result.code === 0 ){
        deferred.resolve(result.data);
      }else{
        deferred.reject(result.message);
      }
    } catch (error) {
      console.log(error);
      deferred.reject("操作失败");
    }finally{
      window.setTimeout(function(){
        $rootScope.$applyAsync(null);
      },0);
    }
    
    return deferred.promise;
  };
  return service;
}