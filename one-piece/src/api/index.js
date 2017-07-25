const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);
import { data } from '../mock'
mock.onGet('/imageList').reply(200, data);