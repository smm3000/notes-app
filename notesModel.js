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
}

module.exports = notesModel;