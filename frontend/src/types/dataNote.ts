export interface Note {
    id: string;
    text: string;
    username: string;
    city: string;
    country: string;
    date: string;
}

export interface NotesProps {
    continentName: string | undefined;
    isLoggedIn: boolean;
}

export interface NoteStore {
    notes: { [key: string]: Note[] };
    addNote: (continent: string, note: Note) => void;
    removeNote: (continent: string, noteId: string) => void;
    loadNotes: (continent: string) => void;
}