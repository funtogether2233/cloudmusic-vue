import http from "./request.js";
import { getRequest } from "./request";

const REQUEST_URL = {
  banner: "/banner",
};
// 获取轮播图
export const getBanners = () => {
  return getRequest(REQUEST_URL.banner)
    .then((response) => {
      return response.data.banners.map((banner) => {
        return banner.imageUrl;
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
