import React from 'react';
import { connect } from 'react-redux';
import { Text, Button, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { setDocumentTitle } from '../../actions/global-actions';
import { history } from '../../../constants';
import ContentApi from '../../../api/content-api';

import RawContentInlineEditor from '../../components/content/RawContentInlineEditor';

class EditRawContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isReady: false, websiteTitle: {} };
    }

    componentWillMount() {
        ContentApi.get('websiteTitle').then((websiteTitle) => {
            this.setState({
                isReady: true,
                websiteTitle: websiteTitle
            });
        });
    }

    onCampaignIdRefresh() {
        ContentApi.refreshCampaignId().then(() => {
            history.push('/');
        });
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Edit Content'));
    }

    render() {
        if (!this.state.isReady) return null;

        return (
            <div className='content edit-raw-content'>
                <Text type='headline2'>Edit Other Content</Text><br />

                <RawContentInlineEditor content={this.state.websiteTitle} />
                <br /><br />

                <Button onClick={this.onCampaignIdRefresh.bind(this)}>
                    Refresh Campaign ID
                </Button>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(EditRawContent);
