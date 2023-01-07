import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Repository } from '../repository/repository';
import { rootState } from '../store/store';
import * as ac from '../reducer/action.creator';

export const usePodcast = () => {
    const podcast = useSelector((state: rootState) => state.podcast);
    const dispatcher = useDispatch();
    const apiPodcast = useMemo(() => new Repository(), []);
    useEffect(() => {
        apiPodcast.getAll().then((response) => {
            dispatcher(ac.getAllActionCreator(response));
        });
    }, [apiPodcast, dispatcher]);

    return {
        podcast,
    };
};
