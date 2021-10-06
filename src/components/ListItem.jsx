import React, { PureComponent } from 'react';

export class ListItem extends PureComponent {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.item.id);
    }

    // shouldComponentUpdate(nextProps) {
    //     if (this.props.item.content === nextProps.item.content) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    render() {
        console.log('Render ListItem', this.props.item.content)
        return (
            <li>
                {this.props.item.content}
                <button onClick={this.handleDelete}>
                    -
                </button>
            </li>
        )
    }
};