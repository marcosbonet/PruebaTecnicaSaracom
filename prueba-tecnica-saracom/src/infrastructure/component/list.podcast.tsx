import { Search } from '../component/search';
import { Ipodcast } from '../../features/podcast/entities/entities';
import { usePodcast } from '../../features/podcast/hook/usePodcast';
import { ItemPodcast } from './item.podcast';
import { useNavigate } from 'react-router-dom';

export const ListPodcast = () => {
    const { podcast } = usePodcast();

    return (
        <>
            <Search />
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
