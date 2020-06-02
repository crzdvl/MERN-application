import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../api';
import styles from './WishUpdate.module.css';

class WishUpdate extends Component {
    state = {
        id: this.props.match.params.id,
        title: '',
        description: '',
    }

    handleChangeTitle = async event => {
        this.setState({ title : event.target.value });
    }

    handleChangeDescription = async event => {
        this.setState({ description : event.target.value });
    }

    handleUpdateWish = async () => {
        const { id, title, description } = this.state;
        const payload = { title, description };
        console.log(payload, 'payload');

        await api.updateWishById(id, payload).then(res => {
            console.log(res);
            this.setState({
                title: '',
                description: ''
            });
        });
        window.location.assign('http://localhost:8000/');
    }

    componentDidMount = async () => {
        const { id } = this.state;
        const wish = await api.getWishById(id);

        this.setState({
            title: wish.data.data[0].title,
            description: wish.data.data[0].description,
        });
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
                        <h2>Update Movie</h2>
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
                            onClick={this.handleUpdateWish}>
                            Update Wish
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

WishUpdate.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }),
};

export default WishUpdate;
