#!/usr/bin/python
# -*- coding: UTF-8 -*-
# 

import requests
from urllib.parse import urlsplit
from base64 import b64decode,b64encode
import time

#Filter函数过滤&整合 单个/多个 订阅链接，并去除其中包含垃圾关键字的内容。 注意只能整合不能相同节点去重

#这个单链接版仅在调试时使用，正常情况下muti可以实现single的使用功能。
def sub_filter_single(link,removecontent):
    vmess=[]
    ss=[]
    mix_results=[]
    headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0'}
    result = requests.get(link,headers=headers)
    if str(result)=='<Response [200]>':
        #print("<Response [200]>")
        share_links = b64decode(result.text).decode('utf-8').splitlines()
        #print(share_links)
        for i in share_links:
            if 'vmess://' in i:
                vmess.append(b64decode(i[len('vmess://'):]).decode('utf-8'))
            else:
                ss.append(i[len('ss://'):])
        #Filte Vmess
        for j in vmess:
            mix_results.append("vmess://"+str(b64encode(j.replace(removecontent, '').encode("utf-8")))[2:])
        #Filte SS
        for k in ss:
            mix_results.append("ss://"+k.replace(removecontent, ''))
        result=mix_results[0]+"\n"
        for z in mix_results:
            result=result+z+"\n"
        result=str(b64encode(result.encode("utf-8")))[2:-1]
        return(result)

#多链接 
def sub_filter_muti(list_link,list_remove,list_node_remove):
    mix_results=[]
    for link in list_link:
        print("[Link]Now Load: " +link)
        vmess=[]
        ss=[]
        headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0'}
        try:
            result = requests.get(link,headers=headers, timeout = 20)
        except:
            print("Network Error")
            return("")
        if str(result)=='<Response [200]>':
            share_links = b64decode(result.text).decode('utf-8').splitlines()
            for i in share_links:
                if 'vmess://' in i:
                    ii=b64decode(i[len('vmess://'):]).decode('utf-8')
                    Exist_KeyWords= False
                    for words in list_node_remove:
                        if words in ii:
                            print("[Notice]Filte Vmess Node， Keyword: "+str(words))
                            Exist_KeyWords = True
                            break
                        else:
                            pass
                    if Exist_KeyWords==True:
                        pass
                    elif Exist_KeyWords==False:
                        vmess.append(ii)
                else:
                    ss.append(i[len('ss://'):])
            #Filte Vmess
            for j in vmess:
                for removecontent in list_remove:
                    print("[Notice]Filte Vmess Word: "+ removecontent)
                    j=j.replace(removecontent, '')
                mix_results.append("vmess://"+str(b64encode(j.encode("utf-8")))[2:])
            #Filte SS
            for k in ss:
                for removecontent in list_remove:
                    print("Filte SS Word: "+ removecontent)
                    k=k.replace(removecontent, '')
                mix_results.append("ss://"+k)
   #使用前务必更新订阅
    result="vmess://eyJ2IjogIjIiLCAicHMiOiAiXHU0ZjdmXHU3NTI4XHU1MjRkXHU1MmExXHU1ZmM1XHU2NmY0XHU2NWIwXHU4YmEyXHU5NjA1IiwgImFkZCI6ICJcdTRmN2ZcdTc1MjhcdTUyNGRcdThiYjBcdTVmOTdcdTY2ZjRcdTY1YjBcdThiYTJcdTk2MDUiLCAicG9ydCI6ICIwIiwgImlkIjogIjZhM2JjYzA4LTljNzctNGMwMi04NDRiLTRhNjk0YzRmMmZlYSIsICJhaWQiOiAiMCIsICJuZXQiOiAidGNwIiwgInR5cGUiOiAibm9uZSIsICJob3N0IjogIiIsICJwYXRoIjogIiIsICJ0bHMiOiAiIn0=\n"
    #以下节点无限流量
    result=result+"vmess://eyJ2IjogIjIiLCAicHMiOiAiXHU0ZWU1XHU0ZTBiXHU4MjgyXHU3MGI5XHU2NWUwXHU5NjUwXHU2ZDQxXHU5MWNmIiwgImFkZCI6ICJcdTRmN2ZcdTc1MjhcdTUyNGRcdThiYjBcdTVmOTdcdTY2ZjRcdTY1YjBcdThiYTJcdTk2MDUiLCAicG9ydCI6ICIwIiwgImlkIjogIjZhM2JjYzA4LTljNzctNGMwMi04NDRiLTRhNjk0YzRmMmZlYSIsICJhaWQiOiAiMCIsICJuZXQiOiAidGNwIiwgInR5cGUiOiAibm9uZSIsICJob3N0IjogIiIsICJwYXRoIjogIiIsICJ0bHMiOiAiIn0=\n"

    for z in mix_results:
        result=result+z+"\n"
    result=str(b64encode(result.encode("utf-8")))[2:-1]
    return(result)
        



links=["https://sub.usercontent.workers.dev/default","https://sub.usercontent.workers.dev/1","https://sub.usercontent.workers.dev/2"]
words_filter=["github.com/v2rayfree - ","github.com/freefq - ","-by BuLink.xyz","github.com/v2rayfree%20-%20","github.com/freefq%20-%20",u'\u3010\u76f4\u8fde\u3011']
words_remove_node=["u66f4","u5b98","u5899","u53d8","u6d4b"]
sub=sub_filter_muti(links,words_filter,words_remove_node)
if sub!="":
    with open("sub.txt",'w') as f: 
        f.write(sub)