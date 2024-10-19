## 问题
1. 使用cin获取输入的时候，如果输入内容有空格，则cin只会获取空格前面的内容
2. 未输入内容时按回车键不会进入下面的程序，而是会换行
## 解决方法
可以使用string头文件里的 `getline` 函数来替代cin
使用方法：
```cpp
getline(cin, 变量名);
```
示例：
```cpp
string input;  //定义一个名为input的字符串类型变量
getline(cin, input);
```
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/articletoc.js'></script>"}## -->