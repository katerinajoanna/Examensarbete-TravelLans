const API_BASE_URL = "https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/auth";

// Registrerar en ny användare genom att skicka användardata till API:et.
export const registerUser = async (userData: {
    username: string;
    email: string;
    country: string;
    city: string;
    password: string;
    confirmPassword: string;
}) => {
    //console.log("Wysyłane dane:", userData);

    const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    const data = await response.json();
    //console.log("Odpowiedź serwera:", data);

    if (!response.ok) {
        throw new Error(data.error || "Registration failed!");
    }
    return data;
};

// Loggar in en användare genom att skicka användarnamn och lösenord till API:et.
export const loginUser = async (credentials: { username: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || "Login failed!");
    }
    return data;
};
