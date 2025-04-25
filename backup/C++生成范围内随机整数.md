##  1. `<random>`库方法 (C++11以上)
C++11新增了`<random>`库，用于生成更高质量的随机数

### 使用方法：

#### 1. 包含头文件 random
```cpp
#include <random>
```
#### 2. 创建一个随机数生成器对象


```cpp
std::random_device genr;  // 使用设备信息生成随机数种子，质量更高
std::mt19937 gen(genr());  // 创建一个基于梅森螺旋算法的随机数生成器，使用设备信息种子
```
#### 3. 创建一个均匀分布的随机数生成器
```cpp
// 用于生成整数
std::uniform_int_distribution<int> dist(整数范围); 
// 用于生成整数
std::uniform_real_distribution<float> dist(整数范围);
```
例如：
```cpp
// 这段代码会让生成器生成1到10之内的随机整数
std::uniform_int_distribution<int> dist(1, 10);
// 这段代码会让生成器生成0.5到2.5之内的随机浮点数
std::uniform_real_distribution<float> dist(0.5, 2.5);
```

#### 4. 生成随机数
使用 `dist(gen)` 生成随机数
打印出生成的随机数：
```cpp
std::cout << "随机数: " << dist(gen) << std::endl;
```

## 2. 使用C风格`rand()`函数
> [!NOTE]
> 使用这种方式生成的随机数质量较低，且会有分布不均匀，线程不安全等问题，所以建议不要再使用这个方法

具体方法见 [C语言的随机数生成](https://note.mtice.top/post/8.html)
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script>"}## -->