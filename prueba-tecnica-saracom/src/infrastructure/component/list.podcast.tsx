export function ListPodcast() {
    const getAll = () => {
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
    };
    const a = getAll();
    console.log(a);
    return (
        <>
            <div>Hola mundo</div>
        </>
    );
}
