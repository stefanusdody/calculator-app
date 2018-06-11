import React from 'react';
import { Switch, Route  } from "react-router-dom";
import Calculator from "../pages/calculator";
import Login from "../pages/login";
import Register from "../pages/register"

const Main = () => (
    <main>
        <Switch>
             <Route exact path="/login" component={Login} />
             <Route exact path="/calculator" component={Calculator}/>
             <Route exact path="/register" component={Register}/>
         </Switch>
    </main>
  )
export default Main;
