import React, {Component} from 'react';

export class List extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map(item => (
                        <li key={item.id}>{item.content}</li>
                    ))
                }
            </ul>
        );
    }
};