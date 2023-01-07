import { Ipodcast } from '../../features/podcast/entities/entities';

export function ItemPodcast({ item }: { item: Ipodcast }) {
    return (
        <>
            <img src={item.images} alt={item.name} width="200px"></img>
            <p>{item.name}</p>
            <p>{item.artist}</p>
        </>
    );
}
