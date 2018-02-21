// bigger in japan - biggerjapan@gmail.com

import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleScroll() {
        this.refs.c.scrollTo(0,0);
    }
    render() {
        return (
            <div id='app'>
                <header>
                    <Link id='head-h1' to='/'><h1>Kristin Nordhøy</h1></Link>
                    <nav>
                        <Link onClick={() => this.handleScroll()} to='/works'>works</Link>
                        <Link onClick={() => this.handleScroll()} to='/about'>about</Link>
                        <Link onClick={() => this.handleScroll()} to='/exhibitions'>exhibitions</Link>
                        <Link onClick={() => this.handleScroll()} to='/contact'>contact</Link>
                    </nav>
                </header>
                <div id='content-wrap'>
                    <div ref='c' id='content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
