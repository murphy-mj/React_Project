import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Point from '../src/components/pointofinterest/'
import PointList from '../src/components/poiList/'


const sample = {
    name: {first:'Joe', last:'Bloggs'},
    email: 'j.bloggs@example.com',
    phone: '012-3456789',
    picture: {thumbnail: './profile.png'}
}

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