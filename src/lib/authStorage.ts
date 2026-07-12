import { STORAGE_KEYS } from "@/constants/storage";
import { SecureStorage } from "@/services/secureStore";


export class AuthStoarge {
    public static async saveUser(user: any) {
        await SecureStorage.set(STORAGE_KEYS.USER, user);
    }

    public static async getUser(): Promise<any | null> {
        const data = await SecureStorage.get(STORAGE_KEYS.USER) as any;

        // SecureStorage.get may return void; ensure we only attempt to parse when a string is returned
        if (typeof data === "string" && data.length > 0) {
            return JSON.parse(data);
        }

        return null;
    }
    public static getAccessToken() {
        return SecureStorage.get(
            STORAGE_KEYS.ACCESS_TOKEN
        );
    }
}
