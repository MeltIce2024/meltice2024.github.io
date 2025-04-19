在 CSS 中使用自定义字体可以通过 `@font-face` 规则实现，允许你加载并使用非系统默认的字体。以下是完整指南：

## 一、基本用法
```css
@font-face {
  font-family: 'MyCustomFont'; /* 自定义字体名称 */
  src: url('path/to/font.woff2') format('woff2'), /* 优先加载的格式 */
       url('path/to/font.woff') format('woff');
  font-weight: 400; /* 字重 */
  font-style: normal; /* 字体样式 */
}

body {
  font-family: 'MyCustomFont', sans-serif; /* 使用自定义字体 */
}
```

## 二、关键属性说明
1. **`font-family`**  
   定义字体的名称（自定义，与文件名无关）。

2. **`src`**  
   指定字体文件的路径和格式，支持多个备选源（按优先级排列）。  
   常见格式：
   - `woff2`：现代浏览器首选，压缩率高
   - `woff`：广泛支持
   - `truetype` (`.ttf`)：兼容旧设备
   - `opentype` (`.otf`) 
   - `embedded-opentype` (`.eot`，仅 IE)

3. **`font-weight` 和 `font-style`**  
   定义该字体文件对应的字重（如 400、700）和样式（如 `italic`）。


## 三、多字重/样式定义
若字体包含不同字重或斜体，需分别定义：
```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('font-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'MyCustomFont';
  src: url('font-bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'MyCustomFont';
  src: url('font-italic.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
}
```

## 四、性能优化技巧
1. **预加载字体**  
   在 HTML 中优先加载关键字体：
   ```html
   <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
   ```

2. **使用 `local()` 检测本地字体**  
   避免重复下载用户已安装的字体：
   ```css
   @font-face {
     font-family: 'MyCustomFont';
     src: local('MyFontLocalName'), 
          url('font.woff2') format('woff2');
   }
   ```

3. **控制字体加载行为**  
   使用 `font-display` 定义字体加载期间的文本显示策略：
   ```css
   @font-face {
     font-family: 'MyCustomFont';
     src: url('font.woff2') format('woff2');
     font-display: swap; /* 短暂显示后备字体，再替换 */
   }
   ```

<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/articletoc.js'></script>"}## -->