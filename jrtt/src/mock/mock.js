import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {Users, LoginUsers} from './data/user'
import {imageURL} from './data/image'

const _Users = Users
const _imageURL = imageURL

const mockData = {
	init() {
		let mock = new MockAdapter(axios);
		// console.log('heiheihei')
		mock.onGet('/user/users').reply(200, {
			users: [
				{id: 1, name: 'John Smith'}
			]
		});
		mock.onPost('user/login').reply(config => {
			let {
				username,
				password
			} = JSON.parse(config.data);
			let len = LoginUsers.length;
			let isLoginSuccess = false;
			for(let i = 0; i < len; i++) {
				if(LoginUsers[i].username === username && LoginUsers[i].password === password) {
					isLoginSuccess = true;
				}
			}
			return new Promise((resolve, reject) => {
				if(isLoginSuccess) {
					resolve([200, {
						code: 200,
						msg: 'login success'
					}])
				}else {
					resolve([500, {
						code: 500,
						msg: '信息填写有误'
					}])
				}
			})
		});
		mock.onPost('user/addUser').reply(config => {
			let {
				username,
				password
			} = JSON.parse(config.data);
			return new Promise((resolve, reject) => {
				let user = null;
				setTimeout(() => {
					resolve([200, {
						code: 200,
						msg: 'add success',
						user : {
							username,
							password
						}
					}])
				}, 1000);
			})
		});
		mock.onGet('user/imgurl').reply(config => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						code: 200,
						msg: 'get img success',
						data: _imageURL
					}])
				}, 1000);
			});
		})
	}
}
mockData.init();