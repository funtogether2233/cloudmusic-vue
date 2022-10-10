import http from "./request.js";
// 获取轮播图
export const getBanners = () => {
  return http
    .get("/banner")
    .then((response) => {
      return response.data.banners.map((banner) => {
        return banner.imageUrl;
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
