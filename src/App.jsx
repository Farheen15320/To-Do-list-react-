import React, { useState } from 'react';


const App = () => {
    //hooks create 
    const [inputTask, setinputTask] = useState("");
    const [items, setItems] = useState([]);           //  [] -> empty array (currently)


    const taskEvent = (event) => {
        setinputTask(event.target.value);
        // setinputList -> inputList -> li

    };

    //jab button p click hota hai
    const addTask = () => {
        setItems((olditems) => {
            return[...olditems, inputTask]       //it will return the old list of task that is stored in the array using "spread operator"

        });
        setinputTask('');

    };

    const deleteTask = () => {
        console.log('Deleted');
    
        setItems((olditems) => {            
            return[]
           
        });
    }




    return (
        <>
            <div className='main_div'>
                <div className="center_div">
                    <br />
                    <h1 className="heading">To Do List</h1>
                    <br />

                    <input 
                    className="entertext" 
                    type="text" 
                    value={inputTask}
                    placeholder="Add task" 
                    onChange={taskEvent}>
                        {/* jab bhi kuch type krenge to "onChange" call hoga  */}
                    </input>
                    <button onClick={addTask}> + </button>

                    <ul>
                        {/* <li> {inputList} </li> */}

                        {/* array k sath "map" method ka use kr skte hai...
                        using it we are returning the "task" which is stored in the array
                        1 by 1 */}
                        {items.map((itemval) => {
                            return(
                                <>
                                
                                <div className="todo_style">
                                <li><i class="fas fa-times-circle"></i> {itemval} <input className="checkbox" type="checkbox" ></input>
                                <hr /></li> 
                                </div>
                                
                                </>
                                
                            )                    
                        })}
                    </ul>
                    <button className="delete-btn" onClick={deleteTask}>Task completed🗑️</button>
                </div>
            </div>
        </>

    )
};



export default App;