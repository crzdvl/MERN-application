import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import ItemContainer from '../components/ItemContainer/ItemContainer';

import WishUpdate from '../pages/WishUpdate/WishUpdate';
import WishInsert from '../pages/WishInsert/WishInsert';

import './app.css';

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={ItemContainer} />
            <Route path="/create" exact component={WishInsert} />
            <Route
                path="/update/:id"
                exact
                component={WishUpdate}
            />
        </Switch>
    </Router>
);

export default App;