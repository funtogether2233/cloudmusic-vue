import { translateCount } from "@/utils/util";

export const convertBanners = (res) => {
  return res.data.banners.map((banner) => {
    return banner.imageUrl;
  });
};

export const convertPlayLists = (res) => {
  return res.data.result.map((recommendList) => {
    return {
      id: recommendList.id,
      name: recommendList.name,
      picUrl: recommendList.picUrl,
      playCount: translateCount(recommendList.playCount),
    };
  });
};
