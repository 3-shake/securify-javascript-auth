# securify-javascript-auth

## 使い方

**1**
cloneして自分のローカル環境に落とし込みます
```
$ git clone xxx
```

**2**
認証が通るように`.js`を編集します


**3**
実際にJavaScriptを動作させて期待通りのHeaderが取得できているか確認します

Dockerを使用する場合(推奨)
Dockerをインストールしていない場合は後述のホスト機のNode.jsを使用する方法でも問題ありません

```
$ docker build -t js-auth-test .
$ docker run --rm js-auth-test
```

自分のホスト機のNode.jsを使用する場合
Node.jsのバージョンは16で動作させてください
```
$ npm i
$ npm run test
```
