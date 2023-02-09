import React, {useCallback, useState} from "react";
import Image from 'next/image';
import { useSpring, animated } from 'react-spring'
import * as types from 'src/types';
import Location from 'src/assets/svg/location.svg';
import styles from './Character.module.css';
import { Typography } from 'src/components/Typography';
import { convertTimestamp } from "src/helpers/covertDate";

interface CharacterCardProps {
    character: types.Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const [hover, setHover] = useSpring(() => ({
        transform: "scale(1)",
        boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.3)",
        borderRadius: "10px",
    }))

    const handleHover = useCallback(() => {
        setHover({
            transform: "scale(1.1)",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",
            borderRadius: "25px"
        })
    }, [])

    const handleLeave = useCallback(() => {
        setHover({
            transform: "scale(1)",
            boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px"
        })
    }, [])

    return (
        <animated.div
            className={styles.container}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            style={hover}
        >
            <div className={styles.image_container}>
                <Image src={character.image} alt={character.name} className={character.image} layout="fill"/>
            </div>
            <div className={styles.info}>
                <Typography tag='h4' className={styles.name}>
                    {character.name}
                </Typography>
                <div className={styles.location}>
                    <Typography tag='span'>
                        <Location />
                    </Typography>

                    <Typography tag='span' styles={{ marginBottom: '2px' }}>
                        {character.location.name}
                    </Typography>
                </div>
                <div className={styles.mainInfo}>
                    <Typography tag='span' styles={{ marginLeft: '4px' }}>
                        Created: {convertTimestamp(character.created)}
                    </Typography>
                    <Typography tag='span' styles={character.status === 'Alive' ? { color: 'green' } : (character.status === 'Dead' ? { color: 'red' } : { color: 'gray' }) }>
                        {character.status}
                    </Typography>
                </div>
            </div>
        </animated.div>
    )
}