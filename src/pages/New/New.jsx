import React from "react";
import MiniScreen from "../../components/MiniScreen/MiniScreen";
import './New.css';
import Layout from "../../components/layout/layout";

export default function New() {
    return (
        <Layout content={
            <MiniScreen />
        } />
    );
}
