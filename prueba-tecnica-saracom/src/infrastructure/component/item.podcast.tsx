import { Ipodcast } from '../../features/podcast/entities/entities';

export function ItemPodcast({ item }: { item: Ipodcast }) {
    return (
        <>
            <img src={item.img} alt={item.name} width="200px"></img>
            <p>{item.name}</p>
            <p>{item.artist}</p>
        </>
    );
}
