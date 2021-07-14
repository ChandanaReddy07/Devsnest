const Form1 = ({ handleChange, handleChange1 }) => {
  return (
   
      <form>
        <input
          type="text"
          placeholder="enter name"
          onChange={handleChange("title")}
          required
        />
        <br />
        <input
          type="number"
          placeholder="enter calories"
          onChange={handleChange("cal")}
          required
        />
        <input type="submit" placeholder="Add" onClick={handleChange1} />

       
      </form>
 
  );
};

export default Form1;
