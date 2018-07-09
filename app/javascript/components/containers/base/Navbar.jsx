import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MDCTemporaryDrawer } from '@material/drawer';

import { MAX_MOBILE_WIDTH } from '../../../constants';
import { setNavbarType, TRANSPARENT, DEFAULT } from '../../actions/global-actions';

import TextContent from '../content/TextContent';
import ImageContent from '../content/ImageContent';
import LinkContent from '../content/LinkContent';
import ButtonLinkContent from '../content/ButtonLinkContent';

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lastRenderedWidth: $(document).width(), lastScrollY: 0 };
    }

    updateDimensions() {
        let width = $(document).width();
        if ((this.state.lastRenderedWidth > MAX_MOBILE_WIDTH && width < MAX_MOBILE_WIDTH) || (this.state.lastRenderedWidth < MAX_MOBILE_WIDTH && width > MAX_MOBILE_WIDTH)) {
            this.setState({
                lastRenderedWidth: width
            });

            this.forceUpdate();
        }
    }

    updateTransparent(event) {
        let currentY = $(window).scrollTop();
        if (this.props.navbarType != TRANSPARENT && currentY <= 0) {
            this.props.dispatch(setNavbarType(TRANSPARENT));

            this.setState({
                lastScrollY: $(window).scrollTop()
            });

            return;
        }

        if (this.props.navbarType != TRANSPARENT || currentY <= 0) return;
    
        if (currentY - this.state.lastScrollY > 0) {
            this.props.dispatch(setNavbarType(DEFAULT));
        }

        this.setState({
            lastScrollY: $(window).scrollTop()
        });
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.updateDimensions());
        window.addEventListener('mousewheel', (event) => this.updateTransparent(event));
    }

    onMenuClick() {
        event.preventDefault()

        let drawer = new MDCTemporaryDrawer(document.querySelector('#mobile-navbar'));
        drawer.open = true;
    }

    onLinkClick() {
        let drawer = new MDCTemporaryDrawer(document.querySelector('#mobile-navbar'));
        drawer.open = false;
    }

    renderDeskop() {
        let transparentClassName = this.props.navbarType == TRANSPARENT ? 'navbar--transparent' : '';

        return (
            <div>
                <header className={`mdc-toolbar mdc-toolbar--fixed navbar ${transparentClassName}`}>
                    <div className='mdc-toolbar__row'>
                        <section className='mdc-toolbar__section mdc-toolbar__section--align-start relative'>
                            <div style={{ marginLeft: '1vw' }}>
                                <Link to='/'><ImageContent identifier='logo' className='navbar-image middle' /></Link>
                            </div>

                             <div className='navbar-link-holder'>
                                <LinkContent identifier='navLink1' type='headline6' className='navbar-link' textClassName='navbar-link-text' />
                                <LinkContent identifier='navLink2' type='headline6' className='navbar-link' textClassName='navbar-link-text' />
                                <LinkContent identifier='navLink3' type='headline6' className='navbar-link' textClassName='navbar-link-text' />
                            </div>
                        </section>

                        <section className='mdc-toolbar__section mdc-toolbar__section--align-end'>
                            <ButtonLinkContent identifier='navButton1' type='headline6' className='navbar-link' textClassName='navbar-link-text' buttonClassName='navbar-button navbar-button-blue' />
                            <ButtonLinkContent identifier='navButton2' type='headline6' className='navbar-link' textClassName='navbar-link-text' buttonClassName='navbar-button navbar-button-red' />
                        </section>
                    </div>
                </header>
            </div>
        );
    }

    renderMobile() {
        return (
            <div>
                <header className='mdc-toolbar mdc-toolbar--fixed navbar'>
                    <div className='mdc-toolbar__row'>
                        <section className='mdc-toolbar__section mdc-toolbar__section--align-start relative'>
                            <div style={{ marginLeft: '1vw' }}>
                                <Link to='/'><ImageContent identifier='logo' className='navbar-image middle' /></Link>
                            </div>
                        </section>

                        <section className='mdc-toolbar__section mdc-toolbar__section--align-end'>
                            <Link to='#' className='material-icons mdc-toolbar__menu-icon navbar-menu-icon' onClick={this.onMenuClick.bind(this)}>menu</Link>
                        </section>
                    </div>
                </header>

                <aside className='mdc-drawer mdc-drawer--temporary' id='mobile-navbar'>
                    <nav className='mdc-drawer__drawer'>
                        <header className='mdc-drawer__header'>
                            <div className='mdc-drawer__header-content mdc-theme--text-primary-on-primary mdc-theme--primary-bg'>
                                <TextContent identifier='websiteTitle' style={{ color: 'white' }} />
                            </div>
                        </header>

                        <nav className='mdc-drawer__content mdc-list-group'>
                            <div className='mdc-list'>
                                <LinkContent identifier='navLink1' className='mdc-list-item' onClick={this.onLinkClick.bind(this)} />
                                <LinkContent identifier='navLink2' className='mdc-list-item' onClick={this.onLinkClick.bind(this)} />
                                <LinkContent identifier='navLink3' className='mdc-list-item' onClick={this.onLinkClick.bind(this)} />
                                <br />

                                <ButtonLinkContent identifier='navButton1' type='headline6' className='navbar-link' textClassName='navbar-link-text' buttonClassName='navbar-button navbar-button-blue' />
                                <br /><br />
                                <ButtonLinkContent identifier='navButton2' type='headline6' className='navbar-link' textClassName='navbar-link-text' buttonClassName='navbar-button navbar-button-red' />
                            </div>
                        </nav>
                    </nav>
                </aside>
            </div>
        )
    }

    render() {
        if (this.props.fullscreen) return null;

        if (this.state.lastRenderedWidth < MAX_MOBILE_WIDTH) {
            return this.renderMobile();
        } else {
            return this.renderDeskop();
        }
    }
}

function mapStateToProps(state) {
    return {
        navbarType: state.global.navbarType
    };
}

export default connect(mapStateToProps)(Navbar);
