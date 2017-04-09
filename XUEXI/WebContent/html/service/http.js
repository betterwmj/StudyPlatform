export default function httpService(app){
  app.factory("http",["$q","$http","$httpParamSerializerJQLike",serviceFunc]);
}

function serviceFunc($q,$http,$httpParamSerializerJQLike){
  const baseUrl = "http://localhost:8080/XUEXI/";
  let service = {
    post:post
  };

  async function post(url,data){
    url = baseUrl + url;
    console.log("http,post",url,data);
    let deferred = $q.defer();
    let response = null;
    try {
      response = await $http({
        method: 'POST',
        url: url,
        data: data,
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