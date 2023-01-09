import { Ipodcast } from '../entities/entities';
import { createAction } from '@reduxjs/toolkit';
import { actionPodcastType } from './action.types';

export const getAllActionCreator = createAction<Array<Ipodcast>>(
    actionPodcastType.getAll
);

export const loadPodcastAction = createAction<Array<Ipodcast>>(
    actionPodcastType.load
);
