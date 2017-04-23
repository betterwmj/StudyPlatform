export default function httpService(app){
  app.factory("http",["$q","$http","$httpParamSerializerJQLike",serviceFunc]);
}

function serviceFunc($q,$http,$httpParamSerializerJQLike){
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
    } catch (error) {
      console.log(error);
      deferred.reject("操作失败");
    }
    let result = response.data;
    if( result.code === 0 ){
      deferred.resolve(result.data);
    }else{
      deferred.reject(result.message);
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
    } catch (error) {
      console.log(error);
      deferred.reject("操作失败");
    }
    let result = response.data;
    if( result.code === 0 ){
      deferred.resolve(result.data);
    }else{
      deferred.reject(result.message);
    }
    return deferred.promise;
  };
  return service;
}