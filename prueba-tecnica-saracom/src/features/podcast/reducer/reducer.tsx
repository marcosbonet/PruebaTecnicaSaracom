import { Ipodcast } from '../entities/entities';
import { createReducer } from '@reduxjs/toolkit';
import * as ac from './action.creator';
const initialState: Array<Ipodcast> = [];
export const Reducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.getAllActionCreator, (_state, action) => action.payload);

    builder.addCase(ac.loadPodcastAction, (_state, action) => action.payload);

    builder.addDefaultCase((state) => state);
});
