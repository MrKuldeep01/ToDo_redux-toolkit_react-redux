# 😅👩‍💻🐞 Todo App with React, Redux, and Redux Toolkit

This project is a simple Todo application built using React, Redux, and Redux Toolkit. The application allows you to add and remove todos.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Concepts](#concepts)
  - [Store](#store)
  - [Reducer](#reducer)
  - [useSelector](#useselector)
  - [useDispatch](#usedispatch)
  - [Slices](#slices)
- [Functionality](#functionality)
  - [Add Todo](#add-todo)
  - [Remove Todo](#remove-todo)

## Introduction

This application demonstrates the basic usage of React with Redux and Redux Toolkit. Redux Toolkit simplifies the process of writing Redux logic and reduces boilerplate code.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MrKuldeep01/ToDo_redux-toolkit_react-redux.git
cd ToDo_redux-toolkit_react-redux
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Usage

Open your browser and navigate to `http://localhost:5173` to see the Todo application in action. You can add new todos and remove existing ones.

## Concepts

### Store

The **store** is an object that brings together the state, actions, and reducers that make up your application. The store is created using the `configureStore` function provided by Redux Toolkit.

### Reducer

A **reducer** is a function that receives the current state and an action object and decides how to update the state if necessary. In Redux Toolkit, reducers are often created using the `createSlice` function, which generates action creators and action types automatically.

### useSelector

The **useSelector** hook allows you to extract data from the Redux store state using a selector function. It subscribes to the Redux store, and any time an action is dispatched, it will run the selector function again and return the new result if it differs from the previous one.

### useDispatch

The **useDispatch** hook returns a reference to the dispatch function from the Redux store. You can use it to dispatch actions as needed.

### Slices

A **slice** is a collection of Redux reducer logic and actions for a single feature in your app. A slice is created using the `createSlice` function provided by Redux Toolkit. It combines the reducer logic, action creators, and action types.

## Functionality

### Add Todo

To add a todo, use the `addTodo` action. This action takes a todo object and adds it to the list of todos in the state.

Example usage in a component:

```jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../featurs/todo/todoSlice";

const AddTodo = () => {

  const [text, setText] = useState("");
  const dispatch = useDispatch();
  // dispatch : reducer ka use kr k store me change krta he
  const addTodoHandler = (e) => {
    e.preventDefault();
    if(text == ''){
      alert('please fill the description, to move further!')
    }
    else{
      dispatch(addTodo(text))
      setText("")
    }
  };
  return (
    <form onSubmit={addTodoHandler} className="flex-col w-full h-[25vh] flex justify-center items-start relative border-slate-700/10 border-2 rounded gap-4">
      <textarea 
        type="text"
        className="w-full p-2 bg-white/30 h-full
        outline-gray-400 resize-none font-extralight"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="description for your todo"

      />
      <button type="submit" className="absolute bottom-1 right-1 px-2 py-1 bg-blue-500 text-lg text-white outline-2 outline-slate-600 rounded">Submit</button>
    </form>
  );
};

export default AddTodo;
```

### Remove Todo

To remove a todo, use the `removeTodo` action. This action takes the id of the todo to be removed from the state.

Example usage in a component:

```jsx
import { useSelector, useDispatch } from "react-redux";
import { removeTodo} from "../featurs/todo/todoSlice";

const Todos = () => {
  // useSelector have access of state by default
  const todoArray = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="ListingTodo min-h-[70vh] w-full flex-col justify-center item-center gap-3 bg-slate-700/30 my-4 p-3 rounded-sm">
      <ul>
        {todoArray.map((todo) => (
          <li
            key={todo.id}
            className="px-3 py-2 my-2 w-full rounded bg-slate-700/60 text-white sm:flex justify-between item-center relative"
          >
            <span className="text-lg font-semibold max-w-1/2 h-auto">
              {todo.desc}
            </span>

            <button
            title="Delete task"
              className="bg-red-600/80 text-white py-1 px-2 rounded "
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
```

## Example Slice

Here is an example of how to create a slice using Redux Toolkit for managing todos:

```jsx
// todoSlice.js
import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      desc: "hello todo again@!",
      createdAt: Date.now(),
    },
  ],
};

// state : current state for variable
// action : passed values to us
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        desc: action.payload,
      };
      state.todos.unshift(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
      const id = action.payload.id;
      state.todos.map((todo) =>
        todo.id === id ? (todo.desc = action.payload.desc) : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

```

## Store Configuration

Configure the Redux store using the `configureStore` function:

```jsx
// store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../featurs/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
```

## Connecting the Store to the App

Wrap your application with the `Provider` component to make the Redux store available to your app:

```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

That's it! You now have a working Todo application using React, Redux, and Redux Toolkit.
### This is all about i have learned by lacture, which is directed by
## `Hites sir` from Chai aur Code YouTube channel.
# Big Thanks 😅☕👨‍💻