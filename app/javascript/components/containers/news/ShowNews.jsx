import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import ShowPost from '../posts/ShowPost'

class ShowNews extends React.Component {

    render() {
        return (
            <div>
                <div className='content content-15'>
                    <Text type='headline5'>News</Text>

                    <ShowPost postType='news' url={this.props.match.params.url} />
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(ShowNews);
