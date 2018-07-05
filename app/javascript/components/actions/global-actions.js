import ContentApi from '../../api/content-api';

export const SET_DOCUMENT_TITLE = 'SET_DOCUMENT_TITLE';
export const STORE_WEBSITE_TITLE = 'STORE_WEBSITE_TITLE';

export function setDocumentTitle(title) {
    return {
        type: SET_DOCUMENT_TITLE,
        data: title
    }
}

export function storeWebsiteTitle(websiteTitle) {
    return {
        type: STORE_WEBSITE_TITLE,
        data: websiteTitle
    }
}

export function fetchWebsiteTitle() {
    return function (dispatch) {
        ContentApi.get('websiteTitle').then( data => {
            dispatch(storeWebsiteTitle(data.content.text));
        });
    }
}
