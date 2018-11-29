function my$(id) {
    return document.getElementById(id)
};

var can = [];

var now, usercnt = 0, after = arr.length;

for (var i = 0; i < arr.length; i++) {  //记录重复，没被抽中即为0，否则为1
    can[i] = 0;
}

for (var i = 0; i < after; i++) {  //将页面中每个姓名元素输出
    var div = document.createElement("div");
    div.innerText = arr[i];
    div.className = "name";
    my$("box").appendChild(div);
};

cnt = after;

if (tot<=0 && tot!=-1) swal('总人数不合法！');
else if (tot == -1) tot = after;
else if (after < tot && cannot_more_than_1) tot = after;

my$("btn").onclick = function () {
    var peo = after, left = after - cnt + 1 + "";
    var print = "已经抽了" + left + "次";
    if (this.value === "抽奖") {
        if (cnt > after - tot) toastr.success(print);
        else {
            toastr.error('已经抽完了');
            return;
        }  //还没开始或还在暂停状态
        timeId = setInterval(function () {
            for (var i = 0; i < after; i++) {  //清空所有元素
                my$("box").children[i].style.background = ""
            };
            var random = parseInt(Math.random() * peo);
            if (cannot_more_than_1) {
                while (can[random] == 1) {
                    random = parseInt(Math.random() * peo);  //随机取数直到没有被取过
                }
            }
            my$("box").children[random].style.background = "LightBlue";
            now = random;  //记录当前抽到的人的编号
        }, 50);
        this.value = "停止";
    } else {  //已经抽到了
        clearInterval(timeId);
        this.value = "抽奖";
        if (usercnt <= user.length - 1) now = user[usercnt];
        for (var i = 0; i < after; i++) {  //清空所有元素
            my$("box").children[i].style.background = ""
        };
        my$("box").children[now].style.background = "LightBlue";
        can[now] = 1;  //去重
        cnt = cnt - 1;
        usercnt++;
        swal(arr[now], "恭喜你！");
    };
};