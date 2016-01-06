var client = require('cheerio-httpcli');

client.fetch('http://www.goo-net.com/usedcar/spread/goo/19/700630033930151009001.html', 
	{}, function(err, $, res, body) {

	// レスポンスヘッダを参照
	//console.log(res.headers);

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
	$("ul").children("li").each(function (idx) {
		console.log('▼▼▼▼▼▼▼▼▼▼▼');
		console.log($(this).children("img").attr("src"));
		console.log('▲▲▲▲▲▲▲▲▲▲▲');
	});
});
