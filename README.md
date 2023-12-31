# 始め方

## GitbashなどLinuxコマンドが実行できるコンソールを準備する

- インストール手順が書いてあるサイト

<https://qiita.com/suke_masa/items/404f06309bb32ca6c9c5>

## Cloneする

ソースコードを取得する

先ほどインストールしたコンソールを立ち上げて

```bash
git clone https://github.com/narumimashiro/lets-all-learning.git [好きな名前]
```

上記のコマンドを打つと、[好きな名前]のフォルダが作成されて、ソースコードがダウンロードされている

```bash
cd 好きな名前
```

と打ち込み、フォルダ内に移動する

## Webページを立ち上げてみる

Webページを立ち上げる前に事前確認として、パソコン内部にNodeJsがインストールされている必要があるため

コンソールで

```bash
node --version
```

と打ち込み、バージョン表示がされたらOK

されない場合は、下記サイトを参考にしつつインストール

<https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b>

NodeJsがインストール完了したら、コンソールで下記コマンドを実行

```bash
# これは必要なものをインストールするためのコマンド
npm install

# これはサーバーを起動したりするためのコマンド
npm run dev
```

コマンドを実行すると

```js
> next dev

   ▲ Next.js 14.0.3
   - Local:        http://localhost:3000

 ✓ Ready in 4.8s
```

上記内容が表示されると思うので、

PCブラウザでhttp://localhost:3000/にアクセスするとページが表示されると思います

# ディレクトリ構成

- src
- public
- node_modules
- next

## src

主に作業する場所

### pages

Webページとして表示されるファイルがここには格納されている

pages/index.tsxというファイルがWebページのURLでいうhttp://localhost:3000/

"/"の部分に相当する、ルートパスと呼ばれるものになります。

一番初めに表示されるページです。

次から書くことはまずはそういうものなんだと読み進めてください。

NextJsではこのpagesフォルダに格納されているファイル名がそのままURLになります。

ですので、pages/temp.tsxというファイルを作成したうえで、

http://localhost:300/tempと打ち込むとtemp.tsxフォルダに記載した内容がブラウザ上に表示されます

### styles

CSSファイルを格納しておくフォルダです

ここに絶対入れないといけないわけではないですが、.tsxファイルや.cssファイルが同じ場所にごちゃごちゃしてしまいますので、整理という目的でもStylesフォルダに入れるのをおすすめします

## node_modules

始め方のところで行った、npm installをした結果インストールされたものが入っているフォルダです

いじることはないです。

## next

ビルドなどを行うと勝手にできるフォルダです。

いじることはないです。

## doc

これは私が勝手に作成したものなので、NextJsを始める際にデフォルトで入っているフォルダではありません。

ドキュメント置き場用に作成しました

FAQなど置いておきます

# その他NextJsならでは

## _app.tsx

NextJsアプリで一番初めに読み込まれるファイルでアプリ全体に共通するレイアウトなどの設定を行うのに使われるファイル

ですので、ここでimport されているglobals.cssはpagesフォルダにあるものすべてに適応されるスタイリングになります