addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})



async function handleRequest(request) {
  //Generate Radom Value
  function randomString(e) {    
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}
  var radom=randomString(64);

  let { pathname } = new URL(request.url);

  if (pathname=="/example"||pathname=="/example/") {
  return new Response("Hello worker!", { headers: { "content-type": "text/plain" }})
  }

if (pathname=="/default"||pathname=="/default/") {
  return fetch(`https://bigairport.icu/api/v1/client/subscribe?token=9229eef97b5f8b6afe2c2615e38e9d18`);
  }

//识别Clash
if (pathname.indexOf("clash")!=-1||pathname.indexOf("Clash")!=-1)
{
    return fetch(`https://sub.id9.cc/sub?target=clash&new_name=true&url=https%3A%2F%2Fsub.usercontent.workers.dev%2Fdefault&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR_Online.ini`);
  }

  

//代做观察
if (pathname=="/b"||pathname=="/b/") {
  return fetch(`https://patriot.ninja//index.php?m=wray&token=NFyuqXdwImkIVdo97NNYry18gnvNmKdhF97h3M0vDTzOKerRbF9rKWHCFSZHuj9CLVyXbi8qDB4%3D`);
  }


//default pages

if (pathname=="/") {
  return new Response("<html><head><title>Workers</title></head><body><h1>Hello!</h1><h3>Service Status: [Working]</h3><a href='/help'>Get Help</a><br><br><a href='/download'>Download Apps</a><br><br><a href='/about'>About</a><h6>ID:"+radom+"</h6></body></html>", { headers: { "content-type": 'text/html;charset=UTF-8' }})
  //return Response.redirect("", 301);
} 
if (pathname=="/robots.txt") {
  return new Response("User-agent:*\nallow:*", { headers: { "content-type": "text/plain" }})
}  
if (pathname=="/help"||pathname=="/help/") {
  return new Response("<html><head><title>Help</title></head><body><a href='javascript:history.go(-1);'>Back</a><p>Too Simple</p></body></html>", { headers: { "content-type": 'text/html;charset=UTF-8'}})
}  
if (pathname=="/download"||pathname=="/apps"||pathname=="/download/"||pathname=="/apps/") {
  return new Response("<html><head><title>Download</title></head><body><a href='javascript:history.go(-1);'>Back</a><h3>Download Apps</h3><h5>Download Apps </h5><table border='1'><tr><td>Windows</td><td><a href='https://github.com/2dust/v2rayN/releases/download/3.27/v2rayN-Core.zip'>Download(v2rayN)</a></td><td><a href='https://github.com/Fndroid/clash_for_windows_pkg/releases'>Download(Clash For Windows)</a></td></tr><tr><td>Android</td><td><a href='https://github.com/2dust/v2rayNG/releases/download/1.6.28/v2rayNG_1.6.28_arm64-v8a.apk'>Download(v2rayNG)</a></td><td><a href='https://github.com/Kr328/ClashForAndroid'>Download(Clash)</a></td></tr><tr><td>IOS</td><td><a href='https://oneclick.earth/'>Download(OneClick)</a></td><td><a href='https://apps.apple.com/us/app/shadowrocket/id932747118'>Download(Shadowrocket $2.99)</a></td></tr><tr><td>MacOS</td><td><a href='https://github.com/yanue/V2rayU/releases'>Download(V2rayU)</a></td><td><a href='https://github.com/Fndroid/clash_for_windows_pkg/releases'>Download(Clash)</a></td></tr><tr><td>Linux</td><td><a href='https://github.com/v2rayA/v2rayA'>Download(v2rayA)</a></td><td><a href='https://github.com/Dr-Incognito/V2Ray-Desktop'>Download(V2Ray-Desktop)</a></td></tr></table><h5>Download Apps (Via Proxy)</h5><table border='2'><tr><td>Windows</td><td><a href='https://proxy.usercontent.workers.dev/-----https://github.com/2dust/v2rayN/releases/download/3.27/v2rayN-Core.zip'>Download(v2rayN)</a></td><td><a href='https://proxy.usercontent.workers.dev/-----https://github.com/Fndroid/clash_for_windows_pkg/releases'>Download(Clash For Windows)</a></td></tr><tr><td>Android</td><td><a href='https://proxy.usercontent.workers.dev/-----https://github.com/2dust/v2rayNG/releases/download/1.6.28/v2rayNG_1.6.28_arm64-v8a.apk'>Download(v2rayNG)</a></td><td><a href='https://proxy.usercontent.workers.dev/-----https://github.com/Kr328/ClashForAndroid'>Download(Clash)</a></td></tr><tr><td>IOS</td><td><a href='https://proxy.usercontent.workers.dev/-----https://oneclick.earth/'>Download(OneClick)</a></td><td><a href='https://apps.apple.com/us/app/shadowrocket/id932747118'>Download(Shadowrocket $2.99)</a></td></tr><tr><td>MacOS</td><td><a href='https://proxy.usercontent.workers.dev/-----https://github.com/yanue/V2rayU/releases'>Download(V2rayU)</a></td><td><a href='https://proxy.usercontent.workers.dev/-----https://github.com/Fndroid/clash_for_windows_pkg/releases'>Download(Clash)</a></td></tr><tr><td>Linux</td><td><a href='https://proxy.usercontent.workers.dev/-----https://github.com/v2rayA/v2rayA'>Download(v2rayA)</a></td><td><a href='https://proxy.usercontent.workers.dev/-----https://github.com/Dr-Incognito/V2Ray-Desktop'>Download(V2Ray-Desktop)</a></td></tr></table></body></html>", { headers: { "content-type": 'text/html;charset=UTF-8' }})
} 
if (pathname=="/about"||pathname=="/about/") {
  return new Response("<html><head><title>About</title></head><body><a href='javascript:history.go(-1);'>Back</a><p>sub.usercontent.workers.dev</p></body></html>", { headers: { "content-type": 'text/html;charset=UTF-8'}})
}  
return fetch(`https://bigairport.icu/api/v1/client/subscribe?token=9229eef97b5f8b6afe2c2615e38e9d18`);
//spare https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2
//      https://github.com/freefq/free/blob/master/README.md
}
