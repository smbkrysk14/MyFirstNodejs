var client = require('cheerio-httpcli');

// Googleで「node.js」について検索する
var word = 'azure';
client.debug = true;
client.fetch('https://www.google.co.jp', 
	{keyword:word}, function(err, $, res, body) {

	// レスポンスヘッダを参照
	//console.log(res.headers);

	// HTMLタイトルを表示
	console.log('-------HTMLタイトルを表示-------');
	console.log($('title').text());


	console.log('-------リンク一覧を表示-------');
	/*
	// リンク一覧を表示
	$('.g').children('.rc').children('.r').children('a').each(function (idx) {
		console.log('▼▼▼▼▼▼▼▼▼▼▼');
		console.log($(this).attr('href'));
		console.log('▲▲▲▲▲▲▲▲▲▲▲');
	});
*/
	//console.log(body);

/*
	$('.video_info_right').each(function (idx) {
		console.log('▼▼▼▼▼▼▼▼▼▼▼');
		console.log($(this).children('h3').children('a').attr('title'));
		console.log('▲▲▲▲▲▲▲▲▲▲▲');
	});
*/
	// リンク一覧を表示
	$(".album").each(function (idx) {
		console.log('▼▼▼▼▼▼▼▼▼▼▼');
		console.log($(this).attr('src'));
		console.log('▲▲▲▲▲▲▲▲▲▲▲');
	});
});
