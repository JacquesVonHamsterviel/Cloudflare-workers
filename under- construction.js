addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  //GetClientIP
  const region = request.headers.get('cf-ipcountry').toUpperCase();
  const ip_address = request.headers.get('cf-connecting-ip');
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
  var radom=randomString(32);//var raw=randomString(65536);
  let { pathname } = new URL(request.url); 
  if (pathname=="/example"||pathname=="/example/") {
  return new Response("Hello worker!   "+radom, { headers: { "content-type": "text/plain" }})
  }
  
//default pages
if (pathname=="/") {
  return new Response("<html><head><title>Example.com</title><meta name='viewport' content='width=device-width, initial-scale=1' /><style>body {background-image: url('https://example.com/cdn-cgi');} </style><script src='autoload.js'></script></head><body><center><br><br><fieldset style='width: 280px;background-color:#999999;'><h1>Hello</h1><h2>Example.com</h2><h3>Under Construction</h3><h6>Path: "+pathname+"</h6><h6>Event ID: "+radom+"</h6><h6>Your IP: "+ip+"<h6></fieldset></center></body></html>", { headers: { "content-type": 'text/html;charset=UTF-8' }})
  //return Response.redirect("", 301);
} 
if (pathname=="/robots.txt") {
  return new Response("User-agent:*\nallow:*", { headers: { "content-type": "text/plain" }})
}  
if (pathname=="/cdn-cgi") {
  return fetch(`https://api.dujin.org/bing/1920.php`);
} 
if (pathname=="/autoload.js") {
  return fetch(`https://my-web-games.netlify.app/packages/113/live2d-widget/autoload.js`);
} 

return new Response("<html><head><title>Example.com</title><meta name='viewport' content='width=device-width, initial-scale=1' /><style>body {background-image: url('https://example.com/cdn-cgi');} </style><script src='autoload.js'></script></head><body><center><br><br><fieldset style='width: 280px;background-color:#999999;'><h1>Hello</h1><h2>Example.com</h2><h3>Under Construction</h3><h6>Path: "+pathname+"</h6><h6>Event ID: "+radom+"</h6><h6>Your IP: "+ip+"<h6></fieldset></center></body></html>", { headers: { "content-type": 'text/html;charset=UTF-8' }})
//return Response.redirect("", 301);
//return fetch(``);
//return new Response("", { headers: { "content-type": "text/plain" }})
}
