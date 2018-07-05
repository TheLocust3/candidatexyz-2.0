import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Fab } from 'candidatexyz-common-js/lib/elements';

class Share extends React.Component {

    constructor(props) {
        super(props);

        this.state = { shown: false };
    }

    componentDidMount() {
        $('.share-sub-buttons').hide();

        $('.share-button').hover(() => {
            $('.share-sub-buttons').fadeIn(250);

            this.setState({
                shown: true
            });
        });

        $('.share-menu').hover(null, () => {
            if (this.state.shown) {
                $('.share-sub-buttons').fadeOut(250);

                this.setState({
                    shown: false
                });
            }
        });
    }

    render() {
        return (
            <div className='share-menu'>
                <Fab className='material-icons share-button' aria-label='Share'>
                    <span className='mdc-fab__icon middle-center'>
                        share
                    </span>
                </Fab>

                <div className='share-sub-buttons'>
                    <Link to={`https://www.facebook.com/sharer/sharer.php?u=${this.props.url}`}>
                        <Fab className='share-sub-button' condensed={true}>
                            <i className='fab fa-facebook-f middle-center' />
                        </Fab>
                    </Link>

                    <Link to={`http://twitter.com/share?text=${this.props.text}&url=${this.props.url}`}>
                        <Fab className='share-sub-button' condensed={true}>
                            <i className='fab fa-twitter middle-center' />
                        </Fab>
                    </Link>
                </div>
            </div>
        )
    }
}

Share.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string
};

export default Share;
