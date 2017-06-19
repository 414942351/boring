import axios from 'axios'

// let host = 'http://localhost:9020';
let base = ''

export const getUserList = params => {
 	return axios.get(base + '/user/users')
	.then((response) => {
		console.log(response.data);
	})
}
export const addUser = params => {
	return axios.post(base + '/user/addUser', params)
	.then((response) => {
		console.log(response);
	})
}