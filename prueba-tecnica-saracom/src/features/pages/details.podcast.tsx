import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Ipodcast } from '../podcast/entities/entities';

import { Repository } from '../podcast/repository/repository';

export function DetailsPodcast() {
    const { id } = useParams();

    const initialState: Array<Ipodcast> = [];
    const [podcast, setPodcast] = useState(initialState);
    const repo = useMemo(() => new Repository(), []);

    useEffect(() => {
        repo.getPodcast(id as string).then((res) => {
            setPodcast(res);
        });
    }, []);
    console.log(podcast);

    return (
        <>
            {podcast[0] ? (
                <>
                    <div>{podcast[0].name}</div>
                    <img
                        src={podcast[0].images}
                        alt={podcast[0].name}
                        width="200px"
                    ></img>
                    <p>{podcast[0].name}</p>
                    <p>{podcast[0].artist}</p>
                </>
            ) : (
                <p>loading...</p>
            )}
        </>
    );
}
