addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  //Getip
  var ip = request.headers.get("cf-connecting-ip");
return new Response(ip, { headers: { "content-type": 'text/html;charset=UTF-8'}});
}
