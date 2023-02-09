import React, {useEffect, useState} from 'react';
import useSWR from 'swr';
import {List, AutoSizer, ScrollEventData} from 'react-virtualized';
import styles from './CharacterList.module.css';
import * as urls from 'src/urls'
import * as types from 'src/types'
import { CharacterCard } from "src/components/Characters";
import {fetchProvider} from "src/helpers/fetchProvider";
import axios from "axios";

export const CharacterList: React.FC = () => {
    const [characters, setCharacters] = useState<types.Character[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);

    const fetchCharacters = async () => {
        const data = await fetchProvider("GET", urls.getAllCharacters, `?page=${currentPage}`)

        setCharacters([...characters, ...data.results])
        setFetching(false);
    }

    useEffect(() => {
        if(fetching) {
            fetchCharacters();
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return () => {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])


    const scrollHandler = (event: any) => {
        if(event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100) { // приближаемся к концу страницы
            setCurrentPage(currentPage + 1)
            setFetching(true)
        }
    }

    return (
        <div className={styles.container}>
            {
                characters?.map((item, index) => <CharacterCard
                    character={item}
                    key={item.name}
                />)
            }
        </div>
    );
};
