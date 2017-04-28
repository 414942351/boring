const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/', (req, res) => {
	request('https://www.zhihu.com/', (error, response, body) => {
		if(!error && response.statusCode == 200) {
			let $ = cheerio.load(body);
			//let title = $('.zu-top')//.find('.zg-wrap').find('#zh-top-link-logo').text();
			// console.log($);

			// console.log(posts);
			// for(let i = 0; i < posts.length; i++) {
			// 	console.log(posts.length)
			// }
		}
	});
});

const server = app.listen(9393, () => {
	console.log('the server is running on port 9393');
});