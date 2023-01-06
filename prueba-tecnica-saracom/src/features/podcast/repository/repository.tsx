import { Ipodcast } from '../entities/entities';

export class Repository {
    URL: string;
    constructor(url = '') {
        this.URL =
            'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
    }
    getAll(): Promise<Ipodcast> {
        return fetch(
            'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
            {
                method: 'GET',
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                return response.feed;
            });
    }

    query(value: string): Promise<Ipodcast> {
        const url = URL + `${value}`;
        return fetch(url, { method: 'GET' }).then((response) => {
            return response.json();
        });
    }
}
