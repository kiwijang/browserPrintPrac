# browserPrintPrac
練習 `window.print()`

# angular 版本
```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 11.2.12
Node: 12.18.1
OS: win32 x64

Angular: 11.2.13
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1102.12
@angular-devkit/build-angular   0.1102.12
@angular-devkit/core            11.2.12
@angular-devkit/schematics      11.2.12
@angular/cdk                    11.2.12
@angular/cli                    11.2.12
@schematics/angular             11.2.12
@schematics/update              0.1102.12
rxjs                            6.6.7
typescript                      4.1.5
```

# 😫待補客製化
1. 頁碼
2. 用 primeng 的 <p-table> 和原始 html <table> 看起來沒差別，只是 primeng `-webkit-print-color-adjust: exact;` 還是沒有顯示顏色，可能是元件的問題==
``` scss
  .p-datatable-thead {
    -webkit-print-color-adjust: exact; // chrome 顯示顏色
  }
```
