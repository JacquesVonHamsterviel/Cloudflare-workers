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
  return new Response("Hello!\nService Status: [Working]\nID:"+radom, { headers: { "content-type": "text/plain" }})
  //return Response.redirect("https://github.com/freefq/free/blob/master/README.md", 301);
} 
if (pathname=="/robots.txt") {
  return new Response("User-agent:*\nallow:*", { headers: { "content-type": "text/plain" }})
}  
if (pathname=="/help") {
  return new Response("<html><head><title>Help</title></head><body><h3>Help Page</h3><h5>Download Apps</h5><table border='1'><tr><td>Windows</td><td><a href='https://github.com/2dust/v2rayN/releases/download/3.27/v2rayN-Core.zip'>Download(v2rayN)</a></td></tr></table></body></html>", { headers: { "content-type": 'text/html;charset=UTF-8' }})
} 
if (pathname=="/about"||pathname=="/about/") {
  return new Response("About Page  ---sub.usercontent.workers.dev", { headers: { "content-type": "text/plain" }})
}  
return fetch(`https://bigairport.icu/api/v1/client/subscribe?token=9229eef97b5f8b6afe2c2615e38e9d18`);
//spare https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2
}
