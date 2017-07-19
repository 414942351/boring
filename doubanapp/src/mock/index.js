const Mock = require('mockjs');
const data = [];
for(let i = 0; i < 4; i++) {
	data.push(Mock.mock({
		src: Mock.Random.image()
	}))
}
console.log(data);
export {
	data
}