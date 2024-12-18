import React from "react";
import './MainView.css';
import Layout from "../../components/layout/layout";
import ViewControl from "../../components/viewControl/ViewControl";

export default function MainView() {
    return (
        <Layout content={
            <ViewControl />
        } />
    );
}
