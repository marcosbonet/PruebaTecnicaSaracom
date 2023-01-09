import { Link } from 'react-router-dom';
import { Ipodcast } from '../../features/podcast/entities/entities';

export function ItemPodcast({ item }: { item: Ipodcast }) {
    return (
        <>
            <Link to={`/podcast/${item.id}`}>
                <div>
                    <img
                        src={item.images}
                        alt={item.name}
                        className={'image'}
                    ></img>
                    <div className={'details'}>
                        <p className={'podcastName'}>{item.name}</p>
                        <p className={'authorName'}> Author: {item.artist}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
