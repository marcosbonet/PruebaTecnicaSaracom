import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePodcast } from '../../features/podcast/hook/usePodcast';
import * as ac from '../../features/podcast/reducer/action.creator';
export function Search() {
    const { podcast } = usePodcast();
    const dispatcher = useDispatch();
    const initialForm = {
        search: '',
    };
    const [form, setform] = useState(initialForm);
    const handleForm = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setform({
            ...form,
            [element.name]: element.value,
        });
    };

    useEffect(() => {
        const filter = podcast?.filter((item) =>
            item.artist.includes(form.search)
        );
        dispatcher(ac.loadPodcastAction(filter));
        console.log(filter);
    }, [form.search, dispatcher]);

    return (
        <>
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search"
                        name="search"
                        value={form.search}
                        onInput={handleForm}
                    />
                </form>
            </div>
        </>
    );
}
