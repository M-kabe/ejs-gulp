サイトリニューアルに向けて、開発環境の試作を製作
 
## 使用しているもの
 
- タスクランナー　→　gulp
- テンプレートエンジン　→　ejs
- scss →　SMACSS
  
## 準備
 各項目ごとにインストールします（黒い画面で）
 
  - ` npm install -D gulp ` (-Dは、--save-devの省略。ローカル環境にインストールするために、記述が必要)
  - ` npm install -D gulp-sass `
  - ` npm install -D gulp-ejs `
  - 番外編　一気に出来るw
    - ` npm install gulp gulp-sass gulp-ejs --save-dev `
  
  - ローカルサーバーをたてるのに必要
    - ` `
 
- gulpfile.jsを作る　（ファイルの吐き出し先や、タスクランナーの動きを記述してあるやーつです。）
  - もし、クローンできなかった場合は、 ` npm init `でも、新規ファイル作成でもどちらでも問題無いです。
 
## ディレクトリ構造
 
- sass
  - base (サイトの土台として敷く基本スタイルを指定。　リセットcssやnormalize.cssなど)
  - layout (メインエリアやサイドバーの大枠のレイアウト、段組みなど。` l- `を接頭辞としてつけるとわかりやすい)
  - module ()
  - state()
  - theme()
  - style.scss(上記scssをimportして、css/style.cssに吐き出している)
  
- ejs
  - common (パーツ化している部品はこの中に、ejsファイルとして格納する)
  
- 要件
- ...
 
## 使い方
 
1. 使い方
2. 使い方
3. 使い方
 
## インストール
 
```
$ git clone https://github.com/TomoakiTANAKA/awesome-tool
$ cd awesome-tool
$ sh setup.sh
$ ~do anything~
```
 
## テスト
 
1. 使い方
2. 使い方
3. 使い方
 
## デプロイ
 
1. デプロイ
2. デプロイ
3. デプロイ
 
## その他
 
その他その他その他その他
その他その他その他その他
その他その他その他その他
その他その他その他その他
 
## 作者
 
[@TanakanoAnchan](https://twitter.com/TanakanoAnchan)
mail to: xxxx@mail.com
 
## ライセンス
 
[MIT](http://TomoakiTANAKA.mit-license.org)</blockquote>
