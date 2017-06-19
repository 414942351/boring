import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {Users} from './data/user'
const _Users = Users

// export default {
	// bootstrap() {
		let mock = new MockAdapter(axios);
		// console.log('heiheihei')
		mock.onGet('/user/users').reply(200, {
			users: [
				{id: 1, name: 'John Smith'}
			]
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
	// }
// }
// console.log(mock)
// export default mock