import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import { template } from "@babel/core";
import Calendar from "./Calendar";
import EventForm from "./eventForm";


function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Homme</Link>
                        </li>
                        <li>
                            <Link to="/Form/">Form</Link>
                        </li>
                        <li>
                            <Link to='/calendar/'>Calendar</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/calendar/" exact component={Calendar}></Route>
                <Route path="/Form/" exact component={EventForm}></Route>

            </div>
        </Router>
    );
}

export default AppRouter;
