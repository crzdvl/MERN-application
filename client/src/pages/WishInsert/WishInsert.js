import React, { Component } from 'react';

import api from '../../api';
import styles from './WishInsert.module.css';

class WishInsert extends Component {
    state = {
        title: '',
        description: '',
    }

    handleChangeTitle = async event => {
        this.setState({ title : event.target.value });
    }

    handleChangeDescription = async event => {
        this.setState({ description : event.target.value });
    }

    handleIncludeWish = async () => {
        const { title, description } = this.state;
        const payload = { title, description };
        console.log(payload, 'payload');

        await api.insertWish(payload).then(res => {
            console.log(res);
            this.setState({
                title: '',
                description: ''
            });
        });
        window.location.assign('http://localhost:8000/');
    }

    render() {
        const containerClasses = [styles.container];
        const containerItemsClasses = [styles.container__items];
        const ItemClass = [styles.container__item];
        const InputFormClasses = [styles.inputs];
        const buttonFormClasses = [styles.button];

        return (
            <div className={containerClasses}>
                <div className={containerItemsClasses}>
                    <div className={ItemClass}>
                        <h2>Add Wish:</h2>
                        <h3>Title:</h3>
                        <input 
                            className={InputFormClasses}
                            type="text"
                            value={this.state.title}
                            onChange={this.handleChangeTitle}
                        />
                        <h3>Description:</h3>
                        <textarea
                            className={InputFormClasses}
                            type="text"
                            value={this.state.description}
                            onChange={this.handleChangeDescription}
                        ></textarea>
                        <button 
                            className={buttonFormClasses}
                            onClick={this.handleIncludeWish}>
                        Add Wish
                        </button>
                        <a href={'/'}>
                            Cancel
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default WishInsert;
