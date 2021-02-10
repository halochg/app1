import React, { useState } from "react";
function NameForm(props) {
    const [name, setName] = useState("");
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }
    return (
      <form onSubmit={handleSubmit}>
        <p>test git...2222</p>
        <label>
          Frirst Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  //commit 1
  export {NameForm}