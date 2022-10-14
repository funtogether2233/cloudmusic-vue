import { getRequest } from "./request";
import { translateCount } from "@/utils/util";

const REQUEST_URL = {
  banner: "/banner",
  recommendList: "/personalized",
};
// 获取轮播图
export const getBanners = () => {
  return getRequest(REQUEST_URL.banner)
    .then((res) => {
      return res.data.banners.map((banner) => {
        return banner.imageUrl;
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getRecommendLists = () => {
  return getRequest(REQUEST_URL.recommendList, { limit: 10 })
    .then((res) => {
      return res.data.result.map((recommendList) => {
        return {
          id: recommendList.id,
          name: recommendList.name,
          picUrl: recommendList.picUrl,
          playCount: translateCount(recommendList.playCount),
        };
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
