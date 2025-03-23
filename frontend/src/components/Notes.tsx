import React, { useState, useEffect } from "react";
import { Note, NotesProps, } from "../types/dataNote";
import { useNoteStore } from "../stores/useNoteStore";
import TrashIcon from "./iconsSvg/TrashIcon";

const Notes: React.FC<NotesProps> = ({ continentName, isLoggedIn }) => {
    const { notes, addNote, removeNote, loadNotes } = useNoteStore();
    const [noteText, setNoteText] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        if (continentName) {
            console.log("Fetching notes for:", continentName);
            loadNotes(continentName);
        }
    }, [continentName, loadNotes]);

    const handleAddNote = async () => {
        if (!isLoggedIn) {
            setMessage("You must be logged in to add a note.");
            return;
        }

        if (!noteText.trim()) {
            setMessage("Note cannot be empty.");
            return;
        }

        try {
            const token = localStorage.getItem("accessToken");

            if (!token) {
                throw new Error("No access token found");
            }

            // Laddar ned användardata
            const response = await fetch("https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/auth/user", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            const userData = result.data;

            const newNote: Note = {
                id: Math.random().toString(36).substr(2, 9),
                text: noteText,
                username: userData.username || "Guest",
                city: userData.city || "Unknown",
                country: userData.country || "Unknown",
                date: new Date().toLocaleDateString(),
            };

            const apiResponse = await fetch("https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/auth/note", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    note: noteText,
                    continent: continentName
                })
            });

            const apiResult = await apiResponse.json();

            if (!apiResponse.ok) {
                throw new Error(apiResult.message || "Failed to save note in backend.");
            }

            addNote(continentName as string, newNote);
            setNoteText("");
            setMessage("Note added successfully!");
        } catch (error) {
            console.error("Error adding note:", error);
            setMessage("Failed to add note.");
        }
    };

    return (
        <div className="w-11/12 mx-auto mb-6">
            <h3 className="text-2xl text-textSecondary font-bold mb-4">Your Notes</h3>
            <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Write your note here..."
                className="w-full p-3 border border-bgLine rounded-md shadow-formShadow bg-gradient-to-r from-[#f5f5f5] to-[#e8edd2] focus:outline-none focus:ring-2 focus:ring-borderInput focus:border-borderInput"
            />
            <button
                onClick={handleAddNote}
                className="bg-primary text-xl text-green-600 font-bold py-2 px-4 rounded-md hover:text-green-400 focus:text-green-400 focus:outline-none"
            >
                Add Note
                <span className="inline-flex items-center justify-center text-2xl font-bold ml-1">+</span>
            </button>
            {message && <p className="mt-2 text-red-500">{message}</p>}

            <div className="mt-6">
                {notes[continentName as string]?.length > 0 ? (
                    notes[continentName as string].map((note) => (
                        <div key={note.id} className="border border-bgLine/25 p-4 mb-4 rounded-md shadow-md flex justify-between items-center">
                            <div>
                                <p className="text-lg text-bgLine font-semibold">{note.text}</p>
                                <p className="text-sm text-gray-500">
                                    {note.username} - {note.city}, {note.country} ({note.date})
                                </p>
                            </div>
                            <button onClick={() => removeNote(continentName as string, note.id)} className="ml-4 text-orange-400 hover:text-orange-600">
                                <TrashIcon />
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="flex items-end text-gray-500 ">No notes yet.</p>
                )}
            </div>
        </div>
    );
};

export default Notes;
