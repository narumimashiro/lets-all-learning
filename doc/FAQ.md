# FAQ

## Typescriptじゃん、、、

需要は圧倒的にTypescriptだと思うので、頑張りましょう...

といっても全然進まなくなるのも困るので、困ったら`any`型というなんでもOKになる魔法の型で一旦は切り抜けて、慣れて余裕が出てきたら型について調べていけば良いと思います


## import文の「@」ってなに

```ts
import '@/styles/globals.css'
```

フォルダの一番上に`tsconfig.json`というファイルがあり、その中に下記の記述があるかと思います。

```json
"paths": {
  "@/*": ["./src/*"]
}
```

意味としては`@/`はsrcを示す。だと思ってください

なので、'@/styles/globals.css'は'src/styles/globals.css'ということになります

なぜこのようなことをするかと言うと例えば

src/pages/1/2/index.tsxのファイルにsrc/styles/1/2/Home.modules.cssをimportしたいときに、先ほどの設定がない場合

import '../../../styles/1/2/Home.module.css'ととても長くなってしまいますが、

import '@/styles/1/2/Home.module.css'とすっきりさせられるからです

## globals.cssとXXX.module.cssって何

結論から書くと、スタイリングの名前が衝突してしまうのを防ぐためにNextJSがそういう仕様にしたからです。

TopのREADMEに記載した_app.tsx内でglobals.cssをimportし、さらに_app.tsxはアプリ全体に関わることと記述してあったかと思います

なので、
globals.cssに
```css
.title{
  color: red;
}
```

XXX.cssにも
```css
.title{
  color: blue;
}
```
が書いてあると、どっちのtitleを使えばよいのかわからなくなってしまいます。

そこでモジュール化、モノ化してimportすることで区別ができるようにしています

日本橋と言われてもどっちかわかりませんが、東京の日本橋と言われれわかるみたいな感じです

いい例えじゃないですね、、、