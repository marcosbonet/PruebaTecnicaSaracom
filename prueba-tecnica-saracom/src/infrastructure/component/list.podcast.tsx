import { Search } from './search';
import { Ipodcast } from '../../features/podcast/entities/entities';
import { usePodcast } from '../../features/podcast/hook/usePodcast';
import { ItemPodcast } from './item.podcast';

export const ListPodcast = () => {
    const { podcast } = usePodcast();

    return (
        <>
            <Search />
            <ul className={'ul'}>
                {podcast.map((item: Ipodcast) => (
                    <li key={Math.random() * 100000000} className={'li'}>
                        <ItemPodcast item={item} />
                    </li>
                ))}
            </ul>
        </>
    );
};
