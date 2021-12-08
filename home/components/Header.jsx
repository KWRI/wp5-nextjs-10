import { useState } from 'react';

const Header = (props ) => {

  let handleSubmit = props.handleSubmit;

  if(!props.handleSubmit) {
    handleSubmit = (event) => {
      event.preventDefault()
      const data = new FormData(event.target);
      alert(`from home component: ${data.get('search')}`)
    }
  }

  return (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
        width: "100%",
        padding: "1em",
      }}
    >
      <h1>{props.title || "Header"}</h1>
      <form id="myForm" onSubmit={handleSubmit}>
        <input type="text" name="search"/>
        <input type="submit"/>
      </form>
    </div>
  )
};

export default Header;
