import request from '@/utils/request.js';
import { URL } from './url';
export const getRoute = (params = {}) => {
  return request({
    url: URL.roles.router,
    method: 'get',
    headers: {
    },
    params
  })
}