### 方法一：利用 `os.name` 检测
`os.name` 用于返回系统类型
首先需要引入 `os` 模块
```python
import os
```
接着使用 `os.name` 便可获取系统类型
例如在Windows下运行以下代码会输出"nt"
```python
import os
print(os.name)
```
以下是不同系统所对应的系统类型
| 系统名称          | 系统类型 |
|-------------------|----------|
| Windows           | nt       |
| Linux等类UNIX系统 | posix    |
| Java虚拟机        | java  |

### 方法二：利用 `sys.platform` 检测
`sys.platform` 用于返回系统标识符
首先需要引入 `sys` 模块
```python
import sys
```
接着使用 `sys.platform` 便可获取系统标识符
例如在Windows下运行以下代码会输出"win32"
```python
import sys
print(sys.platform)
```
以下是不同系统所对应的系统标识符
| 系统名称       | 系统标识符 |
|----------------|------------|
| Windows        | win32      |
| Linux          | linux      |
| Windows/Cygwin | cygwin     |
| macOS          | darwin     |

<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/articletoc.js'></script>"}## -->