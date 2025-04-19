document.addEventListener('DOMContentLoaded', function() {    
    let currentUrl = window.location.pathname;
    //let currentHost = window.location.hostname;

    //主页主题------------------------------------------------------------------------------
    
    if (currentUrl == '/' || currentUrl.includes('/index.html') || currentUrl.includes('/page')) {
        console.log('应用主页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        /* header布局*/
        
        .SideNav {
            border-radius: 10px; /* 圆角边框 */
            min-width: unset;
        }
        
        .SideNav-item:hover {
            background-color: #DDDDDD;
            border-radius: 10px;
            transform: scale(1.02);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
        
        .SideNav-item {
            transition: 0.5s;
        }
        
        /* 分页条 */
        .pagination a:hover, .pagination a:focus, .pagination span:hover, .pagination span:focus, .pagination em:hover, .pagination em:focus {
            border-color: rebeccapurple;
        }
        
        /* 右上角按钮 */
        div.title-right .btn {
            display: inline-flex;
            align-items: center;
            width: auto;
            height: 40px;
            margin: 0 3px;
            border-radius: 2em !important;
            transition: 0.3s;
        }
        
        div.title-right .btn:hover {
            width: auto;
            border-radius: 2em !important;
            background-color: #DDDDDD;
        }
        
        div.title-right .btn .btndescription {
            display: none;
            margin-left: 3px;
            white-space: nowrap;
            color: black;
            font-weight: bold;
        }
        
        div.title-right .btn:hover .btndescription {
            display: inline;
        }
        `;
        document.head.appendChild(style);

        //右上角按钮描述
        let topright_buttons = document.querySelectorAll(".title-right a.btn");

        topright_buttons.forEach(button => {
            var title = button.getAttribute('title');
            if (title) {
                var btndescription = document.createElement('span');
                btndescription.className = 'btndescription';
                btndescription.textContent = title;
                button.appendChild(btndescription);
            }
        });

        let footer = document.getElementById('footer');
        let counter = document.createElement('div');
        counter.innerHTML = "<div>网站累计被访问次数</div><br><img src='https://count.himiku.com/get/@notemtice?theme=moebooru'>";
        footer.insertBefore(counter, footer.firstChild);
        document.getElementById("footer1").innerHTML = "Copyright © <span id='copyrightYear'></span> MPGA Team";
        document.getElementById("footer2").innerHTML = "<span id='runday'></span>";
    }


    //文章页主题------------------------------------------------------------------------------
    
    else if (currentUrl.includes('/post/') || currentUrl.includes('/link.html') || currentUrl.includes('/about.html')) {
        console.log('文章页主题');

        let style = document.createElement("style");
        style.innerHTML = `
        /* markdown内容 */
        .markdown-body img {
            border-radius: 10px;
        }

        .markdown-alert {
            border-radius: 10px;
        }

        .markdown-body .highlight pre, .markdown-body pre {
            background: rgba(255, 255, 255, 0.85);
            border-radius: 10px;
        }

        .markdown-body code, .markdown-body tt {
            border-radius: 10px;
        }

        video {
            border-radius: 10px;
        }

        /* 右上角按钮 */
        div.title-right .btn {
            display: inline-flex;
            align-items: center;
            width: auto;
            height: 40px;
            margin: 0 3px;
            border-radius: 2em !important;
            transition: 0.3s;
        }

        div.title-right .btn:hover {
            width: auto;
            border-radius: 2em !important;
            background-color: #DDDDDD;
        }

        div.title-right .btn .btndescription {
            display: none;
            margin-left: 3px;
            white-space: nowrap;
            color: black;
            font-weight: bold;
        }

        div.title-right .btn:hover .btndescription {
            display: inline;
        }
        `;
        document.head.appendChild(style);

        topright_buttons.forEach(button => {
            var title = button.getAttribute('title');
            if (title) {
                var btndescription = document.createElement('span');
                btndescription.className = 'btndescription';
                btndescription.textContent = title;
                button.appendChild(btndescription);
            }
        });

        document.getElementById("footer1").innerHTML = "Copyright © <span id='copyrightYear'></span> MPGA Team";
        document.getElementById("footer2").innerHTML = "<span id='runday'></span>";
    } 


    // 搜索页主题--------------------------------------------------------------------
    
    else if (currentUrl.includes('/tag')) {
        console.log('应用搜索页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        /* header布局*/
        
        .title-right {
            align-items: flex-end;
        }
        
        .SideNav {
            border-radius: 10px; /* 圆角边框 */
            min-width: unset;
        }
        
        .SideNav-item:hover {
            background-color: #DDDDDD;
            border-radius: 10px;
            transform: scale(1.02);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
        
        .SideNav-item {
            transition: 0.5s;
        }
        
        
        /* 右上角按钮 */
        div.title-right .btn {
            display: inline-flex;
            align-items: center;
            width: auto;
            height: 40px;
            margin: 0 3px;
            border-radius: 2em !important;
            transition: 0.3s;
        }
        
        div.title-right .btn:hover {
            width: auto;
            border-radius: 2em !important;
            background-color: #DDDDDD;
        }
        
        div.title-right .btn .btndescription {
            display: none;
            margin-left: 3px;
            white-space: nowrap;
            color: black;
            font-weight: bold;
        }
        
        div.title-right .btn:hover .btndescription {
            display: inline;
        }
        
        .subnav-search-input {
            border-radius: 2em;
            float: unset !important;
        }
        
        .subnav-search-icon {
            top: 9px;
        }
        
        button.btn.float-left {
            display: none;
        }
        
        .subnav-search {
            width: unset; 
            height: 36px;
        }
        `;
        document.head.appendChild(style);
        
        //右上角按钮描述
        let topright_buttons = document.querySelectorAll(".title-right a.btn");

        topright_buttons.forEach(button => {
            var title = button.getAttribute('title');
            if (title) {
                var btndescription = document.createElement('span');
                btndescription.className = 'btndescription';
                btndescription.textContent = title;
                button.appendChild(btndescription);
            }
        });

        document.getElementById("footer1").innerHTML = "Copyright © <span id='copyrightYear'></span> MPGA Team";
        document.getElementById("footer2").innerHTML = "<span id='runday'></span>";
    
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
