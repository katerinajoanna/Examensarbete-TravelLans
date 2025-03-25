export interface LoginResponse {
    success: boolean;
    data: {
        message: string;
        accessToken: string;
        refreshToken: string;
        role: string;
    };
}

