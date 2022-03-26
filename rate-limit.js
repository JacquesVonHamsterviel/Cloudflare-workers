addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  //Getip
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
//Get UTC Time
function getutctime(e) {    
    const now = new Date()
    return(now.toISOString())
}
  var radom=randomString(16);
  var time=getutctime()
  let { pathname } = new URL(request.url);

//default pages
if (pathname=="/ip") {
 return new Response(ip, {status: 200})
} 

return new Response("<!DOCTYPE html>\n<!--[if lt IE 7]> <html class='no-js ie6 oldie' lang='en-US'> <![endif]-->\n<!--[if IE 7]>    <html class='no-js ie7 oldie' lang='en-US'> <![endif]-->\n<!--[if IE 8]>    <html class='no-js ie8 oldie' lang='en-US'> <![endif]-->\n<!--[if gt IE 8]><!-->\n<html class='no-js' lang='en-US'>\n   <!--<![endif]-->\n   <head>\n      <title>This website has been temporarily rate limited | Cloudflare</title>\n      <meta charset='UTF-8' />\n<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />\n<meta http-equiv='X-UA-Compatible' content='IE=Edge,chrome=1' />\n<meta name='robots' content='noindex, nofollow' />\n<meta name='viewport' content='width=device-width,initial-scale=1' />\n<link rel='stylesheet' id='cf_styles-css' href='/cdn-cgi/styles/cf.errors.css' type='text/css' media='screen,projection' />\n<!--[if lt IE 9]><link rel='stylesheet' id='cf_styles-ie-css' href='/cdn-cgi/styles/cf.errors.ie.css' type='text/css' media='screen,projection' /><![endif]-->\n<style type='text/css'>body{margin:0;padding:0}</style>\n\n\n<!--[if gte IE 10]><!-->\n<script>\n  if (!navigator.cookieEnabled) {\n    window.addEventListener('DOMContentLoaded', function () {\n      var cookieEl = document.getElementById('cookie-alert');\n      cookieEl.style.display = 'block';\n    })\n  }\n</script>\n<!--<![endif]-->\n\n\n      <style type='text/css'>\n            body {\n               margin: 0;\n               padding: 0;\n            }\n\n            #cf-wrapper {\n               font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n                  Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n                  'Segoe UI Symbol' !important;\n            }\n            .cf-error-description {\n               max-width: 600px;\n            }\n      </style>\n   </head>\n   <body>\n      <div id='cf-wrapper'>\n         <div\n            id='cookie-alert'\n            class='cf-alert cf-alert-error cf-cookie-error'\n            data-translate='enable_cookies'\n         >\n            Please enable cookies.\n         </div>\n         <div id='cf-error-details' class='cf-error-details-wrapper'>\n            <div class='cf-wrapper cf-header cf-error-overview'>\n               <h1>\n               <span class='cf-error-type' data-translate='please check back later'\n                  >Please check back later</span\n               >\n               </h1>\n               <h2 class='cf-subheadline'>Error 1027</h2>\n            </div>\n\n            <div class='cf-section cf-wrapper'>\n               <p>\n               <span style='width:16px; display:inline-block; vertical-align:text-top'>\n                  <svg\n                     fill='#b03340'\n                     xmlns='http://www.w3.org/2000/svg'\n                     viewBox='0 0 16 16'\n                  >\n                     <path\n                     d='M15.672,14.2,8.3,1.443a.352.352,0,0,0-.609,0L.328,14.2a.352.352,0,0,0,.3.527H15.368A.352.352,0,0,0,15.672,14.2ZM8.743,12.9a.221.221,0,0,1-.221.221H7.478a.221.221,0,0,1-.221-.221V11.86a.221.221,0,0,1,.221-.221H8.522a.221.221,0,0,1,.221.221Zm-.025-2.422H7.282L7.257,6.005H8.743Z'\n                     />\n                  </svg>\n               </span>\n               <strong>\n                  This website has been temporarily rate limited\n               </strong>\n               </p>\n               <p class='cf-error-description'>\n               You cannot access this site because the owner has reached their plan limits. Check back later once traffic has gone down.\n               </p>\n               \n               <p class='cf-error-description'>\n               If you are owner of this website, prevent this from happening again by upgrading your plan on the <a data-orig-proto='https' data-orig-ref='dash.cloudflare.com/?account=workers/plans' target='_blank'>Cloudflare Workers dashboard</a>.\n               </p>\n               \n               \n               <p>\n               <a\n                  href='https://developers.cloudflare.com/workers/about/limits/#number-of-requests-limit'\n                  target='_blank'\n                  rel='noopener noreferrer'\n               >\n                  Learn more about this issue →\n               </a>\n               </p>\n               \n            </div>\n\n            <div class='cf-error-footer cf-wrapper'>\n    <p>\n      <span class='cf-footer-item'>Cloudflare Ray ID: "+radom+"</strong></span>\n<span class='cf-footer-separator'>&bull;</span>\n<span class='cf-footer-item'>"+time+"</span><span class='cf-footer-separator sm:hidden'>&bull;</span>\n<span class='cf-footer-item sm:block sm:mb-1'><span>Your IP</span>: "+ip+"</span>\n<span class='cf-footer-separator sm:hidden'>&bull;</span>\n<span class='cf-footer-item'><span>Runs on </span><a rel='noopener noreferrer' href='https://workers.cloudflare.com?utm_source=error_footer' id='brand_link' target='_blank'>Cloudflare Workers</a></span>\n</p>\n</div><!-- /.error-footer -->\n\n\n</div><!-- /#cf-error-details -->\n</div><!-- /#cf-wrapper -->\n</body>\n</html>\n", { headers: { "content-type": 'text/html;charset=UTF-8'}});
}
