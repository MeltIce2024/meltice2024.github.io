## 问题
1. 使用 `cin` 获取输入的时候，如果输入内容有空格，则 `cin` 只会获取空格前面的内容
2. 未输入内容时按回车键不会进入下面的程序，而是会换行
## 解决方法
可以使用 string 头文件里的 `getline` 函数来替代 `cin`
首先需要引入 string 头文件：
```cpp
#include <string>
```
使用方法：
```cpp
getline(cin, 变量名);
```
> [!NOTE]
> `getline` 仅支持string类型变量，因此想要获取输入到int类型变量可以这么做
> ```cpp
> string test1;  //声明一个名为test1的字符串型变量
> int test;  //声明一个名为test的整形变量
> getline(cin, test1);
> test = stoi(test1);  //将变量test1转为整形并存储于变量test中
> ```

示例：
```cpp
string input;  //声明一个名为input的字符串型变量
getline(cin, input);
```
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/articletoc.js'></script>"}## -->