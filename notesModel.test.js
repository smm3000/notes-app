const notesModel = require('./notesModel');

describe('allows you to add a note', () => {
    it('adds a note', () => {
        const model = new notesModel();
        expect(model.getNotes()).toEqual([]) 
    })
})

describe('allows you to see your notes', () => {
    it('shows your notes', () => {
        const model = new notesModel();
        model.addNote('Test Message');
        expect(model.getNotes()).toEqual(['Test Message'])
    })
})

describe('allows you to reset your notes', () => {
    it('it empties the array', () => {
        const model = new notesModel();
        model.addNote('Tester');
        expect(model.reset()).toEqual([])
    })
})