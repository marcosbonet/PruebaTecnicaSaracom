import { Link } from 'react-router-dom';
import { Ipodcast } from '../../features/podcast/entities/entities';

export function ItemPodcast({ item }: { item: Ipodcast }) {
    return (
        <>
            <Link to={`/podcast/${item.id}`}>
                <div>
                    <img src={item.images} alt={item.name} width="200px"></img>
                    <p>{item.name}</p>
                    <p>{item.artist}</p>
                </div>
            </Link>
        </>
    );
}
