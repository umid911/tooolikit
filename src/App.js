import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteTodo } from "./store/userSlice";


function App() {
  const [value, setValue] = useState('')

  const state = useSelector(state => state.users)
  const dispatch = useDispatch()

  console.log(state);

  const addUsers = () => {
    dispatch(addUser(value))
    setValue('')
  }

  const deleteTodos = () => {
    dispatch(deleteTodo())
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="App">
      <div className="box">
        <input value={value} onChange={handleChange} type="text" />
        <button onClick={addUsers}>Добавить</button>
        <button onClick={deleteTodos 
        
        }>Удалить последний</button>
        <div>
          {state.map(user => (
            <p>{user}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
