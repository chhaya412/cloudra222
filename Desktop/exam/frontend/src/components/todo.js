
import React ,{useState} from "react";

function Todo(){
    const [todos,setTodos] = useState([]);
    const [inputValue,setInputValue] = useState("");
     
    const addTodo = () => {
        if(inputValue.trim() !== ""){
            setTodos([...todos,inputValue]);
            setInputValue("");
        }
    };
    const removeTodo = (index) => {
        const newTodos = todos.filter((_,i) => i !== index);
        setTodos(newTodos);
    };
    return(
        <div>
            <h1>Todo List</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todo;