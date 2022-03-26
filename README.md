# Cloudflare-workers

# 这里提供Cloudflare Workers的实例。

- sub.js =>>通过Cloudflare Workers共享订阅链接   subfilter.py是用来配合sub.js的，因为cloudflare workers功能受限，还是python比较方便。 SubFilter功能有合并订阅&过滤垃圾关键词&过滤垃圾节点<br> Example: https://sub.usercontent.workers.dev <br>

- proxy.js =>>通过Cloudflare Workers代理网站<br> Example: https://proxy.usercontent.workers.dev <br>

- forward.js =>>通过Cloudflare Workers反向代理单个网站<br> Example: No Example <br>

- phishing.js =>>通过Cloudflare Workers部署假的CloudFlare phishing页面<br> Example: https://phishing.usercontent.workers.dev <br>

- akamai.js =>> 通过Cloudflare Workers部署假的akamai cdn错误页面 Fake Akamai Error Page<br> Example: https://akamai.usercontent.workers.dev <br>

- baidu.js =>> 对静态页面网站的尝试 （原理是通过python扫描建立网站目录，将每个文件里的"替换成'，\n替换为\\n，图片资源 全部改为base64的对javascript文件直接转译效果不是太好。<br>

- ip.js =>> 任意链接返回用户ip。 Return client ip Address <br> Example: https://ip.usercontent.workers.dev <br>

- rate-limit =>> 通过Cloudflare Workers部署假的CloudFlare Rate Limit页面<br> Example: https://rate-limit.usercontent.workers.dev <br>

<br><br>
