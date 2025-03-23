import { create } from "zustand";
import { NoteStore } from "../types/dataNote";
import { fetchNotes } from "../services/apiNote";

export const useNoteStore = create<NoteStore>((set) => ({
    notes: {},

    addNote: (continent, note) =>
        set((state) => {
            const updatedNotes = [note, ...(state.notes[continent] || [])];
            localStorage.setItem(`notes-${continent}`, JSON.stringify(updatedNotes));
            return { notes: { ...state.notes, [continent]: updatedNotes } };
        }),

    removeNote: (continent, noteId) =>
        set((state) => {
            const updatedNotes = (state.notes[continent] || []).filter((note) => note.id !== noteId);
            localStorage.setItem(`notes-${continent}`, JSON.stringify(updatedNotes));
            return { notes: { ...state.notes, [continent]: updatedNotes } };
        }),

    loadNotes: async (continent) => {
        const localNotes = localStorage.getItem(`notes-${continent}`);
        const parsedLocalNotes = localNotes ? JSON.parse(localNotes) : [];

        try {
            const apiNotes = await fetchNotes(continent);
            const combinedNotes = [...parsedLocalNotes, ...apiNotes];

            set((state) => ({ notes: { ...state.notes, [continent]: combinedNotes } }));
        } catch (error) {
            console.error("Error loading notes from API:", error);
            set((state) => ({ notes: { ...state.notes, [continent]: parsedLocalNotes } }));
        }
    }
}));
