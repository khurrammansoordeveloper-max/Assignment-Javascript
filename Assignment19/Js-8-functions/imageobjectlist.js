// Assuming the Image constructor from earlier:
function Image(title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
}

// Define the images object
const images = {
  list: [],

  // Check if an image with the given title exists
  contains: function(title) {
    return this.list.some(img => img.title === title);
  },

  // Add a new image if it doesn't already exist
  add: function(title, artist, date) {
    if (!this.contains(title)) {
      this.list.push(new Image(title, artist, date));
    }
  },

  // Display all images
  show: function() {
    this.list.forEach(img => {
      console.log(`${img.title} (${img.artist}, ${img.date})`);
    });
  },

  // Clear the list
  clear: function() {
    this.list = [];
  }
};

// Test the script with the specified sequence
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503); // duplicate, should not add again

images.show();
// Output:
// Mona Lisa (Leonardo da Vinci, 1503)
// The Last Supper (Leonardo da Vinci, 1495)
// The Starry Night (Vincent van Gogh, 1889)

images.clear();
images.show(); // No output, list is empty