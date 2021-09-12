import React, { Component } from 'react';
import Linkedin from './img/Linkedin.png';
import GitHub from './img/GitHub.jpg';
import Telegram from './img/Telegram.png';
import IntroImg from './img/Intro.jpeg';
import './css/Intro.css'


export default class Intro extends Component {
    render() {
        return (
            <section className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <div className="intro__content">
                            <h2 className="intro__subtitle">Hello i'm</h2>
                            <h1 className="intro__title">Maxim Bandaruk</h1>
                            <div className="intro__text">.NET Developer</div>
                            <div className="social">
                                <a className="social__link" href="#">
                                    <img src={Linkedin}/>
                                </a>
                                <a className="social__link" href="#">
                                    <img src={Telegram}/>
                                </a>
                                <a className="social__link" href="#">
                                    <img src={GitHub}/>
                                </a>
                            </div>
                            <a className="btn" href="#">Hire me</a>
                            <button className="btn" type="button">See my resume</button>
                        </div>
                        <img className="intro__photo" src={IntroImg}/>
                    </div>
                </div>
            </section>
        )
    }
}