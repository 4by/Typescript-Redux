import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import {Provider} from "react-redux";
import {store} from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <UserList/>
            <hr/>
            <TodoList/>
        </Provider>
    );
};

export default App;
