export const fetchNotes = async (continent: string) => {
    try {
        const response = await fetch(`https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/auth/notes/${continent}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to fetch notes.");
        }

        return data.data.notes || [];
    } catch (error) {
        console.error("Error fetching notes:", error);
        return [];
    }
};

export const addNoteToAPI = async (continent: string, noteText: string) => {
    try {
        const token = localStorage.getItem("accessToken");

        console.log("Wysyłanie notatki do API:", { note: noteText, continent });

        const response = await fetch("https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/auth/note", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ note: noteText, continent }),
        });

        const data = await response.json();

        console.log("Odpowiedź API:", data);

        if (!response.ok) {
            throw new Error(data.message || "Failed to add note.");
        }

        return data;
    } catch (error) {
        console.error("Błąd wysyłania notatki:", error);
        return null;
    }
};
