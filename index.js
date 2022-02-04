// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.
const NotesApi = require('./NotesApi');
const notesModel = require('./notesModel');
const notesView = require('./notesView');
const api = new NotesApi();
const model = new notesModel(api);
const view = new notesView(model);

api.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
});