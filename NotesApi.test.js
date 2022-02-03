require('jest-fetch-mock').enableMocks();

const NotesApi = require('./notesapi');

describe('NotesApi class', () => {
   it('calls fetch and loads repo info', async () => {
       const api = new NotesApi();
       fetch.mockResponseOnce(JSON.stringify(
           ['test note']))
   })
})


