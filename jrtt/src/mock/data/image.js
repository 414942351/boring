const Mock = require('mockjs')
export const imageURL = [];
for(let i = 0; i < 10; i++) {
	imageURL.push({
    imgUrl: Mock.Random.dataImage()
	});
}