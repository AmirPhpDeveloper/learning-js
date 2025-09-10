import {
spinnerSearchEl,
spinnerJobDetailsEl
} from '../common.js';

const renderSpinner = wichSpinner => {
    const spinnerEL = wichSpinner === 'search' ? spinnerSearchEl : spinnerJobDetailsEl;
    spinnerEL.classList.toggle('spinner--visible');
}

export default renderSpinner;