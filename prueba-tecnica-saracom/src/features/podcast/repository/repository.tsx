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
                const podcasts = entry.map((podcast: any) => {
                    return {
                        images: podcast['im:image'][2].label,
                        artist: podcast['im:artist'].label,
                        name: podcast['im:name'].label,
                    };
                });
                return podcasts;
            });
    }

    // Search(dataSearch: string): Promise<Array<Ipodcast>> {
    //     const url =
    //         'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
    //     const search = `?q=${dataSearch}`;
    //     const completeUrl = url + search;
    //     const result = fetch(completeUrl).then((response) => {
    //         return response.json();
    //     });
    //     return result;
    // }
    // query(key: string, value: string): Promise<Array<Ipodcast>> {
    //     return fetch(`${this.URL}/${key}/${value}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json',
    //             Authorization: `Bearer ${localStorage.getItem('token')}`,
    //         },
    //     })
    //         .then((res) => res.json())
    //         .catch((error) => {
    //             return error;
    //         });
    // }
}
