/**
 * @jest-environment jsdom
 */


const fs = require('fs');

const notesModel = require('./notesModel');
const NotesView = require('./notesView');


describe('Notes view', () => {
    it('displays the all notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new notesModel();
        const view = new NotesView(model);
        model.addNote('Note one');
        model.addNote('Note two');
        view.displayNotes();
        expect(document.querySelectorAll('div.note').length).toEqual(2);        
    });
});

describe('Add Notes', () => {
    it('adds a note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new notesModel();
        const view = new NotesView(model);
        const input = document.querySelector('#add-note-input');
        input.value = 'Test Note: Remember coffee';
        const button = document.querySelector('#add-note-btn');
        button.click();
        expect(document.querySelectorAll('div.note').length).toEqual(1);
        expect(document.querySelectorAll('div.note')[0].innerText).toEqual('Test Note: Remember coffee');


    })
})

describe('Display Notes', () => {
    it('displays the correct number of notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new notesModel();
        const view = new NotesView(model);
        model.addNote('Note one');
        model.addNote('Note two');
        model.addNote('Note three');
        view.displayNotes();
        view.displayNotes();
        expect(document.querySelectorAll('div.note').length).toEqual(3);

    })
})