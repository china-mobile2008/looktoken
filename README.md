# looktoken
# React Native学习实践：一个关于数字货币行情的APP
最近有学习React Native的计划
为促进学习效率，计划通过实践来促进学习过程，具体是做一个关于数字货币行情查看的APP。
该APP没有复杂的业务逻辑，更多的是UI方面的内容。比如Tab切换、下拉刷新和加载更多的ListView、网络请求等。
复杂逻辑后续版本跟进。
市场上已经有相关的App。比如MyToken。基本业务逻辑参照MyToken。
可以的话，上传到IOS和Android市场
# 路线图
## V 1.0 开发中
* 数字货币行情数据列表ListView。下拉刷新和加载更多。
* 单个币种的详情数据。
* 支持收藏单个币种。数据保存在本地。
计划春节前能出现第一个版本。

# 技术点
* 前端APP：React Native
第二个版本加入服务器部分，支持账户管理和其它定制化功能
* 后端服务器：NodeJs
* 数据库：mysql
# 行情数据源
关于各个市场行情的数据，计划从网站[API Documentation | CoinMarketCap](https://coinmarketcap.com/api/) 上获取。
