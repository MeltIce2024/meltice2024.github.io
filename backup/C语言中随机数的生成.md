## rand 随机数发生器
- 头文件: `stdlib.h`
- 功能: 生成一个随机数

### rand 函数声明
```c
int rand (void);
```
rand函数无需传入参数，返回值是 0-RAND_MAX(32767) 之间的一个数。每个数字被选中的概率是相同的。

### 使用示例
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("%d\n", rand());
    return 0;
}
```

> [!NOTE]
> rand函数是伪随机，默认随机数种子是1。
>
> 如果随机数种子是相同的，每次程序运行算法迭代产生的结果就是相同的

要想让每次程序随机的不同，这时就需要srand函数了。


## srand 初始化随机数发生器
- 头文件: `stdlib.h`
- 功能: 设置随机数种子

### srand 函数声明
```c
void srand(unsigned int seed);
```
seed是一个无符号类型的数，不同的seed可以设置不同的随机数种子。

### 使用示例
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    srand(1);
    printf("%d\n", rand());
    srand(2);
    printf("%d\n", rand());
    return 0;
}
```

因此我们想让每次程序运行给srand传递个不同的参数，这时就需要time函数了。


## time 时间戳函数
- 头文件: `time.h`
- 功能: 计算当前时间的时间戳
- UNIX时间戳: 从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒

因此时间戳是随时间始终变化的。

### time 函数声明
```c
time_t time (time_t* timer);
```
time_t是对long long int的重命名。

timer是long long int型指针，传入NULL参数就可以计算标准Unix时间戳。

time函数返回值就是long long int 型时间戳的数值。

### 使用示例
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand((unsigned int)time(NULL));
    printf("%d\n", rand());
    return 0;
}
```

> [!NOTE]
> 需要强制类型转换成int型再给srand传参，否则就是语法错误。
>
> 随机数种子设置一次就行了，不需要重复设置。


## 总结
生成一个1-100的随机数函数代码演示:
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand((unsigned int) time(NULL));
    int randomNum = rand() % 100 + 1;
    printf("%d\n", randomNum);
    randomNum = rand() % 100 + 1;
    printf("%d\n", randomNum);
    return 0;
}
```

<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/articletoc.js'></script>"}## -->