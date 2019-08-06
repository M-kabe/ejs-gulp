## 試作パターン1 (ejs + gulp)
サイトリニューアルに向けて、開発環境の試作を製作
 
## 使用しているもの
 
- タスクランナー　→　gulp
- テンプレートエンジン　→　ejs
- scss →　SMACSS
  
## 準備（インストールとか）
 1. 自分の作業環境に、リポジトリをクローンする

 1. 各項目ごとにインストールします（作業ディレクトリに移動して、そこで以下（コピペでok）をインストールします。黒い画面で…）
 
    1. タスクランナー（毎回やるのが面倒な作業を代わりにやってくれるツール）のgulpをインストール
       - ` npm install --save-dev gulp ` (-Dは、--save-devの省略。ローカル環境にインストールするために、記述が必要)   
    1. gulpでsassをコンパイルしてもらうのに必要
       - ` npm install --save-dev gulp-sass `
    1. sassをimportできるようにするために必要
       - ` npm install --save-dev gulp-sass-glob `
    1. gulpでejsが使えるようにするために必要
       - ` npm install --save-dev gulp-ejs `
    1. ejsのファイルを.htmlにしてもらうために必要
       - ` npm install --save-dev gulp-rename `
    1. htmlファイルの上部空白を整形してもらう
       - ` npm install --save-dev gulp-replace `
    1. ローカルサーバーを立てるのに必要
       - ` npm install --save-dev gulp-webserver`
          
      ※ 一気にインストールもできるようですが、一個ずつやった方がどれにつまづいたか気付けるかなぁと。
    
 1. 2でインストールしたものの一覧が記載されるpackage.jsonを作っておく。
    - ` npm init`　何か聞いてくるので、`enter`連打でok
    - インストールしたものが一覧で記載されています。今後、必要なものをインストールすると自動で追記されます。
 
 1. 2でインストールしたものが動くように`gulpfile.js(指示書)`を作成。
    - クローンしたリポジトリに入っているので、そのまま使えます。もし、クローンできなかった場合は新規ファイルで作成します（中身はコピペでokです） 
    ```
    var gulp = require("gulp");
    var sass = require("gulp-sass");
    var sassGlob = require('gulp-sass-glob');
    var rename = require("gulp-rename");
    var ejs = require("gulp-ejs");
    var replace = require("gulp-replace");
    var webserver = require('gulp-webserver');

     // 監視
    gulp.task( "default", function(){
    gulp.watch("sass/**/*.scss", gulp.series("sass")); // sassディレクトリ以下の.scssファイルの更新を監視
    gulp.watch("ejs/**/*.ejs", gulp.series("ejs")); // ejsディレクトリ以下の.ejsファイルの更新を監視
    gulp.src('dist/')
      .pipe(webserver({
         port: 9000
       }));
    });

    // Sass
    gulp.task( "sass", function() {
      return gulp
        .src('sass/**/*.scss')
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
    });

     // EJS
    gulp.task("ejs", (done) => {
       gulp
        .src(["ejs/**/*.ejs", "!" + "ejs/**/_*.ejs"])
        .pipe(ejs({}, {}, {ext:'.html'}))
        .pipe(rename({ extname: ".html"}))
        .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, "$1"))
        .pipe(gulp.dest("dist"));
     done();
    });

    ```
    
 1. コンパイル、サーバーを立てる方法
    - 作業する時は、黒い画面に`gulp`と打ちます。
    - scssファイルはdist配下のcss/style.cssに、ejsファイルは、dist配下にhtmlとして吐き出されます（common配下のパーツとしたejsは、単体としてhtmlファイルにはなりません。）
 
 
## ディレクトリ構造
1. 作業ファイル
   - sass
     - base (サイトの土台として敷く基本スタイルを指定。　リセットcssやnormalize.cssなど)
     - layout (メインエリアやサイドバーの大枠のレイアウト、段組みなど。`l- `を接頭辞としてつけるとわかりやすい)
     - module (再利用可能なパーツを定義。ロゴ、ナビ、タブ、ダイアログなど。冗長になるので、接頭辞をつけないと良い)
     - state (モジュールやレイアウトを拡張し、特定の状態によってスタイルを上書きする。`is-` を接頭辞にする。エラー状態や、非表示とかに使ったり)
     - theme (サイトの表面的なデザイン変更に使用。`theme-` を接頭辞にする。)
     - style.scss(上記scssをimportして、css/style.cssに吐き出している)   
   - ejs
     - common (パーツ化している部品はこの中に、ejsファイルとして格納する)
        - _header.ejs
        - _footer.ejs
        - button
           - _link-btn.ejs
     - about(各下層のディレクトリ)
       - index.ejs
     - index.ejs
1. コンパイルした後のファイル（納品ファイル）
   - dist
      - css
         - style.css
      - index.html
      - about
         - index.html
         
## 確認ページ         
   https://m-kabe.github.io/ejs-gulp/dist/
         
## その他
ブランチの運用ルールや、クラス名の命名規則なども決めないと…
       
