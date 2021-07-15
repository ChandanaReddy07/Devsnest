import React, { useState } from "react";
//import Form1 from "./form"

const Card = ({
  value,
  values,
  setValue,
  setValues,
  index,
  handleChange,
  handleChange1,
}) => {
  
  const [isedit, setIsedit] = useState(false);
  return (
    <div className="card1">
      {!isedit ? (
        <div className="card">
          <h1>{value.title}</h1>
          <div>cal measure of this item is {value.cal}</div>
          <button
            className="edit"
            onClick={() => {
              setIsedit(true);
            }}
          >
            edit
          </button>
          <button
            className="del"
            onClick={() => {
              console.log("hell yeh");
              const news = values.filter((el, i) => i !== index);
              setValues(news);
            }}
          >
            dlt
          </button>
        </div>
      ) : (
        <div className="card">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <br/>
            <input
              type="text"
              placeholder={value.title}
              onChange={(e)=>{
                value.title=e.target.value
              }}
            />
            <br/>
            <input
              type="number"
              placeholder={value.cal}
              onChange={(e)=>{
                value.cal=e.target.value
              }}
            />
          </form>
          <button
            className="Done"
            onClick={() => {
              setIsedit(false);
              
          
            }}
          >
            Done
          </button>
          <button
            className="del"
            onClick={() => {
              console.log("hell yeh");
              const news = values.filter((el, i) => i !== index);
              setValues(news);
            }}
          >
            dlt
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
