import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://marikbtv.softvencefsd.xyz";
const ACCESS_TOKEN_KEY = process.env.AUTH_TOKEN_NAME || "kniholap_auth_token";

/**
 * Creates an instance of axios with headers set to the authorization token from cookies
 * and base URL set to the NEXT_PUBLIC_BASE_URL environment variable.
 * If the response status is 401, it removes the authorization token from cookies and redirects to "/auth"
 * @returns {AxiosInstance} An instance of axios with headers and base URL set
 */
export async function axiosPrivateServer() {
    const cookieStore = await cookies();
    const token = cookieStore.get(ACCESS_TOKEN_KEY)?.value || null;

    const instance = axios.create({
        baseURL: `${baseURL}/api`,
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
        },
    });

    instance.interceptors.response.use(
        (res) => res,
        (error) => {
            if (error.response?.status === 401) {
                cookieStore.delete(ACCESS_TOKEN_KEY);
                redirect("/auth"); // ✅ safe server redirect
            }
            return Promise.reject(error);
        }
    );

    return instance;
}
