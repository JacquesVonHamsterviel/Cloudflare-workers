addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  //GetClientIP
  var ip = request.headers.get("cf-connecting-ip");
  //Generate Radom Value
  function randomString(e) {    
    e = e || 32;
    var t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    a = t.length,
    n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}
  var radom=randomString(128);
  var radom2=randomString(1);
  let { pathname } = new URL(request.url);
  if (pathname=="/example"||pathname=="/example/") {
  return new Response("Hello worker!   "+radom, { headers: { "content-type": "text/plain" }})
  }
  if (pathname=="/r"||pathname=="/r/") {
  return new Response(radom2, { headers: { "content-type": "text/plain" }})
  }


//default pages
if (pathname=="/") {
  return new Response("<html><head><title>MTyXt.com</title></head><body><h1>Hello</h1><h3>Under Construction</h3><h6>Event ID: "+radom+"</h6><h6>Your IP: "+ip+"<h6></body></html>", { headers: { "content-type": 'text/html;charset=UTF-8' }})
  //return Response.redirect("", 301);
} 
if (pathname=="/robots.txt") {
  return new Response("User-agent:*\nallow:*", { headers: { "content-type": "text/plain" }})
}  
if (pathname=="/about"||pathname=="/about/") {
  return new Response("<html><head><title>About</title><meta name='viewport' content='initial-scale=1.0, user-scalable=no'/></head><body><a href='javascript:history.go(-1);'>Back</a><p>About</p></body></html>", { headers: { "content-type": 'text/html;charset=UTF-8'}})
}  
  return fetch(`https://dongtaiwang.com/loc/phome.php?v=0`);
//return Response.redirect("", 301);
//return fetch(``);
//return new Response("", { headers: { "content-type": "text/plain" }})
}
