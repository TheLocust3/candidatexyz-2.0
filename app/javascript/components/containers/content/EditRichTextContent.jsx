import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { setDocumentTitle } from '../../actions/global-actions';
import { fetchContent, setEditingContent } from '../../actions/content-actions';

import RichTextContentForm from '../../components/content/RichTextContentForm';

class EditRichTextContent extends React.Component {

    componentWillMount() {
        this.props.dispatch(setDocumentTitle('Edit Content'));

        if (_.isEmpty(this.findContent().identifier)) {
            this.props.dispatch(fetchContent(this.props.match.params.identifier));
        }
    }

    findContent() {
        let content = _.find(this.props.contents, { identifier: this.props.match.params.identifier });

        if (_.isEmpty(content)) {
            return { content: {} }
        }

        return content;
    }

    render() {
        let content = this.findContent();
        if (_.isEmpty(content.identifier)) return null;

        return (
            <div className='content'>
                <Text type='headline2'>Edit Content</Text>
                <br />

                <RichTextContentForm content={content} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        contents: state.content.contents
    };
}

export default connect(mapStateToProps)(EditRichTextContent);
