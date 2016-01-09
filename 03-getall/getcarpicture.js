// ブランチ確認
// リンクを解析してダウンロード for Node.js
// ---モジュールの取り込み ---
var client = require('cheerio-httpcli');
var request = require('request');
var URL = require('url');
var fs = require('fs');
var path = require('path');

// 保存先のディレクトリ（カレント/img）
var savedir = __dirname + "/img";
// 存在していなければディレクトリ作成。
if (!fs.existsSync(savedir)) {
  fs.mkdirSync(savedir);
}

// 保存する際のファイル名接頭辞
var fileNamePrefix = "honda_accord";

// --- 共通の設定 ---
// 基準となるページURL
var TARGET_URL = "http://www.goo-net.com/usedcar/spread/goo/19/700630033930151009001/gallery.html";

// メイン処理
downloadRec(TARGET_URL);

// 指定のurlを最大レベルlevelまでダウンロード
function downloadRec(url) {
  console.log(savedir);
  // HTMLを取得する
  /**
  fetch(url[, get-param, callback])
  urlで指定したWEBページをGETメソッドで取得し、文字コードの変換とHTMLパースを行いcallback関数に返します。
  
  callback関数には以下の4つの引数が渡されます。
  
  Errorオブジェクト
  cheerio.load()でHTMLコンテンツをパースしたオブジェクト(独自拡張版)
  requestモジュールのresponseオブジェクト(独自拡張版)
  UTF-8に変換したHTMLコンテンツ
  GET時にパラメータを付加する場合は第2引数のget-paramに連想配列で指定します。
  */
  client.fetch(url, {}, function(err, $, res) {

    // 車の画像を取得
    $("span.thumb > a > img").each(function(idx) {
    
      // 画像のパスを得る
      var src = $(this).attr('src');
      if (!src) return;
      
      // 絶対パスを相対パスに変更
      src = URL.resolve(url, src);
      
      // 保存用のファイル名を作成
      //  1.拡張子を取得
      var regexResult = src.match(/(.+)(\.[^.]+$)/);
      //  2.指定されたファイル名接頭辞に連番を振り拡張子を結合
      var fname = fileNamePrefix + idx + regexResult[2];
      
      // 保存先のパスを作成
      var savepath = savedir + "/" + fname;
      
      // 画像をダウンロードして保存する
      request(src).pipe(fs.createWriteStream(savepath));
    });
  });
}

