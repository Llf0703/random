function my$(id) {
    return document.getElementById(id)
};

var can = [];

var now, cnt = arr.length;

for (var i = 0; i < arr.length; i++) {  //记录重复，没被抽中即为0，否则为1
    can[i] = 0;
}

for (var i = 0; i < arr.length; i++) {  //将页面中每个姓名元素输出
    var div = document.createElement("div");
    div.innerText = arr[i];
    div.className = "name";
    my$("box").appendChild(div);
};

my$("btn").onclick = function () {
    var peo = arr.length;
    if (this.value === "抽奖") {
        if (cnt > 0) toastr.success('成功');
        else {
            toastr.error('已经抽完了');
            return;
        }  //还没开始或还在暂停状态
        timeId = setInterval(function () {
            for (var i = 0; i < arr.length; i++) {  //清空所有元素
                my$("box").children[i].style.background = ""
            };
            var random = parseInt(Math.random() * peo);
            while (can[random] == 1)
                random = parseInt(Math.random() * peo);  //随机取数直到没有被取过
            my$("box").children[random].style.background = "LightBlue";
            now = random;  //记录当前抽到的人的编号
        }, 50);
        this.value = "停止";
    } else {  //已经抽到了
        clearInterval(timeId);
        this.value = "抽奖";
        can[now] = 1;  //去重
        cnt = cnt - 1;
        swal({ 
            title: arr[now] , 
            text: "恭喜你！",
            type: "success", 
          });
    };
};