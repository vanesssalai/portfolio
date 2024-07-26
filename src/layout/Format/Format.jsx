import React from "react";
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer';

export default function Format({content}) {
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