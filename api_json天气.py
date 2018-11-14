import json
import requests
 
city = input("请输入天气地点：")   


url = "http://wthrcdn.etouch.cn/weather_mini?city=%s" %city
req = requests.get(url)
weatherData = json.loads(req.text) 
wth = weatherData['data']
print("地点：%s" % wth['city'])
 
# import pprint
# pprint.pprint(wth)
date_a = []
high = []
low = []
weather = []

for i in range(len(wth['forecast'])):
    date_a.append(wth['forecast'][i]['date'])
    high.append(wth['forecast'][i]['high'])
    low.append(wth['forecast'][i]['low'])
    weather.append(wth['forecast'][i]['type'])
    
    
    print("日期：" + date_a[i])
    print("\n温度：最" + low[i] + '---最' + high[i])
    print("\n天气：" + weather[i])
    print("")
    
print("\n着装：" + wth['ganmao'])
print("当前温度：" + wth['wendu'] + "度")