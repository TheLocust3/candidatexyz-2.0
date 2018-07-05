import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { ImageApi } from 'candidatexyz-common-js';
import { Button } from 'candidatexyz-common-js/lib/elements';

import { uuid } from '../../../helpers';

class ImageUploader extends React.Component {

    handleImageUpload(event) {
        let identifier = uuid();
        ImageApi.create(identifier, event.target.files[0]).then((response) => {
            this.props.handleUpload(response.url);
        });
    }

    onClick(event) {
        event.preventDefault();

        $('#image-uploader').click();
    }

    render() {
        let { handleUpload, styleOuter, text, ...props } = this.props;

        let buttonText = _.isEmpty(text) ? 'Upload' : text;

        return (
            <div style={styleOuter}>
                <input type='file' accept='image/*' id='image-uploader' onChange={this.handleImageUpload.bind(this)} style={{ display: 'none' }} />

                <Button onClick={this.onClick.bind(this)} {...props}>{buttonText}</Button>
            </div>
        );
    }
}

ImageUploader.propTypes = {
    handleUpload: PropTypes.func.isRequired,
    styleOuter: PropTypes.object,
    text: PropTypes.string,
};

export default ImageUploader;
