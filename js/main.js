//        获取id函数
function my$(id) {
    return document.getElementById(id)
};
//        动态创建层
for (var i = 0; i < arr.length; i++) {
    var div = document.createElement("div");
    div.innerText = arr[i];
    div.className = "name";
    my$("box").appendChild(div);
};
//        点名
my$("btn").onclick = function () {
    var peoples = arr.length;
    //            监视按钮的状态
    if (this.value === "抽奖") {
        //                定时针
        timeId = setInterval(function () {
            //                      清空所有层的颜色
            for (var i = 0; i < arr.length; i++) {
                my$("box").children[i].style.background = ""
            };
            //                      留下当前层的颜色
            var random = parseInt(Math.random() * peoples);
            my$("box").children[random].style.background = "LightBlue";
        }, 50);
        this.value = "停止";
    } else {
        //                清除计时器
        clearInterval(timeId);
        this.value = "抽奖";
    };
};