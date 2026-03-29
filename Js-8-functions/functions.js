// Constructor function
function Image(title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
}

// Factory function
function getImage(title, artist, date) {
  return {
    title: title,
    artist: artist,
    date: date
  };
}

// Example images data array (assuming previous data)
const previousImagesData = [
  { title: "Starry Night", artist: "Vincent van Gogh", date: 1889 },
  { title: "Mona Lisa", artist: "Leonardo da Vinci", date: 1503 },
  { title: "The Persistence of Memory", artist: "Salvador Dalí", date: 1931 }
];

// Create images1 using the Image constructor
const images1 = previousImagesData.map(
  img => new Image(img.title, img.artist, img.date)
);

// Create images2 using the getImage factory function
const images2 = images1.map(
  img => getImage(img.title, img.artist, img.date)
);

// Display the contents of images2
console.log(images2);