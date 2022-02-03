class notesModel {
    constructor () {
        this.notes = []
    }

    addNote(note) {
        this.notes.push(note);
    }

    getNotes() {
        return this.notes 
    }

    reset() {
        return this.notes = []
    }

    setNotes(notes) {
        this.notes.push(notes);
      
    }

}

module.exports = notesModel;