// website by yuk - www.yuk.digital - yukenquiries@gmail.com

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
    componentDidMount() {
        if (navigator.vendor.indexOf('Apple Computer') !== -1 && navigator.userAgent.indexOf('iPhone') == -1) {
            if (navigator.userAgent.indexOf('iPad') !== -1) {
                this.refs.carouselWrap.classList.remove('carousel-wrap');
                this.refs.carouselWrap.classList.add('iPad-safari-carousel-wrap');
                this.refs.carousel.classList.remove('carousel');
                this.refs.carousel.classList.add('iPad-safari-carousel');
            } else {
                this.refs.carouselWrap.classList.remove('carousel-wrap');
                this.refs.carousel.classList.remove('carousel');
                this.refs.carousel.classList.add('safari-carousel');
            }
        }
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
            if (this.state.loadCounter == 2) {
                this.refs.loader.style.display = 'none';
                this.startCarousel();
            }
        });
    }
    render() {
        return (
            <div ref='carouselWrap' className='carousel-wrap'>
                <div ref='carousel' className='carousel'>
                    <p id='loader' ref='loader'>loading...</p>
                    <a className="not caro-anchor" ref='a1' href="https://s3.amazonaws.com/kristinnordhoy/carousel/1.jpg" target="_blank">
                        <img ref='1' className='currImg caro-hide' onLoad={this.handleLoad.bind(this)} src="https://s3.amazonaws.com/kristinnordhoy/carousel/1.jpg"/>
                    </a>
                    <a className="not caro-anchor" ref='a2' href="https://s3.amazonaws.com/kristinnordhoy/carousel/2.jpg" target="_blank">
                        <img ref='2' className='currImg caro-hide' onLoad={this.handleLoad.bind(this)} src="https://s3.amazonaws.com/kristinnordhoy/carousel/2.jpg"/>
                    </a>
                    <a className="not caro-anchor" ref='a3' href="https://s3.amazonaws.com/kristinnordhoy/carousel/3.jpg" target="_blank">
                        <img ref='3' className='currImg caro-hide' src="https://s3.amazonaws.com/kristinnordhoy/carousel/3.jpg" alt="not_loaded" />
                    </a>
                    <a className="not caro-anchor" ref='a4' href="https://s3.amazonaws.com/kristinnordhoy/carousel/4.jpg" target="_blank">
                        <img ref='4' className='currImg caro-hide' src="https://s3.amazonaws.com/kristinnordhoy/carousel/4.jpg" alt="not_loaded" />
                    </a>
                    <a className="not caro-anchor" ref='a5' href="https://s3.amazonaws.com/kristinnordhoy/carousel/5.jpg" target="_blank">
                        <img ref='5' className='currImg caro-hide' src="https://s3.amazonaws.com/kristinnordhoy/carousel/5.jpg" alt="not_loaded" />
                    </a>
                    <a className="not caro-anchor" ref='a6' href="https://s3.amazonaws.com/kristinnordhoy/carousel/6.jpg" target="_blank">
                        <img ref='6' className='currImg caro-hide' src="https://s3.amazonaws.com/kristinnordhoy/carousel/6.jpg" alt="not_loaded" />
                    </a>
                    <a className="not caro-anchor" ref='a7' href="https://s3.amazonaws.com/kristinnordhoy/carousel/7.jpg" target="_blank">
                        <img ref='7' className='currImg caro-hide' src="https://s3.amazonaws.com/kristinnordhoy/carousel/7.jpg" alt="not_loaded" />
                    </a>
                    <a className="not caro-anchor" ref='a8' href="https://s3.amazonaws.com/kristinnordhoy/carousel/8.jpg" target="_blank">
                        <img ref='8' className='currImg caro-hide' src="https://s3.amazonaws.com/kristinnordhoy/carousel/8.jpg" alt="not_loaded" />
                    </a>
                </div>
            </div>
        )
    }
}
