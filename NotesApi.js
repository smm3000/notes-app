class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        callback(data)
      })
  }

  createNote(callback, notescontent) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({"content": notescontent}),
      })
      .then(response => response.json())
      .then(data => callback(data))
  }
};





module.exports = NotesApi;