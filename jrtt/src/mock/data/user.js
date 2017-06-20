const Mock = require('mockjs')
export const LoginUsers = [
	{
		id: 1,
		username: 'yanbing',
		password: 'yanbing',
		name: 'yan'
	}
];
export const Users = [];
for(let i = 0; i < 98; i++) {
	Users.push({
		name: Mock.Random.cname(),
		date: Mock.Random.date(),
		paragraph: Mock.Random.cparagraph(),
		sex: Math.random() > 0.5 ? '男' : '女'
	});
}