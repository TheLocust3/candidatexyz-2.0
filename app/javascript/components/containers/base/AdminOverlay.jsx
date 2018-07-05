import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Corner, AnchorMargin } from '@material/menu';
import { MDCSnackbar } from '@material/snackbar';
import { MDCMenu } from '@material/menu';
import { UserActions, AuthApi } from 'candidatexyz-common-js';
import { Fab } from 'candidatexyz-common-js/lib/elements';

import { setEdit, popContentHistory } from '../../actions/content-actions';
import { history, APP_DOMAIN } from '../../../constants';

import EditContent from './EditContent'

class AdminOverlay extends React.Component {
    
    componentWillMount() {
        this.props.dispatch(UserActions.fetchCurrentUser());

        history.listen((event) => {
            this.props.dispatch(setEdit(false));
        })
    }

    onEditClick(event) {
        this.props.dispatch(setEdit(true));
        
        const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
        snackbar.show({ message: 'Edit Mode', timeout: 999999999, actionText: 'Done', actionHandler: this.onDoneClick.bind(this) }); // TODO: bit of a hack
    }

    onUndoClick(event) {
        this.props.dispatch(popContentHistory());
    }

    onDoneClick(event) {
        this.props.dispatch(setEdit(false));
    }

    onSettingsClick(event) {
        let menu = new MDCMenu(document.querySelector('#admin-overlay-settings'));
        menu.setAnchorCorner(Corner.BOTTOM_START);
        menu.setAnchorMargin({ top: -25, right: 25 });
        menu.open = !menu.open;
    }

    onLogoutClick(event) {
        AuthApi.signOut().then(() => {
            history.push('/');
            window.location.reload();
        })
    }

    renderEditSnackbar() {
        return (
            <div className='mdc-snackbar' aria-live='assertive' aria-atomic='true' aria-hidden='true'>
                <div className='mdc-snackbar__text'></div>

                <div className='mdc-snackbar__action-wrapper'>
                    <button type='button' className='mdc-snackbar__action-button'></button>
                </div>
            </div>
        )
    }

    renderButtons() {
        if (this.props.edit) {
            return (
                <div>
                    <Fab className='material-icons overlay-action-icon' aria-label='Undo' onClick={this.onUndoClick.bind(this)}>
                        <span className='mdc-fab__icon middle-center'>
                            undo
                        </span>
                    </Fab>
                </div>
            )
        }

        return (
            <div>
                <Fab className='material-icons overlay-action-icon' aria-label='Edit' onClick={this.onEditClick.bind(this)}>
                    <span className='mdc-fab__icon middle-center'>
                        edit
                    </span>
                </Fab>
            </div>
        )
    }

    render() {
        if (!this.props.isReady || _.isEmpty(this.props.user)) return null;

        return (
            <div className='overlay'>
                <EditContent />

                {this.renderEditSnackbar()}

                <div className='overlay-actions-left'>
                    {this.renderButtons()}
                </div>

                <div className='overlay-actions-right'>
                    <Fab className='material-icons overlay-action-icon' aria-label='Settings' onClick={this.onSettingsClick.bind(this)}>
                        <span className='mdc-fab__icon middle-center'>
                            settings
                        </span>
                    </Fab>

                    <div className='mdc-menu-anchor'>
                        <div id='admin-overlay-settings' className='mdc-menu' tabIndex='-1'>
                            <ul className='mdc-menu__items mdc-list' role='menu' aria-hidden='true'>
                                <a href={APP_DOMAIN} className='menu-item-link'>
                                    <li className='mdc-list-item' role='menuitem' tabIndex='0'>
                                        Dashboard
                                    </li>
                                </a>

                                <Link to='/staff/edit-content' className='menu-item-link'>
                                    <li className='mdc-list-item' role='menuitem' tabIndex='0'>
                                        Edit Other Content
                                    </li>
                                </Link>

                                <Link to='/staff/help' className='menu-item-link'>
                                    <li className='mdc-list-item' role='menuitem' tabIndex='0'>
                                        Help
                                    </li>
                                </Link>

                                <li className='mdc-list-item' role='menuitem' tabIndex='0' onClick={this.onLogoutClick.bind(this)}>
                                    Logout
                                </li>
                            </ul>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.users.isCurrentUserReady,
        user: state.users.currentUser,
        edit: state.content.edit,
        contentHistory: state.content.contentHistory
    };
}

export default connect(mapStateToProps)(AdminOverlay);
