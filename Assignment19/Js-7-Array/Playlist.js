// 1. Empty array called playlist
let playlist = [];

// 2. Function to add a song
function addSong(title) {
  playlist.push(title);
  console.log("Song added!");
}

// 3. Function to play the first song
function playSong() {
  if (playlist.length === 0) {
    console.log("No songs to play!");
  } else {
    let song = playlist.shift();
    console.log("Now playing: " + song);
  }
}

// 4. Function to show the playlist
function showPlaylist() {
  console.log("Playlist:");
  if (playlist.length === 0) {
    console.log("(empty)");
  } else {
    for (let i = 0; i < playlist.length; i++) {
      console.log((i + 1) + ". " + playlist[i]);
    }
  }
}

// 5. Test the program
addSong("Song A");
addSong("Song B");
addSong("Song C");
addSong("Song D");

playSong();
playSong();

showPlaylist();

//  // Create an array to hold the playlist
//         let playlist = ["Song 1", "Song 2", "Song 3"];
//         console.log("Original Playlist:", playlist);

//         // Add a new song to the playlist
//         playlist.push("Song 4");
//         console.log("After adding a song:", playlist);

//         // Remove the last song from the playlist
//         let removedSong = playlist.pop();
//         console.log("Removed Song:", removedSong);
//         console.log("After removing a song:", playlist);

//         // Add a new song to the beginning of the playlist
//         playlist.unshift("Intro Song");
//         console.log("After adding a song to the beginning:", playlist);

//         // Remove the first song from the playlist
//         let shiftedSong = playlist.shift();
//         console.log("Removed Song:", shiftedSong);
//         console.log("After removing the first song:", playlist);