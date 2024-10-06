import axios from "axios";

// const SECRET_KEY = "CKANt6ntezU44spif2n6iOU8Qmsjnqxw6F9OhA5dWiI";
const ACCESS_KEY = "FQhFiQhIojfM626r3fnNI9YQtrCfdCUAcwRvawWKLco";
const pre_Url = "https://api.unsplash.com";

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
