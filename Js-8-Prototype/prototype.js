// Assuming the Image constructor already exists
// Add show method to the Image prototype
Image.prototype.show = function() {
  console.log(`${this.title} (${this.artist}, ${this.date})`);
};

// Extend the images object with new methods
Object.assign(images, {
  // Edit method
  edit: function(title, artist, date) {
    const img = this.list.find(img => img.title === title);
    if (img) {
      img.artist = artist;
      img.date = date;
    }
  },

  // Delete method
  delete: function(title) {
    const index = this.list.findIndex(img => img.title === title);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  },

  // Override show to use each image's show method
  show: function() {
    this.list.forEach(img => {
      img.show();
    });
  }
});

// Test the sequence
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// Expected output:
// Mona Lisa (Leonardo da Vinci, 1504)
// The Starry Night (Vincent van Gogh, 1889)