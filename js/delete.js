function my$(id) {
    return document.getElementById(id)
};

var name=my$("delete").value,st=0;

for (var i=0;i<=name.length;i++) {
    if (name[i]==',' || i==name.length || name[i]=='，') {
        var now=name.substring(st,i);
        st=i+1;
        for (var j=0;j<arr.length;j++) {
            if (now==arr[j]) {
                arr[j]=' ';
            }
        }
    }
}