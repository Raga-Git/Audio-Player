(function(){

  var t = {
    playlist: [
      {
        file: "tracks/01.mp3",
        thumb: "thumbs/01.jpg",
        trackName: "Young Dumb&Broke",
        trackArtist: "Khalid",
        trackAlbum: "Single",
      },
      {
        file: "tracks/02.mp3",
        thumb: "thumbs/02.jpg",
        trackName: "Midsummer Madness",
        trackArtist: "88Rising",
        trackAlbum: "Single",
      },
      {
        file: "tracks/03.mp3",
        thumb: "thumbs/03.jpg",
        trackName: "Dat Stick",
        trackArtist: "Rich Brian",
        trackAlbum: "Single",
      }
    ]
  }

  $(".jAudio").jAudio(t);

})();