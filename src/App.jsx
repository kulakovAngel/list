import React, {Component} from 'react';
import {AddItemForm} from './components/AddItemForm';
import {List} from './components/List';

export class App extends Component {
    render() {
        return (
            <>
                <List />
                <AddItemForm />
            </>
        );
    }
};