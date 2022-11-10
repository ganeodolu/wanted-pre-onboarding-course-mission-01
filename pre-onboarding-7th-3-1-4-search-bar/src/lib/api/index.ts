import axios from "axios";
import { BASE_URL } from "../constants";

const instance = axios.create({
  baseURL: BASE_URL
});

const cache: any = {};

const request = async (url: string) => {
  console.log(cache)
  const cacheValue = await cache[url];
  if(cacheValue){
    return cacheValue
  }
	try {
		const response = await instance(url);
    console.info("calling api")
    console.log(response)
		const responseCode = response.status;
		if (responseCode === 200) {
      cache[url] = await response.data; 
			return cache[url];
		} else {
			switch (responseCode) {
				case 400:
					console.log(`CODE: ${responseCode} Bad Request`);
					break;
				case 404:
					console.log(`CODE: ${responseCode} Not Found`);
					break;
				case 500:
					console.log(`CODE: ${responseCode} Internal Server Error`);
					break;
			}
		}
	} catch (error) {
		throw new Error("API 응답이 없습니다.");
	}
};

const API = {
  getKeyword: (keyword: string) => {
    return request(`/sick?q=${keyword}`)
  }
}

export default API
