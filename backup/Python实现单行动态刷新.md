在`print()`函数中更换参数`end`的默认值为`""`，即每次使用`print()`函数输出时不换行。此时，系统输出指针还停留在上一次输出的行尾，下一次输出在字符串前部增加转义符`\r`，该转义符把输出指针移动到行首而不换行。
```python
print("\r", end=True, flush=True)   #flush=True用于实时刷新
```

> [!NOTE]
> Python IDLE本身屏蔽了单行刷新功能，如果希望获得刷新效果，请使用控制台命令行执行

## 示例: 带刷新的文本进度条
```python
import time
scale = 50
print("执行开始".center(scale // 2, '-'))
t = time.perf_counter()
for i in range(scale + 1):
    a = "*" * i
    b = "." * (scale - i)
    c = (i / scale) * 100
    t -= time.perf_counter()
    print("\r{:^3.0f}% [{}->{}] {:.2f}s".format(c, a, b, -t / 20000), end="", flush=True)
    time.sleep(0.05)
print("\n" + "执行结束".center(scale // 2, '-'))
```
效果如下：
```
F:\Documents>python test.py
-----------执行开始----------
100% [**************************************************->] 2.55s
-----------执行结束----------

F:\Documents>
```
其中`time.perf_counter`是`time`库在Python3.7中新增的函数，一般多次出现，第一次调用计时开始，同一程序中第二次及后续调用时返回与第一次计时的时间差，单位为小数秒（1秒=20000小数秒）。该函数主要用来统计程序运行时间，增加用户体验。

<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script>"}## -->