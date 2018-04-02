// website by yuk - www.yuk.digital - yukenquiries@gmail.com

import React from 'react';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <address>
                <a href="mailto:nordhoy@gmail.com?Subject=hello" target="_top">nordhoy@gmail.com</a>
                <p>+47 959 77 386</p>
                <a id="insta" href="https://www.instagram.com/kristinnordhoy/?hl=en" target="_blank">instagram</a>
                <a id="yuk" href="http://yuk.digital" target="_blank">website by yuk</a>
            </address>
        )
    }
}
