import React, { Component } from 'react';
import { ListItem } from './ListItem';

export class List extends Component {
    render() {
        // if (!this.props.items.length) {
        //     // return null;
        //     return 'No items';
        // }
        return (
            !this.props.items.length ? (
                <h2>No items</h2>
            ) : (
                <ul>
                    {
                        this.props.items.map(item => (
                            <ListItem
                                key={item.id}
                                item={item}
                                onDelete={this.props.handleDeleteItem}
                            />
                        ))
                    }
                </ul>
            )
        );
    }
};