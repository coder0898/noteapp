import reactLogo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [isAddNote, setIsAddNote] = useState(false);
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setNoteItem((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    console.log(noteItem);
    setNoteItem({
      title: "",
      content: "",
    });
  }

  return (
    <>
      <main>
        <button onClick={() => setIsAddNote(!isAddNote)}>
          <span>+</span>Add a Note
        </button>
        {isAddNote && (
          <div>
            <div className="head">
              <h2>Notes</h2>
              <button onClick={() => setIsAddNote(!isAddNote)}>&times;</button>
            </div>
            <div className="input-group">
              <label htmlFor="title">Note Title</label>
              <input
                type="text"
                name="title"
                value={noteItem.title}
                placeholder="please enter note title"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                placeholder="enter notes content"
                value={noteItem.content}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            <div className="button-group">
              <button onClick={() => handleSubmit()}>Save</button>
              <button>Reset</button>
            </div>
          </div>
        )}
        <div className="note-list">
          <div className="note-item">
            <h3>title</h3>
            <p>description</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
