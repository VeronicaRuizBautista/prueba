const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0c1c90cf73msh78785e045c1a7e6p16a1ecjsn4c853bde2387',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
let result
try {
    const response = await fetch(url, options);
    result = await response.json()
} catch (error) {
    console.error(error);
}

export const sortSongsForPopularity = () => {
    const data = result
    const sortedSongs = data.tracks
    sortedSongs.sort((a, b) => b.popularity - a.popularity)
    return sortedSongs
}

export const releaseYear = (data) => {
    const releaseDateFull = data.album.release_date
    const year = new Date(releaseDateFull).getFullYear()
    return year
}