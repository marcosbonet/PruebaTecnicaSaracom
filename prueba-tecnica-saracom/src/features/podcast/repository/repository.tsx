import { Ipodcast } from '../entities/entities';

export class Repository {
    URL: string;
    constructor(url = '') {
        this.URL =
            'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
    }
    getAll(): Promise<Array<Ipodcast>> {
        return fetch(
            'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
            {
                method: 'GET',
            }
        )
            .then((response) => {
                return response.json();
            })
            .then(({ feed: { entry } }) => {
                const podcast = entry.map((item: any) => {
                    return {
                        name: item['im:name'].label,
                        artist: item['im:artist'].label,
                        img: item['im:image'][2].label,
                    };
                });
                return podcast;
            });

        // query(value: { [key: string]: string }): Promise<Array<Ipodcast>> {
        //     const url = URL + `${value}`;
        //     return fetch(url, {
        //         method: 'SEARCH',
        //         body: JSON.stringify(value),
        //     }).then((response) => response.json());
        // }
    }
}
