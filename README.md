# 项目名称 Name

JXFLS 11、12班毕业典礼抽奖机

也可用于多种其他用途

# 作者 Author

[Llf0703](https://llf0703.com)

# 文件目录 Project Folder

```
.
├── index.html
├── process.cpp
├── js
    ├── main.js
    └── name.js
└── about
    └── index.html
├── v1.0
    ├── index.html
    └── js
        ├── main.js
        └── name.js
```

# 使用说明 How to Use

## 预览 Preview
可以通过[https://r.llf0703.com](https://r.llf0703.com)查看效果

## 方法 Way

本项目分为V1和V2版本。其中V1可以多次抽取同一个人，V2只能抽取同一个人一次，其中V1版本单独打包在``v1``文件夹中，请按照需求使用。

使用时，先通过编译运行``process.cpp``生成名单文件``name.js``，方法如下:

1. 先准备一个表格文件，其中存取姓名；
2. 在文件->另存为->选取另存为位置时在格式中选择``.csv``文件
3. 将``process.cpp``文件中找到下面的语句后，将``#``替换为``.csv``文件的相对路径
```cpp
freopen("#.csv","r",stdin);
```
4. 编译运行，会在对应的``/js/``文件夹中生成``name.js``，这时直接使用即可

或者您也可以手动打开``name.js``，自行将引号中的空格改成姓名，可以自行添加

## 注意 Attention

1. 如果需要cpp文件自动生成名单，您需要先安装一个c++的编译器
2. html文件中header目录的路径都是适用于网页端的相对路径，可以自行修改
3. V1和V2是独立的，可以单独使用

# 协议 License

基于 MIT 协议开源