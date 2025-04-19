## 问题
在 `io::stdin()` 中，会将用户的输入自动添加上换行符，就像这样:
```Rust
use std::io;
fn main() {
    println!("输入一个数字");
    let mut num = String::new();
    io::stdin()
        .read_line(&mut num)
        .expect("???");
    println!("你输入了 {} 数字", num);
}
```
输出结果为: 
```Bash
root@localhost:~# ./test
输入一个数字
10
你输入了 10
 数字
root@localhost:~#
```

## 解决方法
可以先用一个变量存储输入的内容，再用另一个变量使用 `trim()` 来去除末尾换行符，例如:
```Rust
use std::io;
fn main() {
    println!("输入一个数字");
    let mut num1 = String::new();
    io::stdin()
        .read_line(&mut num1)
        .expect("???");
    let num = num1.trim();
    println!("你输入了 {} 数字", num);
}
```
输出结果为:
```Bash
root@localhost:~# ./test
输入一个数字
10
你输入了 10 数字
root@localhost:~#
```

<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/articletoc.js'></script>"}## -->