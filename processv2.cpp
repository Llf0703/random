#include<bits/stdc++.h>
using namespace std;

string x;

int main()
{
    bool can=false;
    freopen("#.csv","r",stdin);
    //使用csv文件读入
    freopen("v2/js/name.js","w",stdout);
    cout<<"var arr="<<endl;
    cout<<"["<<endl;
    while (getline(cin,x))
    {
        string ans;
        for (int i=0;i<x.length();i++)
        {
            if (x[i]!=',') ans+=x[i];
            else break;
        }
        if (can) cout<<","<<endl;
        cout<<"\""<<ans<<"\"";
        can=true;
    }
    cout<<endl<<"];";
    return 0;
}