(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // NotesApi.js
  var require_NotesApi = __commonJS({
    "NotesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createNote(notescontent, callback) {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ "content": notescontent })
          }).then((response) => response.json()).then((data) => callback(data));
        }
      };
      module.exports = NotesApi2;
    }
  });

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var notesModel2 = class {
        constructor(api2) {
          this.notes = [];
          this.api = api2;
        }
        addNote(note, callback) {
          this.api.createNote(note, callback);
        }
        getNotes() {
          return this.notes;
        }
        reset() {
          return this.notes = [];
        }
        setNotes(notes) {
          this.notes.push(notes);
        }
      };
      module.exports = notesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#add-note-btn").addEventListener("click", () => {
            const newNote = document.querySelector("#add-note-input").value;
            this.addNewNote(newNote);
            document.querySelector("#add-note-input").value = "";
          });
        }
        displayNotes() {
          let existingNotes = document.querySelectorAll("div.note");
          existingNotes.forEach((element) => element.remove());
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
        addNewNote(newNote, callback) {
          this.model.addNote(newNote, callback);
          this.displayNotes();
        }
      };
      module.exports = NotesView;
    }
  });

  // index.js
  var NotesApi = require_NotesApi();
  var notesModel = require_notesModel();
  var notesView = require_notesView();
  var api = new NotesApi();
  var model = new notesModel(api);
  var view = new notesView(model);
  api.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
  });
})();
