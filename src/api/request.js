//导入axios
import axios from "axios";

//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
const http = axios.create({
  baseURL: "http://127.0.0.1:3000", //请求后端数据的基本地址，自定义
  timeout: 2000, //请求超时设置，单位ms
});

http.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getRequest = (url, params = {}) => {
  return http.get(url, { params: { ...params, cookie } });
};

//导出我们建立的axios实例模块，ES6 export用法
export default http;
