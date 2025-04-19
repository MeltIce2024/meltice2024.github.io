document.addEventListener('DOMContentLoaded', function() {    
    let currentUrl = window.location.pathname;
    //let currentHost = window.location.hostname;

    //主页主题------------------------------------------------------------------------------
    
    if (currentUrl == '/' || currentUrl.includes('/index.html') || currentUrl.includes('/page')) {
        console.log('应用主页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-Regular.woff2') format('woff2'); font-weight: regular;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-Italic.woff2') format('woff2'); font-weight: regular; font-style: italic;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-Medium.woff2') format('woff2'); font-weight: medium;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-MediumItalic.woff2') format('woff2'); font-weight: medium; font-style: italic;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-Bold.woff2') format('woff2'); font-weight: bold;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-BoldItalic.woff2') format('woff2'); font-weight: bold; font-style: italic;}
        body {font-family: 'JetBrains Mono', sans-serif;}
        `;
        document.head.appendChild(style);

        let footer = document.getElementById('footer');
        let counter = document.createElement('div');
        counter.innerHTML = "<div>网站累计被访问次数</div><br><img src='https://count.himiku.com/get/@notemtice?theme=moebooru'>";
        footer.insertBefore(counter, footer.firstChild);
    }


    //文章页主题------------------------------------------------------------------------------
    
    else if (currentUrl.includes('/post/') || currentUrl.includes('/link.html') || currentUrl.includes('/about.html')) {
        console.log('文章页主题');

        let style = document.createElement("style");
        style.innerHTML = `
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-Regular.woff2') format('woff2'); font-weight: regular;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-Italic.woff2') format('woff2'); font-weight: regular; font-style: italic;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-Medium.woff2') format('woff2'); font-weight: medium;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-MediumItalic.woff2') format('woff2'); font-weight: medium; font-style: italic;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-Bold.woff2') format('woff2'); font-weight: bold;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-BoldItalic.woff2') format('woff2'); font-weight: bold; font-style: italic;}
        body {font-family: 'JetBrains Mono', sans-serif;}
        `;
        document.head.appendChild(style);
    } 


    // 搜索页主题--------------------------------------------------------------------
    
    else if (currentUrl.includes('/tag')) {
        console.log('应用搜索页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-Regular.woff2') format('woff2'); font-weight: regular;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-Italic.woff2') format('woff2'); font-weight: regular; font-style: italic;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-Medium.woff2') format('woff2'); font-weight: medium;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-MediumItalic.woff2') format('woff2'); font-weight: medium; font-style: italic;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-Bold.woff2') format('woff2'); font-weight: bold;}
        @fontface {font-family: 'JetBrains Mono'; src: url('https://meltice2024.github.io/fonts/JetBrainsMono-BoldItalic.woff2') format('woff2'); font-weight: bold; font-style: italic;}
        body {font-family: 'JetBrains Mono', sans-serif;}
        `;
        document.head.appendChild(style);
        
    
        // 搜索框回车触发
        let input = document.getElementsByClassName("form-control subnav-search-input float-left")[0];
        let button = document.getElementsByClassName("btn float-left")[0];
        input.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                button.click();
            }
        });
    }
})
