import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

/**
 * Created a default timeout of 5seconds. Please make sure
 * that the API should not be taking more than 200-500ms to
 * resolve. If it does, raise a ticket on JIRA indicating the
 * endpoint of the API.
 */
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});

/**
 * This is a request interceptor i.e. we can send any kind of
 * data herein in the config file. Seldom use, but very useful
 * to set Headers and specifying cache resolutions and matching
 * up etags for cache results.
 */
axiosInstance.interceptors.request.use((config) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  config.headers["Authorization"] = `Bearer ${localStorage.getItem("auth")}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

/**
 * here is a simple representation of how the API calls should be made
 * on top of every request.
 */
class FetchUtilsClass {
  getRequest = async <T>(url: string, params?: any): Promise<T> => {
    const { data } = await axiosInstance.get(url, params);
    return data;
  };

  patchRequest = async (url: string, body: any) =>
    axiosInstance.patch(url, body);

  putRequest = async (url: string, body: any) => axiosInstance.put(url, body);

  postRequest = async <T, M>(url: string, body: T): Promise<M> => {
    const { data } = await axiosInstance.post(url, body);
    return data;
  };

  deleteRequest = async (url: string) => axiosInstance.delete(url);
}
const FetchUtils = new FetchUtilsClass();

export { FetchUtils };
