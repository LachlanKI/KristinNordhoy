// website by yuk - yuk.digital - yukenquiries@gmail.com

import React from 'react';
import axios from 'axios';

export default class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            y: 'wp',
            position: 0,
            loading: true
        };
    }
    componentDidMount() {
        let z = {medium: 'wp'};
        axios.post('/medium', z).then(data => {
            this.setState({imageArr:data.data});
            this.refs.wp.style.textDecoration = 'underline';
        })
    }
    handleMedium(x) {
        this.setState({loading: true}, () => {
            this.refs.loader.style.display = 'block';
            this.refs.img.style.display = 'none';
            if (this.state.y != x) {
                this.state.y = x;
                let z = {medium: x};
                axios.post('/medium', z).then(data => {
                    this.setState({imageArr:data.data, position: 0});
                    for (var val in this.refs) {
                        if (val == x) {
                            this.refs[val].style.textDecoration = 'underline';
                        } else if (val != 'img' || val != 'loader'){
                            this.refs[val].style.textDecoration = 'none';
                        }
                    }
                })
            }
        })
    }
    handlePos(x, y) {
        this.setState({loading: true}, () => {
            this.refs.loader.style.display = 'block';
            this.refs.img.style.display = 'none';
            if (this.state.position == x) {
                if (y == 'next') {
                    this.setState({position: x + 1});
                }
                if (y == 'prev') {
                    this.setState({position: x - 1});
                }
            }
        })
    }
    handleLoad() {
        this.setState({loading: false}, () => {
            this.refs.loader.style.display = 'none';
            this.refs.img.style.display = 'block';
        })
    }
    render() {

        const {imageArr, position, loading} = this.state;

        return (
            <div id='works-wrap'>
                <div id='mediums'>
                    <h4 ref='wp' onClick={() => this.handleMedium('wp')}>wall paintings</h4>
                    <h4 ref='p' onClick={() => this.handleMedium('p')}>paintings</h4>
                    <h4 ref='d' onClick={() => this.handleMedium('d')}>drawings</h4>
                    <h4 ref='s' onClick={() => this.handleMedium('s')}>sculpture</h4>
                </div>
                    {imageArr &&
                        <div id='image-wrap-wrap'>
                            <div id='image-wrap'>
                                <p id='loader' ref='loader'>loading...</p>
                                <a className='not' href={`https://s3.amazonaws.com/kristinnordhoy/images/${imageArr[position].id}.jpg`} target='_blank'>
                                    <img
                                        ref='img'
                                        className='currImg' src={`https://s3.amazonaws.com/kristinnordhoy/images/${imageArr[position].id}.jpg`}
                                        style={{display:'none'}}
                                        onLoad={() => this.handleLoad()}
                                    />
                                </a>
                            </div>
                        </div>
                    }
                    {imageArr &&
                        <div id='image-info'>
                            <div id='info'>
                                <h5>{imageArr[position].title}</h5>
                                <p>{imageArr[position].created}</p>
                                <p>{imageArr[position].dimensions}</p>
                                <p>{imageArr[position].medium}</p>
                            </div>
                            {!position && imageArr.length != 1 &&
                                <div id='arrows'>
                                    <div onClick={() => this.handlePos(position, 'next')}>next</div>
                                </div>
                            }
                            {position >= 1 && position + 1 != imageArr.length &&
                                <div id='arrows'>
                                    <div onClick={() => this.handlePos(position, 'prev')}>prev</div>
                                    <div onClick={() => this.handlePos(position, 'next')}>next</div>
                                </div>
                            }
                            {position >= 1 && position + 1 == imageArr.length &&
                                <div id='arrows'>
                                    <div id='prev' onClick={() => this.handlePos(position, 'prev')}>prev</div>
                                </div>
                            }
                        </div>
                    }
            </div>
        )
    }
}
