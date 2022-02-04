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
        fetch.resetMocks()
        const api = new NotesApi();
        fetch.mockResponseOnce(JSON.stringify(['new note']))

        api.createNote('new note', (notes) => {
            expect(notes.at(-1)).toBe('new note')
        })

        expect(fetch.mock.calls.length).toBe(1)
        expect(fetch.mock.calls[0][0]).toBe('http://localhost:3000/notes')
   })
})


