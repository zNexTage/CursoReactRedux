import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,

} from "react-router-dom";
import App from "../App";
import About from "../Components/About";
import Todo from "../Components/Todo";


const RoutesConfiguration = () => {
    return (
        <Routes>
            <Route
                path='/todos'
                element={<Todo />} />

            <Route
                path='/about'
                element={<About />} />

            <Route
                path="*"
                element={<Todo />}
            />
        </Routes>

    )
}

export default RoutesConfiguration;
