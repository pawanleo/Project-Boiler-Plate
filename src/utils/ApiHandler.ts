import axiosInstance from "./axios";

interface APIParams {
  methods: string;
  url: string;
  body: any;
}
const makeRequest = async (methods: string, url: string, body?: any) => {
  let config = {
    method: methods,
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("Authorization"),
    },
    data: body,
  };
  return axiosInstance(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response.status == 401) {
        localStorage.clear();
        window.location.replace("/login");
      } else {
        return error.response.data;
      }
    });
};
export default makeRequest;
