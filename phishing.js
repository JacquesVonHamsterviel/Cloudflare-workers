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
  var radom=randomString(16);
  let { pathname } = new URL(request.url);

//default pages
if (pathname=="/ip") {
 return new Response(ip, {status: 200})
} 

return new Response("<!DOCTYPE html>\n<!--[if lt IE 7]> <html class='no-js ie6 oldie' lang='en-US'> <![endif]-->\n<!--[if IE 7]>    <html class='no-js ie7 oldie' lang='en-US'> <![endif]-->\n<!--[if IE 8]>    <html class='no-js ie8 oldie' lang='en-US'> <![endif]-->\n<!--[if gt IE 8]><!--> <html class='no-js' lang='en-US'> <!--<![endif]-->\n<head>\n<title>Suspected phishing site | Cloudflare</title>\n<meta charset='UTF-8' />\n<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />\n<meta http-equiv='X-UA-Compatible' content='IE=Edge,chrome=1' />\n<meta name='robots' content='noindex, nofollow' />\n<meta name='viewport' content='width=device-width,initial-scale=1' />\n<link rel='stylesheet' id='cf_styles-css' href='/cdn-cgi/styles/cf.errors.css' type='text/css' media='screen,projection' />\n<!--[if lt IE 9]><link rel='stylesheet' id='cf_styles-ie-css' href='/cdn-cgi/styles/cf.errors.ie.css' type='text/css' media='screen,projection' /><![endif]-->\n<style type='text/css'>body{margin:0;padding:0}</style>\n</head>\n"+"<body>\n<div id='cf-wrapper'>\n<div class='cf-alert cf-alert-error cf-cookie-error' id='cookie-alert' data-translate='enable_cookies'>Please enable cookies.</div>\n<div id='cf-error-details' class='cf-error-details-wrapper'>\n<div class='cf-wrapper cf-header cf-error-overview'>\n<h1 class='cf-text-error'><i class='cf-icon-exclamation-sign'></i> Warning: Suspected Phishing Site Ahead!</h1>\n<h2 class='cf-subheadline'>This link has been flagged as phishing. We suggest you avoid it.</h2>\n</div><!-- /.header -->\n<section></section><!-- spacer -->\n<div class='cf-section cf-wrapper'>\n<div class='cf-columns two'>\n<div class='cf-column'>\n<h2>What is phishing?</h2>\n<p>This link has been flagged as phishing. Phishing is an attempt to acquire personal information such as passwords and credit card details by pretending to be a trustworthy source.</p>\n<p>\n<form action='/cdn-cgi/phish-bypass' method='GET'>\n<input type='hidden' name='u' value='/'>\n<button type='submit' class='cf-btn cf-btn-danger' data-translate='dismiss_and_enter'>Dismiss this warning and enter site</button>\n</form>\n</p>\n</div>\n\n<div class='cf-column'>\n<h2>What can I do?</h2>\n\n<p><strong>If you're a visitor of this website</strong><br />\nThe website owner has been notified and is in the process of resolving the issue. For now, it is recommended that you do not continue to the link that has been flagged.</p>\n<p><strong>If you're the owner of this website</strong><br />\nPlease log in to cloudflare.com to review your flagged website. If you have questions about why this was flagged as phishing please contact the Trust &amp; Safety team for more information.</p>\n</div>\n</div>\n</div><!-- /.section -->\n\n"+"<div class='cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300'>\n<p class='text-13'>\n<span class='cf-footer-item sm:block sm:mb-1'>Cloudflare Ray ID: <strong class='font-semibold'>"+radom+"</strong></span>\n<span class='cf-footer-separator sm:hidden'>&bull;</span>\n<span class='cf-footer-item sm:block sm:mb-1'><span>Your IP</span>: "+ip+"</span>\n<span class='cf-footer-separator sm:hidden'>&bull;</span>\n<span class='cf-footer-item sm:block sm:mb-1'><span>Performance &amp; security by</span> <a rel='noopener noreferrer' href='https://www.cloudflare.com/5xx-error-landing' id='brand_link' target='_blank'>Cloudflare</a></span>\n</p>\n</div><!-- /.error-footer -->\n\n\n</div><!-- /#cf-error-details -->\n</div><!-- /#cf-wrapper -->\n</body>\n</html>\n", { headers: { "content-type": 'text/html;charset=UTF-8'}});
}
