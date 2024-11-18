import React from "react";
import Header from './header/header'
import Footer from './footer/footer';
import './layout.css';

export default function Layout({content}) {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {content}
            </main>
            <Footer />
        </div>
    )
}