addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})



async function handleRequest(request) {
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
  //fast-fish
  if (pathname=="/archived/fast-fish/v2ray"||pathname=="/archived/fast-fish/v2ray/") {
      return fetch(`https://bigairport.icu/api/v1/client/subscribe?token=9229eef97b5f8b6afe2c2615e38e9d18`);

  }  
  if (pathname=="/fast-fish/v2ray"||pathname=="/fast-fish/v2ray/"||pathname=="/fast-fish/ssr"||pathname=="/fast-fish/ssr/") {
    return fetch(`https://bigairport.icu/api/v1/client/subscribe?token=9229eef97b5f8b6afe2c2615e38e9d18`);
  }
  //BridgeTheWise
  if (pathname=="/bridgethewise"||pathname=="/bridgethewise/"||pathname=="/BridgeTheWise/"||pathname=="/BridgeTheWise") {
  return fetch(`https://bigairport.icu/api/v1/client/subscribe?token=9229eef97b5f8b6afe2c2615e38e9d18`);
  }
  //if (pathname=="/bridgethewise/clash"||pathname=="/bridgethewise/clash/"||pathname=="/BridgeTheWise/clash"||pathname=="/BridgeTheWise/clash/") {
  //return fetch(`https://sub.id9.cc/sub?target=clash&new_name=true&url=https%3A%2F%2Fsub.usercontent.workers.dev%2Fbridgethewise&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR_Online.ini`);
  //}

  //if (pathname=="/clash"||pathname=="/clash/"||pathname=="/Clash"||pathname=="/Clash/"||pathname=="/fast-fish/clash.yaml"||pathname=="/fast-fish/clash"||pathname=="/fast-fish/clash/") {
  //return fetch(`https://sub.id9.cc/sub?target=clash&new_name=true&url=https%3A%2F%2Fsub.usercontent.workers.dev%2Fbridgethewise&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR_Online.ini`);
  //}


if (pathname=="/b"||pathname=="/b/") {
  return fetch(`https://patriot.ninja//index.php?m=wray&token=NFyuqXdwImkIVdo97NNYry18gnvNmKdhF97h3M0vDTzOKerRbF9rKWHCFSZHuj9CLVyXbi8qDB4%3D`);
  }
//backup
//return fetch(`https://fast-fish.club/link/C4vjjTHfqSTCu5aj?sub=3&extend=1`);
//return new Response("dm1lc3M6Ly9leUp5WlcxaGNtc2lPaUxvcjdmbnE0dmxqYlBtbTdUbWphTG9ycUxwbUlYdnZKcG9kSFJ3Y3pvdkwzTjFZaTUxYzJWeVkyOXVkR1Z1ZEM1M2IzSnJaWEp6TG1SbGRpOWljbWxrWjJWMGFHVjNhWE5sSWl3aWRIbHdaU0k2Ym5Wc2JDd2lZV1JrSWpvaWMzVmlMblZ6WlhKamIyNTBaVzUwTG5kdmNtdGxjbk11WkdWMklpd2ljRzl5ZENJNklqUTBNeUlzSW1sa0lqb2lZMlpsTUdKaU9EZ3RaR1F3TWkwek4yWXlMVGc1WVRjdFpqWXdNak0yTldNeE5qZ3pJaXdpYm1WMElqb2lkR053SWl3aVlXbGtJam9pTUNJc0luQnpJam9pNksrMzU2dUw1WTJ6NXB1MDVvMmk2SzZpNlppRjc3eWFhSFIwY0hNNkx5OXpkV0l1ZFhObGNtTnZiblJsYm5RdWQyOXlhMlZ5Y3k1a1pYWXZZbkpwWkdkbGRHaGxkMmx6WlNKOQp2bWVzczovL2V5SnlaVzFoY21zaU9pSm9kSFJ3Y3pvdkwzTjFZaTUxYzJWeVkyOXVkR1Z1ZEM1M2IzSnJaWEp6TG1SbGRpOWljbWxrWjJWMGFHVjNhWE5sSWl3aWRIbHdaU0k2Ym5Wc2JDd2lZV1JrSWpvaWMzVmlMblZ6WlhKamIyNTBaVzUwTG5kdmNtdGxjbk11WkdWMklpd2ljRzl5ZENJNklqUTBNeUlzSW1sa0lqb2lZMlpsTUdKaU9EZ3RaR1F3TWkwek4yWXlMVGc1WVRjdFpqWXdNak0yTldNeE5qZ3pJaXdpYm1WMElqb2lkR053SWl3aVlXbGtJam9pTUNJc0luQnpJam9pYUhSMGNITTZMeTl6ZFdJdWRYTmxjbU52Ym5SbGJuUXVkMjl5YTJWeWN5NWtaWFl2WW5KcFpHZGxkR2hsZDJselpTSjk=", { headers: { "content-type": "text/plain" }})
//return fetch(`https://patriot.ninja//index.php?m=wray&token=NFyuqXdwImkIVdo97NNYry18gnvNmKdhF97h3M0vDTzOKerRbF9rKWHCFSZHuj9CLVyXbi8qDB4%3D`);
//return fetch(`https://raw.githubusercontent.com/freefq/free/master/v2`);

//default pages

//识别Clash
if (pathname.indexOf("clash")!=-1||pathname.indexOf("Clash")!=-1)
{
  //return new Response("Find Clash", { headers: { "content-type": "text/plain" }})
    return fetch(`https://sub.id9.cc/sub?target=clash&new_name=true&url=https%3A%2F%2Fsub.usercontent.workers.dev%2Fbridgethewise&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR_Online.ini`);
  }

if (pathname=="/") {
  return new Response("Hello!\nService Status: [Working]\nID:"+radom, { headers: { "content-type": "text/plain" }})
  //return Response.redirect("https://github.com/freefq/free/blob/master/README.md", 301);
} 
if (pathname=="/robots.txt") {
  return new Response("User-agent:*\nallow:*", { headers: { "content-type": "text/plain" }})
}  
if (pathname=="/about"||pathname=="/about/") {
  return new Response("About Page  ---sub.usercontent.workers.dev", { headers: { "content-type": "text/plain" }})
}  
return fetch(`https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2`);
}
