import React from "react";
import Header from './header/Header'
import Footer from './footer/Footer';
import './Layout.css';

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