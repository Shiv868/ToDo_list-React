import './App.css';
import React,{useState} from "react";


    function App() {
        const [todos, setTodos] = useState([])
        const [inputValue, setInputValue] = useState('')
      
      function handleChange(e){
        setInputValue(e.target.value)
      }
      
      function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')
      }

      const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
            
      return (
        <div className="container">
           <center> <h1 className="heading">Todo List</h1></center>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Enter a new todo"
                />
                <button className="button">Add Todo</button>
            </form>
            <ul className="list">
                {todos.map((todo, index) => (
                    <li className="item" key={index}>
                        <span className="text">{todo}</span>
                        <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App ;
