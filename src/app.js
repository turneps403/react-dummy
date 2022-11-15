import { useState } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

function copyTextToClipboard(text) {
    //Create a textbox field where we can insert text to. 
    var copyFrom = document.createElement("textarea");
  
    //Set the text content to be the text you wished to copy.
    copyFrom.textContent = text;
  
    //Append the textbox field into the body as a child. 
    //"execCommand()" only works when there exists selected text, and the text is inside 
    //document.body (meaning the text is part of a valid rendered HTML element).
    document.body.appendChild(copyFrom);
  
    //Select all the text!
    copyFrom.select();
  
    //Execute command
    document.execCommand('copy');
  
    //(Optional) De-select the text using blur(). 
    copyFrom.blur();
  
    //Remove the textbox field from the document.body, so no other JavaScript nor 
    //other elements can get access to this.
    document.body.removeChild(copyFrom);
  }

class InputForm extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.show = this.show.bind(this);
    //   // this.updateInputValue = this.updateInputValue.bind(this);
    //   this.state = {
    //     inputValue: ""
    //   };
    // }
  
    show() {
      // e.preventDefault();
      // alert("foo");
      //copyTextToClipboard(Math.ceil(Math.random()*100) + "_foo");
      navigator.clipboard.writeText(Math.ceil(Math.random()*100) + "_baz");
    }
    render() {
      return (
        <div>
          <h1>Input from</h1>
          <button onClick={this.show}>Foo</button>
        </div>
      );
    }
}

function App() {
    return (
        <>
            <Counter/>
            <InputForm/>
        </>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);