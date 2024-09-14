// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "B.E.D", artist: "Jaquees", genre:"R&B"},
    { title: "Yebo Lapho(Gogo)", artist: "Felo Le Tee", genre: "Amapiano" },
    { title: "Zulu", artist: "Pushkin RSA ft AMAQHAWE", genre: "Amapiano" },
    { title: "Like we Wrote", artist: "Lithe", genre: "Lo-Fi" },
    { title: "Until Sunrise", artist: "Snow ft Cryy", genre: "Lo-Fi"},
    { title: "twerka 4.0", artist: "Bukzin keyz", genre: "Amapiano"},
    { title: "DeathBed(Coffee for your head)", artist: "Powfu", genre:"Lo-Fi"},
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord's Playlist": "Rock",
    "Gamora's Playlist": "Pop",
    "Drax's Playlist": "R&B",
    "Rocket's Playlist": "Amapiano",
    "Groot's Playlist": "Lo-Fi",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    let playlists = Object.keys(guardians).map(guardian => {
        const genre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === genre);
        return { guardian, playlist };
        });

    const playlistContainer = document.getElementById('playlists');

    playlists.map(playlist => {
        const playlistDiv = document.createElement('div');
        playlistDiv.className = 'playlist'; // Add the 'playlist' class to each playlist div
    
        const guardianHeading = document.createElement('h2');
        guardianHeading.textContent = playlist.guardian;
        playlistDiv.appendChild(guardianHeading,);
    
        const songList = document.createElement('p');
        playlist.playlist.forEach(song => {
            const songListItem = document.createElement('p');
            const songTitleSpan = document.createElement('span');
            songTitleSpan.className = 'song-title';
            songTitleSpan.textContent = song.title;
            songListItem.appendChild(songTitleSpan);
            songListItem.appendChild(document.createTextNode(` by ${song.artist}`));
            songList.appendChild(songListItem);
        });
        playlistDiv.appendChild(songList);
    
        playlistContainer.appendChild(playlistDiv);
    });


}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);