class NotesView {
    constructor(model) {
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-container');

        document.querySelector('#add-note-btn').addEventListener('click', () => {
            const newNote = document.querySelector('#add-note-input').value;
            this.addNewNote(newNote);
        });
    }

    displayNotes() {
        const notes = this.model.getNotes()

       // const existingNotes = document.getElementsByClassName('note');
        // existingNotes[0].parentNode.removeChild(existingNotes[0]);

        notes.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.innerText = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl);
            
        })
    }

    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes();
    }
}

module.exports = NotesView;