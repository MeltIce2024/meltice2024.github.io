## 1. 包含头文件 random
```cpp
#include <random>
```
## 2. 创建一个随机数生成器对象
创建一个基于 Mersenne Twister 算法的随机数生成器
```cpp
mt19937 generator;
```
## 3. 创建一个均匀分布的随机数生成器
```cpp
uniform_int_distribution<int> distribution(整数范围);
```
例如：
```cpp
uniform_int_distribution<int> distribution(1, 10);
```
这段代码会让生成器生成1到10之内的随机整数
## 4. 生成随机数
使用 `distribution(generator)` 生成随机数
打印出生成的随机数：
```cpp
cout << "随机数: " << distribution(generator) << endl;
```