class notesModel {
    constructor (api) {
        this.notes = []
        this.api = api
    }

    addNote(note, callback) {
        this.api.createNote(note, callback)
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