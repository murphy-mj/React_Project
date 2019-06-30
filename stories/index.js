import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Point from '../src/components/pointofinterest/'
import PointList from '../src/components/poiList/'
import PointForm from '../src/components/pointForm/';
import PointItem from '../src/components/pointItem/';
import PointItemList from '../src/components/pointItemList';


const sample = {
    name: {first:'Joe', last:'Bloggs'},
    email: 'j.bloggs@example.com',
    phone: '012-3456789',
    picture: {thumbnail: './profile.png'}
}
const post = {
    id: 1 ,
    title : 'Post 1.',
    link : 'http://www.foo.bar',
    author : 'Joe Bloggs',
    comments : [],
    upvotes: 10
};



storiesOf("Points Of Interest Header", module).add("default", () => (
    <Header noPois={10} />
));

storiesOf("Points of Interest Filter Controls", module).add("default", () => (
    <FilterControls />
));

storiesOf("Point of Interest Detail", module).add("default", () => (
    <Point point={sample}/>
));

storiesOf("Point of Interest Point List", module).add("default", () => {
    const samples = [sample, sample, sample, sample, sample]
    return <PointList points={samples}/>
});

storiesOf("Point Form", module).add("default", () =>
    <PointForm />);

storiesOf('Point Item', module)
    .add('default', () => <PointItem post= { post }  />
)
.add('No hyperlink', () => <PointItem post= { { ...post, link: ''} }  />
);


storiesOf('Point Item List', module)
    .add('default', () => {
        const defaultPosts = [
            { ...post, id: 1, title: 'Post 1', upvotes: 10 },
            { ...post, id: 2, title: 'Post 2', upvotes: 20 },
            { ...post, id: 3, title: 'Post 3', upvotes: 30 },
            { ...post, id: 4, title: 'Post 4', upvotes: 40 }
        ];
        return <PointItemList posts= { defaultPosts }  />
    });