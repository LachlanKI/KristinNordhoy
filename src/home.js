// bigger in japan - biggerjapan@gmail.com

import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadCounter: 0,
            caroCounter: 1,
            timeout: false
        };
    }
    startCarousel() {
        this.setState({timeout: false}, () => {
            this.refs[this.state.caroCounter].classList.add('caro-show');
            this.refs[this.state.caroCounter].style.zIndex = 10;
            this.refs['a' + this.state.caroCounter].classList.add('caro-anchor-visible');
            this.props.timer = setTimeout(() => {
                this.setState({timeout: true}, () => {
                    this.refs[this.state.caroCounter].classList.remove('caro-show');
                    this.refs[this.state.caroCounter].style.zIndex = 1;
                    this.refs['a' + this.state.caroCounter].classList.remove('caro-anchor-visible');
                    if (this.state.caroCounter == this.state.loadCounter) {
                        this.setState({caroCounter: 1}, () => {
                            this.startCarousel();
                        })
                    } else {
                        this.setState({caroCounter: this.state.caroCounter += 1}, () => {
                            this.startCarousel();
                        })
                    }
                })
            }, 6000);
        })
    }
    handleLoad() {
        this.setState({loadCounter: this.state.loadCounter += 1}, () => {
            if (this.state.loadCounter == 8) {
                this.refs.loader.style.display = 'none';
                this.startCarousel();
            }
        });
    }
    render() {
        return (
            <div id='carousel-wrap'>
                <div id='carousel'>
                    <p id='loader' ref='loader'>loading...</p>
                    <a className="not caro-anchor" ref='a1' href="https://s3.amazonaws.com/kristinnordhoy/carousel/1.jpg" target="_blank"><img ref='1' className='currImg caro-hide' onLoad={this.handleLoad.bind(this)} src="https://s3.amazonaws.com/kristinnordhoy/carousel/1.jpg"/></a>
                    <a className="not caro-anchor" ref='a2' href="https://s3.amazonaws.com/kristinnordhoy/carousel/2.jpg" target="_blank"><img ref='2' className='currImg caro-hide' onLoad={this.handleLoad.bind(this)} src="https://s3.amazonaws.com/kristinnordhoy/carousel/2.jpg"/></a>
                    <a className="not caro-anchor" ref='a3' href="https://s3.amazonaws.com/kristinnordhoy/carousel/3.jpg" target="_blank"><img ref='3' className='currImg caro-hide' onLoad={this.handleLoad.bind(this)} src="https://s3.amazonaws.com/kristinnordhoy/carousel/3.jpg"/></a>
                    <a className="not caro-anchor" ref='a4' href="https://s3.amazonaws.com/kristinnordhoy/carousel/4.jpg" target="_blank"><img ref='4' className='currImg caro-hide' onLoad={this.handleLoad.bind(this)} src="https://s3.amazonaws.com/kristinnordhoy/carousel/4.jpg"/></a>
                    <a className="not caro-anchor" ref='a5' href="https://s3.amazonaws.com/kristinnordhoy/carousel/5.jpg" target="_blank"><img ref='5' className='currImg caro-hide' onLoad={this.handleLoad.bind(this)} src="https://s3.amazonaws.com/kristinnordhoy/carousel/5.jpg"/></a>
                    <a className="not caro-anchor" ref='a6' href="https://s3.amazonaws.com/kristinnordhoy/carousel/6.jpg" target="_blank"><img ref='6' className='currImg caro-hide' onLoad={this.handleLoad.bind(this)} src="https://s3.amazonaws.com/kristinnordhoy/carousel/6.jpg"/></a>
                    <a className="not caro-anchor" ref='a7' href="https://s3.amazonaws.com/kristinnordhoy/carousel/7.jpg" target="_blank"><img ref='7' className='currImg caro-hide' onLoad={this.handleLoad.bind(this)} src="https://s3.amazonaws.com/kristinnordhoy/carousel/7.jpg"/></a>
                    <a className="not caro-anchor" ref='a8' href="https://s3.amazonaws.com/kristinnordhoy/carousel/8.jpg" target="_blank"><img ref='8' className='currImg caro-hide' onLoad={this.handleLoad.bind(this)} src="https://s3.amazonaws.com/kristinnordhoy/carousel/8.jpg"/></a>
                </div>
            </div>
        )
    }
}