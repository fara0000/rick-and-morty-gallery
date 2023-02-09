import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import {CharacterList} from "src/components/Characters";

const Character = {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
};

const Home: NextPage = () => (
    <React.Fragment>
        <Head>
            <title>Rick and morty gallery</title>
        </Head>

        <CharacterList />
    </React.Fragment>
);

export default Home;
