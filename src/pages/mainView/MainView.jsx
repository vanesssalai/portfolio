import React from "react";
import './MainView.css';
import Layout from "../../components/layout/Layout";
import LandingScreen from "../../components/viewControl/ViewControl"

export default function MainView() {
    return (
        <Layout content={
            <LandingScreen />
        } />
    );
}
