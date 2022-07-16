addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  const region = request.headers.get('cf-ipcountry').toUpperCase();
  const ip = request.headers.get('cf-connecting-ip');
  let { pathname } = new URL(request.url);
  if (pathname=="/ip"||pathname=="/ip/") {
    return new Response(ip, { headers: { "content-type": 'text/html;charset=UTF-8'}});
  }
  if (pathname=="/region"||pathname=="/region/") {
    return new Response(region, { headers: { "content-type": 'text/html;charset=UTF-8'}});
  }
  if (pathname=="/json/ip"||pathname=="/json/ip/") {
    return new Response("{\"ip\":\""+ip+"\"}", { headers: { "content-type": 'application/json;charset=UTF-8'}});
  }
  if (pathname=="/json/region"||pathname=="/json/region/") {
    return new Response("{\"region\":\""+region+"\"}", { headers: { "content-type": 'application/json;charset=UTF-8'}});
  }
  if (pathname=="/json"||pathname=="/json/") {
    return new Response("{\n    \"ip\":\""+ip+"\"\n    \"region\":\""+region+"\"\n}", { headers: { "content-type": 'application/json;charset=UTF-8'}});
  }
  return new Response("<html><head><title>IP</title><meta name='viewport' content='initial-scale=1.0, user-scalable=no'/></head><body><h3>API</h3><br><p>Pure Text</p><a href='ip'>Get ip address</a><br><a href='region'>Get ip region</a><br><p>JSON</p><a href='json'>Get ip and region</a><br><a href='json/ip'>Get ip address</a><br><a href='json/region'>Get ip region</a></body></html>", { headers: { "content-type": 'text/html;charset=UTF-8'}})

}
