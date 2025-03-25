// avkodningsfunktion

export const getUserFromToken = (): { username: string } | null => {
    const token = localStorage.getItem("accessToken");
    if (!token) return null;

    try {
        const payload = JSON.parse(atob(token.split(".")[1])); // payload avkodning
        return { username: payload.username };
    } catch (error) {
        console.error("Błąd dekodowania tokena", error);
        return null;
    }
};
