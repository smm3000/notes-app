const NotesApi = require('./notesapi');

require('jest-fetch-mock').enableMocks();

describe('NotesApi class', () => {
   it('calls fetch and loads notes', async () => {
       const api = new NotesApi();
       fetch.mockResponseOnce(JSON.stringify(
           ['test note']))
        
        api.loadNotes((notes) => {
            expect(notes[0]).toBe('test note');
        })
   })

   it('posts a note to the backend when a post is created', async () => {
        const api = new NotesApi();
        fetch.mockResponseOnce(JSON.stringify(
            ['created test note']))

        api.createNote((notes) => {
            expect(notes[0]).toBe('created test note')
        })
   })

})


