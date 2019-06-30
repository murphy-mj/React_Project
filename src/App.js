import React, { Component } from "react";
import Header from "./components/header/";
import PointList from "./components/poiList/";
import FilterControls from "./components/filterControls/";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


class App extends Component {
    render() {
        const sample = {
            name: { first: "Joe", last: "Bloggs" },
            email: "j.bloggs@example.com",
            phone: "012-3456789",
            picture: { thumbnail: "./profile.png" }
        };

        const points = [sample, sample, sample, sample, sample];

        return (
            <div className="jumbotron">
            <Header noPoints={10} />
        <FilterControls />
        <PointList points={points} />
        </div>
    );
    }
}

export default App;