import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo({ editFormVisibility, editTodo, cancelUpdate }) {
    const [input, setInput] = useState('');
    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        setEditValue(editTodo.text || '')
    }, [editTodo])

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(!input) return
        dispatch(addTodo(input));
        setInput('')
    }

    const editSubmit = (e) => {
        e.preventDefault();
        dispatch(updateTodo({id: editTodo.id, newText: editValue}));
        setEditValue('')
        cancelUpdate()
    }

    return (
        <>
            {editFormVisibility === false ? (
                <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
                    <input
                        type="text"
                        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter a Todo..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-[125px] text-white bg-indigo-500 border-0 py-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        Add Todo
                    </button>
                </form>
            ) : (
                <form onSubmit={editSubmit} className="space-x-3 mt-12">
                    <input
                        type="text"
                        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter a Todo..."
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-[125px] text-white bg-indigo-500 border-0 py-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        Update
                    </button>
                    <button
                        type="submit"
                        className="w-[85px] text-white bg-indigo-500 border-0 py-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        onClick={() => cancelUpdate()}
                    >
                        Back
                    </button>
                </form>
            )}
        </>
    );
}

export default AddTodo;