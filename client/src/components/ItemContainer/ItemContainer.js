import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../api/index';
import styles from './ItemContainer.module.css';

class UpdateWish extends Component {
  updateWish = event => {
      event.preventDefault();

      window.location.href = `/update/${this.props.id}`;
  }

  render() {
      const ButtonClassname = [styles.button];

      return <div className={ButtonClassname} onClick={this.updateWish}>Update</div>;
  }
}

class DeleteWish extends Component {
    deleteWish = async(event) => {

        event.preventDefault();

        console.log(this.props.id);
        await api.deleteWishById(this.props.id);
        window.location.reload();
    }

    render() {
        const ButtonClassname = [styles.button];

        return <div className={ButtonClassname} onClick={this.deleteWish}>Delete</div>;
    }
}


const Wishes = ({ wishes }) => {
    const containerClasses = [styles.container];
    const containerItemsClasses = [styles.container__items];
    const ItemClass = [styles.container__item];

    return(
        <div className={containerClasses}>
            <div className={containerItemsClasses}>
                <a href={'/create'}>
                Create
                </a>
                {wishes.map(({ _id, title, description }) => (
                    <div className={ItemClass} key={_id}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div className={containerItemsClasses}>
                            <DeleteWish id={_id} />
                            <UpdateWish id={_id} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

class WishList extends Component {
    state = {
        wishes: [],
    };
    
      componentDidMount = async () => {
          this.setState({ isLoading: true });

          await api.getAllWishes().then(wishes => {
              this.setState({
                  wishes: wishes.data.data,
              });
          });
      }
    
      render() {
          const { wishes } = this.state;
    
          return wishes.length > 0 ? <Wishes wishes={wishes} /> : null;
      }
}

UpdateWish.propTypes = {
    id: PropTypes.string.isRequired,
};

DeleteWish.propTypes = {
    id: PropTypes.string.isRequired,
};

Wishes.propTypes = {
    wishes: PropTypes.array.isRequired,
};

export default WishList;
