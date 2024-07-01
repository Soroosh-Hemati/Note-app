const notes = [
  {
    id: 1,
    title: "first note",
    body: "some dummy text first",
    updated: "2024-07-01T10:51:47.154Z",
  },
  {
    id: 2,
    title: "second note",
    body: "some dummy text second",
    updated: "2021-07-01T10:51:47.154Z",
  },
  {
    id: 3,
    title: "third note",
    body: "some dummy text third",
    updated: "2022-01-01T10:51:47.154Z",
  },
];
class notesAPI {
  static getAllNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app")) || [];
    return savedNotes.sort((a, b) =>
      new Date(a.updated) > new Date(b.updated) ? -1 : 1
    );
  }
  static saveNote(noteToSave) {
    const notes = notesAPI.getAllNotes();
    const existedNote = notes.find((note) => noteToSave.id == note.id);
    if (existedNote) {
      existedNote.title = noteToSave.title;
      existedNote.body = noteToSave.body;
      existedNote.updated = new Date().toISOString();
    } else {
      noteToSave.id = new Date().getTime();
      noteToSave.updated = new Date().toISOString();
      notes.push(noteToSave);
    }
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }
  static deleteNote(id) {
    const notes = notesAPI.getAllNotes();
    const filteredNotes = notes.filter((note) => note.id != id);
    localStorage.setItem("notes-app", JSON.stringify(filteredNotes));
  }
}

