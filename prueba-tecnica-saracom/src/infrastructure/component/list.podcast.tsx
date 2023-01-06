import { Ipodcast } from '../../features/podcast/entities/entities';
import { usePodcast } from '../../features/podcast/hook/usePodcast';
import { ItemPodcast } from './item.podcast';

export const ListPodcast = () => {
    const { podcast } = usePodcast();

    return (
        <>
            <ul>
                {podcast.map((item: Ipodcast) => (
                    <li key={Math.random() * 100000000}>
                        <ItemPodcast item={item} />
                    </li>
                ))}
            </ul>
        </>
    );
};
