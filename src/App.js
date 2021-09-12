import React from 'react';
import'./css/App.css';
import Header from './Header';
import Intro from './Intro';

export default function App(){
    return (
        <div className="app">
            <Header/>    
            <Intro/>  
        </div>          
    );
}