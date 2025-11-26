
import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://marikbtv.softvencefsd.xyz";

/**
 * Creates an instance of axios with a base URL set to the NEXT_PUBLIC_BASE_URL environment variable or "https://marikbtv.softvencefsd.xyz" if not set.
 * The timeout is set to 30 seconds and the Content-Type header is set to "application/json".
 * @returns {AxiosInstance} An instance of axios with base URL and timeout set.
 */
export function axiosPublic() {
    const instance = axios.create({
        baseURL: `${baseURL}/api`,
        // baseURL: 'http://localhost:3000/api',
        timeout: 30000,
        headers: {
            "Content-Type": "application/json"
        },
    });
    return instance;
}
export default axiosPublic;