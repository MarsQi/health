//判断加载Android或iOS的cordova文件
var u = navigator.userAgent,agentType='pc';
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

if (isAndroid){
  var sc =document.createElement('script');
  
  sc.src = 'static/cordova/android/cordova.min.js'
  document.head.appendChild(sc)
}else if (isiOS) {
  var sc =document.createElement('script');
  sc.src = 'static/cordova/ios/cordova.min.js'
  document.head.appendChild(sc)
}
module.exports = agentType