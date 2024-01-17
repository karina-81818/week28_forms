import { useState } from "react";
import './Form.scss'

function Form() {
  const [input, setInput] = useState('')
  const [submit, setSubmit] = useState('')
      
       const handleChange=(e)=>{
        setInput(e.target.value)
       }
  
        const handleSubmit=(e)=>{
          e.preventDefault()
          setSubmit(input)
          setInput('')
        }
    
      return (
        <div>
        <form  onClick={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={handleChange}
            />
          <button
          type="submit">submit</button>
        </form>
          <h3>{submit.toUpperCase()}</h3>
        </div>
      );
}

export default Form;