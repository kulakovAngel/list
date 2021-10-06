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
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
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

    handleDeleteItem(id) {
        this.setState(() => {
            const newItems = this.state.items.filter(item => item.id !== id);
            return ({
                items: newItems,
            });
        });
    }

    render() {
        return (
            <>
                <List items={this.state.items} handleDeleteItem={this.handleDeleteItem} />
                <AddItemForm onSubmit={this.handleSubmitForm} />
            </>
        );
    }
};