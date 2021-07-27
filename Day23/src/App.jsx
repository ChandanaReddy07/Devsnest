import { useCallback, useState } from 'react';
// Usage
function App() {
    // Call the hook which returns, current value and the toggler function
    const [isTextChanged, setIsTextChanged] = useToggle();
    
    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button style={{backgroundColor:"grey" ,width:"100px",height:"100px",marginTop:"20%"}} onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
        </div>
    );
}
// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false) => {
    // Initialize the state
    const [state, setState] = useState(initialState);
    
    const toggle = useCallback(() => setState(state => !state), []);
    
    return [state, toggle]
}
export default App