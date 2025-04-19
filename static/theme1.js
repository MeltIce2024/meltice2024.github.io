document.addEventListener('DOMContentLoaded', function() {    
    let currentUrl = window.location.pathname;
    //let currentHost = window.location.hostname;

    //主页主题------------------------------------------------------------------------------
    
    if (currentUrl == '/' || currentUrl.includes('/index.html') || currentUrl.includes('/page')) {
        console.log('应用主页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        
        `;
        document.head.appendChild(style);

        let footer = document.getElementById('footer');
        let counter = document.createElement('div');
        counter.innerHTML = "网站累计被访问次数<br><img src='https://count.himiku.com/get/@notemtice?theme=moebooru'>";
        footer.insertBefore(counter, footer.firstChild);
    }


    //文章页主题------------------------------------------------------------------------------
    
    else if (currentUrl.includes('/post/') || currentUrl.includes('/link.html') || currentUrl.includes('/about.html')) {
        console.log('文章页主题');

        let style = document.createElement("style");
        style.innerHTML = `

        `;
        document.head.appendChild(style);
        
        let footer = document.getElementById('footer');
        let counter = document.createElement('div');
        counter.innerHTML = "网站累计被访问次数<br><img src='https://count.himiku.com/get/@notemtice?theme=moebooru'>";
        footer.insertBefore(counter, footer.firstChild);
    } 


    // 搜索页主题--------------------------------------------------------------------
    
    else if (currentUrl.includes('/tag')) {
        console.log('应用搜索页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        
        `;
        document.head.appendChild(style);
        
        let footer = document.getElementById('footer');
        let counter = document.createElement('div');
        counter.innerHTML = "网站累计被访问次数<br><img src='https://count.himiku.com/get/@notemtice?theme=moebooru'>";
        footer.insertBefore(counter, footer.firstChild);
    
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
