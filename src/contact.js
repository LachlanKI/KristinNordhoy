// website by yuk - yuk.digital - yukenquiries@gmail.com

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
                <a href="https://www.instagram.com/kristinnordhoy/?hl=en" target="_blank">instagram</a>
            </address>
        )
    }
}
