import { getRequest } from "../request";
import { convertBanners, convertPlayLists } from "./translate";

const REQUEST_URL = {
  banner: "/banner",
  recommendList: "/personalized",
};
// 获取轮播图
export const getBanners = () => {
  return getRequest(REQUEST_URL.banner)
    .then(convertBanners)
    .catch(function (error) {
      console.log(error);
    });
};

export const getRecommendLists = () => {
  return getRequest(REQUEST_URL.recommendList, { limit: 10 })
    .then(convertPlayLists)
    .catch(function (error) {
      console.log(error);
    });
};
