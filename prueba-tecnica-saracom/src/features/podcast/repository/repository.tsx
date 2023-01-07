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
                localStorage.setItem('podcasts', podcasts);

                return podcasts;
            })
            .catch((error) => {
                return console.log(error);
            });
    }
}
