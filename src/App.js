import React, { Component } from "react";
import Header from "./components/header/";
import PointList from "./components/poiList/";
import FilterControls from "./components/filterControls/";
import PointItemList from "./components/pointItemList/";
import Form from "./components/pointForm/";

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
        const testPosts = [
            {  id: 1 ,
                title : 'Why You Can No Longer Get Lost in the Crowd',
                link : 'https://www.nytimes.com/2019/04/17/opinion/data-privacy.html',
                author : 'Woodrow Hartzog',
                comments : [],
                upvotes : 10
            },
            {
                id: 2,
                title : "Samsung's folding phone breaks for reviewers",
                link : 'https://www.bbc.com/news/technology-47970788',
                author : 'Dave Lee',
                comments : [],
                upvotes : 12
            },
            {
                id: 3,
                title : 'Microsoft turned down facial-recognition sales on human rights concerns',
                link : null,
                author : 'Joseph Mennn',
                comments : [],
                upvotes : 12
            }]



        return (
            <div className="jumbotron">
              <Header noPoints={10} />
              <FilterControls />
              <PointList points={points} />
              <div className="row">
                 <div className="col-md-6 offset-3">
                  <h1><a href="/">Point of Interest News</a></h1>
                 </div>
              </div>
              <div className="row">
                <div className="col-md-4 ">
                  <Form />
                </div>
              <div className="col-md-8">
                <PointItemList posts={testPosts} />
              </div>
              </div>
           </div>
    );
    }
}

export default App;