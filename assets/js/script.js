let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;



/**
 * all music information
 */

const music_list = [
  {
     img : './assets/images/poster-10.jpg',
        name : 'Drunk Text',
        artist : 'manz',
        music : './assets/music/music-10.mp3'
  },
  {
    backgroundImage: "./assets/images/poster-24.jpg",
    posterUrl: "./assets/images/poster-24.jpg",
    title: "𝙍𝙚𝙘𝙠𝙡𝙚𝙨𝙨",
    album: "Madison Beer",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-24.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-25.jpg",
    posterUrl: "./assets/images/poster-25.jpg",
    title: "𝙃𝙖𝙥𝙥𝙞𝙚𝙧",
    album: "Olivia Rodrigo",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-25.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-26.jpg",
    posterUrl: "./assets/images/poster-26.jpg",
    title: "𝘿𝙖𝙣𝙙𝙚𝙡𝙞𝙤𝙣𝙨",
    album: "Ruth B.",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-26.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-30.jpg",
    posterUrl: "./assets/images/poster-30.jpg",
    title: "𝙞𝙢𝙥𝙤𝙨𝙨𝙞𝙗𝙡𝙚 𝙨𝙥𝙚𝙚𝙙 𝙪𝙥",
    album: "James Arthur",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-30.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-13.jpg",
    posterUrl: "./assets/images/poster-13.jpg",
    title: "𝘾𝙡𝙖𝙧𝙞𝙩𝙮 𝙣𝙞𝙜𝙝𝙩𝙘𝙤𝙧𝙚",
    album: "zedd feat",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-13.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "𝘿𝙪𝙠𝙖",
    album: "Last Child",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-1.mp3",
  },
   {
    backgroundImage: "./assets/images/poster-18.jpg",
    posterUrl: "./assets/images/poster-18.jpg",
    title: "𝙀𝙨𝙩-𝙘𝙚 𝙦𝙪𝙚 𝙩𝙪 𝙢'𝙖𝙞𝙢𝙚𝙨",
    album: "Erwin gaje",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-18.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-0.jpg",
    posterUrl: "./assets/images/poster-0.jpg",
    title: "𝘽𝙡𝙪𝙚 𝘽𝙞𝙧𝙙",
    album: "naruto",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-2.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-3.jpg",
    posterUrl: "./assets/images/poster-3.jpg",
    title: "𝙍𝙖𝙞𝙣𝙮𝙘𝙝 𝙆𝙖𝙣𝙖𝙨𝙝𝙞𝙢𝙞 𝙬𝙤 𝙔𝙖𝙨𝙖𝙨𝙝𝙞𝙨𝙖 𝙣𝙞",
    album: "naruto",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-3.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-4.jpg",
    posterUrl: "./assets/images/poster-4.jpg",
    title: "ロクデナシ  ただ声一つ",
    album: "sad",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-4.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-11.jpg",
    posterUrl: "./assets/images/poster-11.jpg",
    title: "𝙊𝙝 𝙢𝙮 𝙠𝙖𝙙𝙝𝙖𝙡𝙚",
    album: "sad",
    year: 2007,
    artist: "zubir khan x ezra kairo",
    musicPath: "./assets/music/music-11.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-17.jpg",
    posterUrl: "./assets/images/poster-17.jpg",
    title: "𝘿𝙞𝙢𝙖𝙣𝙖 𝙝𝙖𝙩𝙞𝙢𝙪 𝙨𝙥𝙚𝙙-𝙪𝙥",
    album: "papinka",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-17.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-19.jpg",
    posterUrl: "./assets/images/poster-19.jpg",
    title: "𝙏𝙖𝙠𝙠𝙖𝙣 𝙥𝙚𝙧𝙜𝙞 (𝙨𝙥𝙚𝙚𝙙 𝙪𝙥)",
    album: "Hyper act",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-19.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-28.jpg",
    posterUrl: "./assets/images/poster-28.jpg",
    title: "𝘼𝙙𝙖𝙠𝙖𝙝 𝙞𝙣𝙞 𝙢𝙞𝙢𝙥𝙞",
    album: "Reedwann",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-28.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-29.jpg",
    posterUrl: "./assets/images/poster-29.jpg",
    title: "𝘾𝙞𝙣𝙩𝙖 𝙋𝙖𝙣𝙙𝙖𝙣𝙜 𝙋𝙚𝙧𝙩𝙖𝙢𝙖",
    album: "Reedwann",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-29.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-20.jpg",
    posterUrl: "./assets/images/poster-20.jpg",
    title: "𝙏𝙚𝙧𝙘𝙞𝙥𝙩𝙖 𝙎𝙖𝙩𝙪 𝙎𝙚𝙣𝙮𝙪𝙢𝙖𝙣",
    album: "Reedwann",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-20.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-21.jpg",
    posterUrl: "./assets/images/poster-21.jpg",
    title: "𝘼𝙨𝙖𝙡 𝙆𝙖𝙪 𝘽𝙖𝙝𝙖𝙜𝙞𝙖",
    album: "Armada",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-21.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-8.jpg",
    posterUrl: "./assets/images/poster-8.jpg",
    title: "𝘽𝙖𝙞𝙠 𝙗𝙖𝙞𝙠 𝙨𝙖𝙮𝙖𝙣𝙜",
    album: "sad",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-8.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-9.jpg",
    posterUrl: "./assets/images/poster-9.jpg",
    title: "𝙗𝙞𝙣𝙩𝙖𝙣𝙜 𝙝𝙖𝙩𝙞𝙠𝙪",
    album: "sad",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-9.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-14.jpg",
    posterUrl: "./assets/images/poster-14.jpg",
    title: "𝙨𝙚𝙠𝙚𝙘𝙚𝙬𝙖 𝙞𝙩𝙪",
    album: "Angga candra",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-14.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-15.jpg",
    posterUrl: "./assets/images/poster-15.jpg",
    title: "𝙎𝙚𝙡𝙖𝙢𝙖𝙣𝙮𝙖",
    album: "Usop",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-15.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-16.jpg",
    posterUrl: "./assets/images/poster-16.jpg",
    title: "𝙋𝙚𝙧𝙩𝙖𝙢𝙖 𝙠𝙖𝙡𝙞",
    album: "shaa",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-16.mp3",
  },
   {
    backgroundImage: "./assets/images/poster-34.jpg",
    posterUrl: "./assets/images/poster-34.jpg",
    title: "𝙋𝙚𝙧𝙘𝙖𝙮𝙖 𝙋𝙖𝙙𝙖𝙠𝙪",
    album: "Ungu",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-34.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-33.jpg",
    posterUrl: "./assets/images/poster-33.jpg",
    title: "𝙃𝙖𝙡 𝙃𝙚𝙗𝙖𝙩",
    album: "Govinda",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-33.mp3",
  },
   {
    backgroundImage: "./assets/images/poster-31.jpg",
    posterUrl: "./assets/images/poster-31.jpg",
    title: "𝘼𝙠𝙪 𝙋𝙖𝙨𝙩𝙞 𝙏𝙖𝙪",
    album: "Bagindas",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-31.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-32.jpg",
    posterUrl: "./assets/images/poster-32.jpg",
    title: "𝘼𝙠𝙪 𝙔𝙖𝙣𝙜 𝙟𝙖𝙩𝙪𝙝 𝘾𝙞𝙣𝙩𝙖",
    album: "Dudy oris",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-32.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-23.jpg",
    posterUrl: "./assets/images/poster-23.jpg",
    title: "𝙆𝙪 𝙅𝙪𝙜𝙖 𝙢𝙚𝙣𝙘𝙞𝙣𝙩𝙖𝙞𝙢𝙪",
    album: "saiful",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-23.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-27.jpg",
    posterUrl: "./assets/images/poster-27.jpg",
    title: "𝙎𝙞𝙣𝙖𝙧 𝙋𝙚𝙡𝙖𝙣𝙜𝙞",
    album: "project band",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-27.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-22.jpg",
    posterUrl: "./assets/images/poster-22.jpg",
    title: "𝙎𝙤𝙣𝙜 𝙏𝙞𝙠𝙩𝙤𝙠",
    album: "TIKTOK",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-22.mp3",
    },    
    {  
    backgroundImage: "./assets/images/poster-7.jpg",
    posterUrl: "./assets/images/poster-7.jpg",
    title: "𝙎𝙖𝙙 𝙎𝙤𝙣𝙜 𝙏𝙞𝙠𝙩𝙤𝙠 ♫",
    album: "Manz diari",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-7.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
