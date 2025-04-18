`format()`方法中模版字符串的槽中除了包括参数序号，还可以包括格式控制信息，此时，槽的内部样式如下：
```python
{<参数序号>:<格式控制标记>}
```
其中，格式控制标记用来控制参数显示时的格式。格式内容如下：
| 内容    | 解释 |
| :-----: | ----- |
| : | 引导符号 |
| 填充 | 用于填充的单个字符，指宽度内除了参数外字符采用的表示方式 |
| 对齐 | `<` 左对齐; `>`右对齐; `^` 居中对齐 |
| 宽度 | 槽的设定输出宽度 |
| , | 数字千位分隔符，适用于整数和浮点数 |
| 精度 | 浮点数小数部分精度或字符串输出的最大长度，用法 `.<位数>` |
| 类型 | 整数类型: **b,c,d,o,x,X** ;  浮点数类型: **e,E,f,%** |

即：
```python
{<参数序号>:<填充><对齐><宽度><,><精度><类型>}
```

### 类型
对于整数形式：
| 类型代号 | 解释 |
| :---------: | ----- |
| b | 整数的二进制形式 |
| c | 整数对应的Unicode字符 |
| d | 整数的十进制形式 |
| o | 整数的八进制形式 |
| x | 整数的小写十六进制方式 |
| X | 整数的大写十六进制方式 |

对于浮点数形式：
| 类型代号 | 解释 |
| :---------: | ----- |
| e | 浮点数对应小写字母e的指数形式 |
| E | 浮点数对应大写字母E的指数形式 |
| f | 浮点数标准浮点形式 |
| % | 输出浮点数的百分形式 |

> [!TIP]
> 浮点数输出时尽量使用 `<.精度>`表示小数部分的宽度，有助于更好控制输出格式。

<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script>"}## -->