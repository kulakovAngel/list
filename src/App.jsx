import React, {Component} from 'react';
import { v4 as uuid } from 'uuid';

import {AddItemForm} from './components/AddItemForm';
import {List} from './components/List';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        this.addItemToList = this.addItemToList.bind(this);
        this.createNewItem = this.createNewItem.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    createNewItem(str) {
        return ({
            id: uuid(),
            content: str,
        });
    }

    addItemToList(newItem) {
        this.setState(prevState => {
            const items = [...prevState.items];
            items.push(newItem);
            return {items};
        });
    }

    handleSubmitForm(str) {
        const newItem = this.createNewItem(str);
        this.addItemToList(newItem);
    }

    render() {
        return (
            <>
                <List items={this.state.items} />
                <AddItemForm onSubmit={this.handleSubmitForm} />
            </>
        );
    }
};