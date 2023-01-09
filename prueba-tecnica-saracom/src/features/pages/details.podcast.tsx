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
        if (podcast[0]) {
            repo.getDetails(podcast[0].urlDescription as string).then((res) => {
                console.log(res, 'resp');
            });
        }
    }, []);

    return (
        <>
            {podcast[0] ? (
                <>
                    {' '}
                    <div className={'container'}>
                        <img
                            src={podcast[0].images}
                            alt={podcast[0].name}
                            width="200px"
                            className={'detailImage'}
                        ></img>
                        <p className={'navName'}>{podcast[0].name}</p>
                        <p className={'navArtist'}> By {podcast[0].artist}</p>
                    </div>
                </>
            ) : (
                <p>loading...</p>
            )}
        </>
    );
}
