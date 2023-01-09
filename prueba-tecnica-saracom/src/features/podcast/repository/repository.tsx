import { Ipodcast } from '../entities/entities';

export class Repository {
    URL: string;
    constructor(url = '') {
        this.URL =
            'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
    }
    getAll(): Promise<Array<Ipodcast>> {
        return fetch(this.URL, {
            method: 'GET',
        })
            .then((response) => {
                return response.json();
            })
            .then(({ feed: { entry } }) => {
                const podcasts = entry.map((podcast: any) => {
                    return {
                        images: podcast['im:image'][2].label,
                        artist: podcast['im:artist'].label,
                        name: podcast['im:name'].label,
                        id: podcast['id'].attributes['im:id'],
                    };
                });
                localStorage.setItem('podcasts', podcasts);

                return podcasts;
            })
            .catch((error) => {
                return console.log(error);
            });
    }

    getPodcast(id: string): Promise<Array<Ipodcast>> {
        return fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent(
                `https://itunes.apple.com/lookup?id=${id}`
            )}`
        )
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error('Network response was not ok.');
            })
            .then((data) => JSON.parse(data.contents))
            .then(({ results }) => {
                const podcasts = results.map((podcast: any) => {
                    return {
                        images: podcast.artworkUrl600,
                        artist: podcast.artistName,
                        name: podcast.trackName,
                        urlDescription: podcast.feedUrl,
                        id: podcast.artistId,
                    };
                });

                return podcasts;
            })
            .catch((error) => {
                return console.log(error);
            });
    }
    getDetails(url: string): Promise<any> {
        console.log(url);
        return (
            fetch(url)
                .then((response) => {
                    console.log(response);
                })

                // .then(({ results }) => {
                //     console.log(results);
                //     const podcasts = results.map((podcast: any) => {
                //         return {
                //             images: podcast.artworkUrl600,
                //             artist: podcast.artistName,
                //             name: podcast.trackName,
                //             urlDescription: podcast.feedUrl,
                //             id: podcast.artistId,
                //         };
                //     });

                //     return podcasts;
                // })
                .catch((error) => {
                    return console.log(error);
                })
        );
    }
}
