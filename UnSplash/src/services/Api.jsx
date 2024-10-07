import axios from "axios";

const ACCESS_KEY =  import.meta.env.VITE_ACCESS_KEY;
console.log("KEY", ACCESS_KEY)
const pre_Url = "https://api.unsplash.com"

export const fetchApi = async ({
  query,
  limit,
  orientation,
  isRandom,
  page,
}) => {

  try {
    const response = await axios.get(
      `${pre_Url}${isRandom ? "/photos/random" : "/search/photos"}`,
      {
        params: {
          query,
          per_page: limit,
          count: limit,
          page: page,
          orientation,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    );
    if (response?.data && isRandom) {
      return { data: response?.data, totalpage: 1 };
    }
    return {
      data: response?.data?.results,
      totalpage: response?.data?.total_pages,
    };
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};
