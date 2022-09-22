console.log("我是 main.js");

// 挑战 1 加载 CSS
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.css"); // readyState = 1
  request.onreadystatechange = () => {
    // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("加载 CSS 成功");
        // 创建 style 标签
        const style = document.createElement("style");
        // 填写 style 内容
        style.innerHTML = request.response;
        // 插到头里面
        document.head.appendChild(style);
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send(); // readyState = 2
};

// 挑战 2 加载 JS
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("加载 JS 成功");
        // 创建 script 标签
        const script = document.createElement("script");
        // 填写 script 内容
        script.innerHTML = request.response;
        // 插到身体里
        document.body.appendChild(script);
      } else {
        alert("加载 JS 失败");
      }
    }
  };
  request.send();
};

// 挑战 3 加载 HTML
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("加载 HTML 成功");
        // 创建 div 标签
        const div = document.createElement("div");
        // 填写 div 内容
        div.innerHTML = request.response;
        // 插入到身体里
        document.body.appendChild(div);
      } else {
        alert("加载 HTML 失败");
      }
    }
  };
  request.send();
};

// 挑战 4 加载 XML
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("加载 XML 成功");
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("加载 XML 失败");
      }
    }
  };
  request.send();
};

// 挑战 5 加载 JSON
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("加载 JSON 成功");
        console.log(request.response);
        const object = JSON.parse(request.response);
        myName.textContent = object.name;
      } else {
        alert("加载 JSON 失败");
      }
    }
  };
  request.send();
};

// 挑战 6 加载分页
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("加载 PAGE 成功");
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        n += 1;
      } else {
        alert("加载 PAGE 完毕");
      }
    }
  };
  request.send();
};
