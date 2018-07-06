import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Text } from 'candidatexyz-common-js/lib/elements';

import { fetchContent, setEditingContent } from '../../actions/content-actions';

class SimpleLinkContent extends React.Component {

    componentWillMount() {
        if (_.isEmpty(this.findContent().identifier)) {
            this.props.dispatch(fetchContent(this.props.identifier));
        }
    }

    findContent() {
        let content = _.find(this.props.contents, { identifier: this.props.identifier })

        if (_.isEmpty(content)) {
            return { content: { url: '' } }
        }

        return content;
    }

    onEditContent(event) {
        if (!this.props.edit) return;

        event.stopPropagation();
        event.preventDefault();

        this.props.dispatch(setEditingContent(this.findContent()));
    }

    render() {
        let { identifier, type, textClassName, contents, edit, dispatch, editOverlayOpen, isReady, ...props } = this.props;
        let content = this.findContent();
        type = _.isEmpty(type) ? 'body1' : type;
        textClassName = _.isEmpty(textClassName) ? '' : textClassName;

        return (
            <span id={identifier}>
                <Link to={content.content.url} onClick={this.onEditContent.bind(this)} {...props}>
                    <Text type={type} className={textClassName}>{content.content.text}</Text>
                </Link>
            </span>
        );
    }
}

SimpleLinkContent.propTypes = {
    identifier: PropTypes.string.isRequired,
    type: PropTypes.string,
    textClassName: PropTypes.string
};

function mapStateToProps(state) {
    return {
        contents: state.content.contents,
        edit: state.content.edit,
        editOverlayOpen: state.content.editOverlayOpen, // forces content to update whenever the edit dialog closes
        isReady: state.content.isReady // same as above
    };
}

export default connect(mapStateToProps)(SimpleLinkContent);
