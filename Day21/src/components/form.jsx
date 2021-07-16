const Form1 = ({ handleChange, handleChange1,value }) => {
  return (  
    <div className="form1">
      <form 
      onSubmit={(e) => {
        e.preventDefault();
        handleChange1();
      }}
    >
        <input
          type="text"
          placeholder="enter Item"
          onChange={handleChange("title")}
          value={value.title}
          required
        />
       &nbsp;
        <input
          type="number"
          placeholder="enter calories"
          onChange={handleChange("cal")}
          value={value.cal}
          required
        />
        <br/>
        <button type="submit">Add</button>
      </form>
      </div>
 
  );
};

export default Form1;
