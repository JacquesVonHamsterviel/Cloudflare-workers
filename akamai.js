addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  //Generate Radom Value
  function randomString1(e) {    
    e = e || 32;
    var t = "abcdefghijklmnopqrstuvwxyz1234567890",
    a = t.length,
    n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}
function randomString2(e) {    
    e = e || 32;
    var t = "1234567890",
    a = t.length,
    n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}
  var part1=randomString1(8);
  var part2=randomString1(10);
  var part3=randomString1(8);
  let { pathname } = new URL(request.url);


return new Response("<HTML><HEAD>\n<TITLE>Invalid URL</TITLE>\n</HEAD><BODY>\n<H1>Invalid URL</H1>\nThe requested URL '&#91;no&#32;URL&#93;', is invalid.<p>\nReference&#32;&#35;9&#46;"+part1+"&#46;"+part2+"&#46;"+part3+"\n</BODY></HTML>\n", { headers: { "content-type": 'text/html;charset=UTF-8'}});
}
