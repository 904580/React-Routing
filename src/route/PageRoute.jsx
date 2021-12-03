import React from 'react';
import { Switch,Route} from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import News from '../pages/News';

const PageRoute = () => {
    return (
        <Switch>
            <Route path="/news" exact>
                <News />
            </Route>
            <Route path="/contact" exact>
                <Contact/>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );

};

export default PageRoute;
