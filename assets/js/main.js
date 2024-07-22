let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
  {
    img: "assets/images/poster-005.jpg",
    name: "𝙆𝙖𝙩𝙮 𝙥𝙖𝙧𝙮 𝙬𝙞𝙙𝙚 𝙖𝙬𝙖𝙠𝙚",
    artist: "Manz",
    music: "assets/music/music-005.mp3",
  },
  {
    img: "assets/images/poster-10.jpg",
    name: "𝘿𝙧𝙪𝙣𝙠 𝙏𝙚𝙭𝙩",
    artist: "Manz",
    music: "assets/music/music-10.mp3",
  },
  {
    img: "assets/images/poster-24.jpg",
    name: "𝙍𝙚𝙘𝙠𝙡𝙚𝙨𝙨",
    artist: "Manz",
    music: "assets/music/music-24.mp3",
  },
  {
    img: "assets/images/poster-26.jpg",
    name: "𝘿𝙖𝙣𝙙𝙚𝙡𝙞𝙤𝙣𝙨",
    artist: "Manz",
    music: "assets/music/music-26.mp3",
  },
  {
    img: "assets/images/poster-30.jpg",
    name: "𝙞𝙢𝙥𝙤𝙨𝙨𝙞𝙗𝙡𝙚 𝙨𝙥𝙚𝙚𝙙 𝙪𝙥",
    artist: "Manz",
    music: "assets/music/music-30.mp3",
  },
  {
    img: "assets/images/poster-00.jpg",
    name: "𝙇𝙤𝙘𝙠𝙚𝙙 𝘼𝙬𝙖𝙮",
    artist: "Manz",
    music: "assets/music/music-00.mp3",
  },
  {
    img: "assets/images/poster-001.jpg",
    name: "𝙎𝙤𝙢𝙚𝙗𝙤𝙙𝙮'𝙨 𝙋𝙡𝙚𝙖𝙨𝙪𝙧𝙚",
    artist: "Manz",
    music: "assets/music/music-001.mp3",
  },
  {
    img: "assets/images/poster-004.jpg",
    name: "𝙧𝙚𝙥𝙡𝙖𝙮",
    artist: "Manz",
    music: "assets/music/music-004.mp3",
  },
   {
    img: "assets/images/poster-002.jpg",
    name: "𝙋𝙚𝙧𝙛𝙚𝙘𝙩",
    artist: "Manz",
    music: "assets/music/music-002.mp3",
  },
  {
    img: "assets/images/poster-003.jpg",
    name: "𝙀𝙚𝙣𝙞𝙚 𝙢𝙚𝙚𝙣𝙞𝙚",
    artist: "Manz",
    music: "assets/music/music-003.mp3",
  },
   {
    img: "assets/images/poster-19.jpg",
    name: "𝙏𝙖𝙠𝙠𝙖𝙣 𝙥𝙚𝙧𝙜𝙞 (𝙨𝙥𝙚𝙚𝙙 𝙪𝙥)",
    artist: "Manz",
    music: "assets/music/music-19.mp3",
  },
   {
    img: "assets/images/poster-21.jpg",
    name: "𝘼𝙨𝙖𝙡 𝙆𝙖𝙪 𝘽𝙖𝙝𝙖𝙜𝙞𝙖",
    artist: "Manz",
    music: "assets/music/music-21.mp3",
  },
   {
    img: "assets/images/poster-14.jpg",
    name: "𝙨𝙚𝙠𝙚𝙘𝙚𝙬𝙖 𝙞𝙩𝙪",
    artist: "Manz",
    music: "assets/music/music-14.mp3",
  },
   {
    img: "assets/images/poster-33.jpg",
    name: "𝙃𝙖𝙡 𝙃𝙚𝙗𝙖𝙩",
    artist: "Manz",
    music: "assets/music/music-33.mp3",
  },
    {
    img: "assets/images/poster-31.jpg",
    name: "𝘼𝙠𝙪 𝙋𝙖𝙨𝙩𝙞 𝙏𝙖𝙪",
    artist: "Manz",
    music: "assets/music/music-31.mp3",
  },
   {
    img: "assets/images/poster-22.jpg",
    name: "𝙎𝙤𝙣𝙜 𝙏𝙞𝙠𝙩𝙤𝙠",
    artist: "Manz",
    music: "assets/music/music-22.mp3",
  },
   {
    img: "assets/images/poster-7.jpg",
    name: "𝙎𝙖𝙙 𝙎𝙤𝙣𝙜 𝙏𝙞𝙠𝙩𝙤𝙠 ♫",
    artist: "Manz",
    music: "assets/music/music-7.mp3",
  },
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;

  now_playing.textContent =
    "Playing music" + (track_index + 1) + " of " + music_list.length;
  updateTimer = setInterval(setUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}
function randomTrack() {
  isRandom ? pauseRandom() : playRandom();
}

function playRandom() {
  isRandom = true;
  randomIcon.classList.add("randomActive");
}
function pauseRandom() {
  isRandom = false;
  randomIcon.classList.remove("randomActive");
}
function repeatTrack() {
  let current_index = track_index;
  loadTrack(current_index);
  playTrack();
}
function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add("rotate");
  wave.classList.add("loader");
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove("rotate");
  wave.classList.remove("loader");
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (track_index < music_list.length - 1 && isRandom === false) {
    track_index += 1;
  } else if (track_index < music_list.length - 1 && isRandom === true) {
    let random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music_list.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekTo = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekTo;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );

    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      (curr_track.duration - durationMinutes * 60)
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
