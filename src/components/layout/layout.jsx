import React from "react";
import Header from './header/header'
import Footer from './footer/footer';

export default function Layout({content}) {
    return (
            <div>
            <Header />
                <main>
                    {content}
                </main>
            <Footer />
        </div>
    )
}