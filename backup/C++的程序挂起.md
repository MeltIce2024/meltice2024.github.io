在Python中，我们可以使用`time.sleep()`来让程序挂起一段时间，在C++中，我们也可以让程序挂起

## 方法一: 使用`<thread>`的`sleep_for()` (C++11以上)

### 1. 引入`<thread>`和`<chrono>`头文件
```cpp
#include <thread>
#include <chrono>
```

### 2. 程序的挂起方法
```cpp
// 单位为秒
std::this_thread::sleep_for(std::chrono::seconds(秒数));
// 单位为毫秒
std::this_thread::sleep_for(std::chrono::milliseconds(毫秒数);
// 单位为微秒
std::this_thread::sleep_for(std::chrono::microseconds(微秒数);
```
如果嫌麻烦可以封装为一个函数:
```cpp
void sleep(int time)
{
    std::this_thread::sleep_for(std::chrono::milliseconds(static_cast<long long> (time * 1000)));
}
```

## 方法二: 使用系统提供的头文件库
> [!NOTE]
> 这种方法不推荐使用，有以下缺点:
> - **平台依赖**：代码无法跨平台。
> - **功能受限**：如 Windows 的 `Sleep` 仅支持毫秒，POSIX 的 `usleep` 已逐渐被弃用。

### **Windows API（需 `<windows.h>`）**
```cpp
#include <windows.h>

int main() {
    Sleep(3000); // 暂停 3000 毫秒（即 3 秒）
    return 0;
}
```

### **POSIX 系统（Linux/macOS，需 `<unistd.h>`）**

```cpp
#include <unistd.h>

int main() {
    sleep(3);    // 暂停 3 秒
    usleep(500000); // 暂停 500 毫秒（500000 微秒）
    return 0;
}
```
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script>"}## -->