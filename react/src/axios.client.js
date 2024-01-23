import axios from "axios";

const axiosClient = axios.create({
    baseURL: `https://8000-lhallelink-laravelpract-rohsomrq1u9.ws-us107.gitpod.io/api`,
});
// debugger;
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// console.log(axiosClient.baseURL);

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        try {
            const { response } = error;
            if (response.status == 401) {
                localStorage.removeItem("ACCESS_TOKEN");
            }

        } catch(e) {
            console.error(e)
        }

        throw error;
    }
);

export default axiosClient;
