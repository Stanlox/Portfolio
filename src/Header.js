import React, { Component } from 'react';
import './css/Header.css';
import logo  from './img/1234.jpg';

export default class Header extends Component{

    render() {
        return (
            <div className="container">
                <div className="header__inner">
                    <div style={{display: "flex"}}>
                        <div style={{fontWeight: 57, height: 57}}>
                            <img src={"https://via.placeholder.com/57/333C/O https://placeholder.com/"}  style={{borderRadius: 50}}/>
                        </div>
                        <div style={{paddingLeft: 9}}>
                            <div style={{fontSize: 15, color: "black", fontWeight: 700, lineHeight: 1.2, marginBottom: 3}}>Maxim <br/> Bandaruk</div>
                            <div style={{fontSize: 15, color: "black"}}>Junior .NET Developer</div>
                        </div>
                    </div>
                    <nav className="nav">
                        <a className="nav_link" href="#">work</a>
                        <a className="nav_link" href="#">about me</a>
                        <a className="nav_link" href="#">contact</a>
                        <a className="nav_link" href="#">hire me</a>
                    </nav>
                </div>
            </div>  
        )               
      }
    }
