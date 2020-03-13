const baseUrl = 'http://127.0.0.1:8000/api';

export const constants = {
  Headers: {
    API_KEY: 'TESTING',
    API_VERSION: '1.0',
    Api_Lang: 'ar',
    CONTENT_TYPE: 'application/x-www-form-urlencoded'
  },
  auth: {
    login: `${baseUrl}/auth/login`,
    logout: `${baseUrl}/auth/logout`
  },
  user: {
    add: '/user',
    getSingle: '/user/info',
    getList: '/user/list',
    update: '/user',
    delete: '/user'
  },
  markez: {
    add: '',
    get: '',
    update: '',
    delete: ''
  },
  masjed: {
    add: '',
    get: '',
    update: '',
    delete: ''
  },
  halaqa: {
    add: '',
    get: '',
    update: '',
    delete: ''
  },
  exam: {
    add: '',
    get: '',
    update: '',
    delete: ''
  },
  examResult: {
    add: '',
    get: '',
    update: '',
    delete: ''
  }
};
