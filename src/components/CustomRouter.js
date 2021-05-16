import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from "../page/Home";

const CustomRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path={"/"} exact component={Home}/>
                <Route path={"#technologies"} exact component={Home} />
                <Route path={"#developer"} exact component={Home} />
                <Route path={"#release_date"} exact component={Home} />
                <Route path={"/about"} exact component={Home} />
                <Redirect to={"/"} />
            </Switch>
        </Router>
    );
};

export default CustomRouter;
