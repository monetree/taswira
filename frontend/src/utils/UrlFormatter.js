import * as constants from './Constants'

const FormatUrl = (url) => {
    let python_url = constants.URL;
    return python_url + url
}

export default FormatUrl
