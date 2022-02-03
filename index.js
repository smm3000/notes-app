// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.
const NotesApi = require('./notesapi');
const notesModel = require('./notesModel');
const notesView = require('./notesView');
const model = new notesModel();
const view = new notesView(model);
const api = new NotesApi();

view.displayNotes();

console.log('The notes app is running');
console.log(model.getNotes());

api.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
});