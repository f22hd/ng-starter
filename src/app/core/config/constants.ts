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
    add: `${baseUrl}/markez`,
    get: `${baseUrl}/markez`,
    update: `${baseUrl}/markez`,
    delete: `${baseUrl}/markez`
  },
  masjed: {
    add: `${baseUrl}/masjed`,
    get: `${baseUrl}/masjed`,
    update: `${baseUrl}/masjed`,
    delete: `${baseUrl}/masjed`
  },
  halaqa: {
    add: `${baseUrl}/halaqa`,
    get: `${baseUrl}/halaqa`,
    update: `${baseUrl}/halaqa`,
    delete: `${baseUrl}/halaqa`
  },
  exam: {
    add: `${baseUrl}/exam`,
    get: `${baseUrl}/exam`,
    update: `${baseUrl}/exam`,
    delete: `${baseUrl}/exam`
  },
  examResult: {
    add: `${baseUrl}/examresult`,
    get: `${baseUrl}/examresult`,
    update: `${baseUrl}/examresult`,
    delete: `${baseUrl}/examresult`
  },
  vendor: {
    add: `${baseUrl}/vendor`,
    get: `${baseUrl}/vendor`,
    update: `${baseUrl}/vendor`,
    delete: `${baseUrl}/vendor`
  }
};
