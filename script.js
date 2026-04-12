// ── MOVIES DATA ──
const MOVIES = [
  // ── ENGLISH ──
/* ───────── ACTION (5) ───────── */
{
  title: "The Dark Knight",
  genre: "Action",
  language: "English",
  rating: "9.0",
  poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
},
{
  title: "Mad Max: Fury Road",
  genre: "Action",
  language: "English",
  rating: "8.1",
  poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
  trailer: "https://www.youtube.com/watch?v=hEJnMQG9ev8"
},
{
  title: "Gladiator",
  genre: "Action",
  language: "English",
  rating: "8.5",
  poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  trailer: "https://www.youtube.com/watch?v=owK1qxDselE"
},
{
  title: "John Wick",
  genre: "Action",
  language: "English",
  rating: "7.4",
  poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
  trailer: "https://www.youtube.com/watch?v=2AUmvWm5ZDQ"
},
{
  title: "Avengers: Endgame",
  genre: "Action",
  language: "English",
  rating: "8.4",
  poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
},

/* ───────── COMEDY (5) ───────── */
{
  title: "The Grand Budapest Hotel",
  genre: "Comedy",
  language: "English",
  rating: "8.1",
  poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
  trailer: "https://www.youtube.com/watch?v=1Fg5iWmQjwk"
},
{
  title: "Superbad",
  genre: "Comedy",
  language: "English",
  rating: "7.6",
  poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
  trailer: "https://www.youtube.com/watch?v=4eaZ_48ZYog"
},
{
  title: "The Hangover",
  genre: "Comedy",
  language: "English",
  rating: "7.7",
  poster: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
  trailer: "https://www.youtube.com/watch?v=tcdUhdOlz9M"
},
{
  title: "Deadpool",
  genre: "Comedy",
  language: "English",
  rating: "8.0",
  poster: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/250px-Deadpool_%282016_poster%29.png",
  trailer: "https://www.youtube.com/watch?v=ONHBaC-pfsk"
},
{
  title: "Home Alone",
  genre: "Comedy",
  language: "English",
  rating: "7.7",
  poster: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
  trailer: "https://www.youtube.com/watch?v=jEDaVHmw7r4"
},

/* ───────── ROMANCE (5) ───────── */
{
  title: "La La Land",
  genre: "Romance",
  language: "English",
  rating: "8.0",
  poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
  trailer: "https://www.youtube.com/watch?v=0pdqf4P9MB8"
},
{
  title: "Titanic",
  genre: "Romance",
  language: "English",
  rating: "7.9",
  poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
  trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ"
},
{
  title: "The Notebook",
  genre: "Romance",
  language: "English",
  rating: "7.8",
  poster: "https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg",
  trailer: "https://www.youtube.com/watch?v=FC6biTjEyZw"
},
{
  title: "Before Sunrise",
  genre: "Romance",
  language: "English",
  rating: "8.1",
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3B2XLsH0BMClaIV7BIbzt7rzrVHnNiKDwA&s",
  trailer: "https://www.youtube.com/watch?v=6MUcuqbGTxc"
},
{
  title: "About Time",
  genre: "Romance",
  language: "English",
  rating: "7.8",
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzchbnethuIbZ4qGD1Lnjhxv6hI_PRo79lZw&s",
  trailer: "https://www.youtube.com/watch?v=FwDDFsMaECg"
},

/* ───────── HORROR (5) ───────── */
{
  title: "Get Out",
  genre: "Horror",
  language: "English",
  rating: "7.7",
  poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
  trailer: "https://www.youtube.com/watch?v=DzfpyUB60YY"
},
{
  title: "The Conjuring",
  genre: "Horror",
  language: "English",
  rating: "7.5",
  poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
  trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o"
},
{
  title: "Hereditary",
  genre: "Horror",
  language: "English",
  rating: "7.3",
  poster: "https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png",
  trailer: "https://www.youtube.com/watch?v=V6wWKNij_1M"
},
{
  title: "A Quiet Place",
  genre: "Horror",
  language: "English",
  rating: "7.5",
  poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
  trailer: "https://www.youtube.com/watch?v=WR7cc5t7tv8"
},
{
  title: "It",
  genre: "Horror",
  language: "English",
  rating: "7.3",
  poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
  trailer: "https://www.youtube.com/watch?v=xKJmEC5ieOk"
},

/* ───────── SCI-FI (5) ───────── */
{
  title: "Interstellar",
  genre: "Sci-Fi",
  language: "English",
  rating: "8.6",
  poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
},
{
  title: "Inception",
  genre: "Sci-Fi",
  language: "English",
  rating: "8.8",
  poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
  trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
},
{
  title: "Dune: Part Two",
  genre: "Sci-Fi",
  language: "English",
  rating: "8.5",
  poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  trailer: "https://www.youtube.com/watch?v=Way9Dexny3w"
},
{
  title: "Arrival",
  genre: "Sci-Fi",
  language: "English",
  rating: "7.9",
  poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
  trailer: "https://www.youtube.com/watch?v=tFMo3UJ4B4g"
},
{
  title: "The Martian",
  genre: "Sci-Fi",
  language: "English",
  rating: "8.0",
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyhgES0BjxW0ZnznAjpSGmLlYewI1-7u5aA&s",
  trailer: "https://www.youtube.com/watch?v=ej3ioOneTy8"
},

/* ───────── THRILLER (5) ───────── */
{
  title: "Se7en",
  genre: "Thriller",
  language: "English",
  rating: "8.6",
  poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
  trailer: "https://www.youtube.com/watch?v=znmZoVkCjpI"
},
{
  title: "Gone Girl",
  genre: "Thriller",
  language: "English",
  rating: "8.1",
  poster: "https://i.pinimg.com/564x/07/26/ba/0726ba618e509ecb7b0f494d483441c6.jpg",
  trailer: "https://www.youtube.com/watch?v=Ym3LB0lOJ0o"
},
{
  title: "Shutter Island",
  genre: "Thriller",
  language: "English",
  rating: "8.2",
  poster: "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
  trailer: "https://www.youtube.com/watch?v=5iaYLCiq5RM"
},
{
  title: "Prisoners",
  genre: "Thriller",
  language: "English",
  rating: "8.1",
  poster: "https://image.tmdb.org/t/p/w500/uhviyknTT5cEQXbn6vWIqfM4vGm.jpg",
  trailer: "https://www.youtube.com/watch?v=bpXfcTF6iVk"
},
{
  title: "Nightcrawler",
  genre: "Thriller",
  language: "English",
  rating: "7.8",
  poster: "https://image.tmdb.org/t/p/w500/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg",
  trailer: "https://www.youtube.com/watch?v=1lEdwqwOttg"
},

/* ───────── DRAMA (5) ───────── */
{
  title: "Oppenheimer",
  genre: "Drama",
  language: "English",
  rating: "8.9",
  poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg"
},
{
  title: "The Shawshank Redemption",
  genre: "Drama",
  language: "English",
  rating: "9.3",
  poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco"
},
{
  title: "Forrest Gump",
  genre: "Drama",
  language: "English",
  rating: "8.8",
  poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
  trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg"
},
{
  title: "Whiplash",
  genre: "Drama",
  language: "English",
  rating: "8.5",
  poster: "https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBa3NM.jpg",
  trailer: "https://www.youtube.com/watch?v=7d_jQycdQGo"
},
{
  title: "The Pursuit of Happyness",
  genre: "Drama",
  language: "English",
  rating: "8.0",
  poster: "https://cdng.europosters.eu/pod_public/1300/263601.jpg",
  trailer: "https://www.youtube.com/watch?v=89Kq8SDyvfg"
},


  // ── HINDI ──
  /* ───────── ACTION (5) ───────── */
  {
    title: "War",
    genre: "Action",
    language: "Hindi",
    rating: "6.5",
    poster: "https://m.media-amazon.com/images/M/MV5BMDZmYzZiYjAtMTllZC00NDQwLWFkZGQtYzg0NjVkZTExYWJmXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=tQ0mzXRk-oM"
  },
  {
    title: "Pathaan",
    genre: "Action",
    language: "Hindi",
    rating: "5.9",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoC-6UUYraKkzLSZYTQmHCwiUDlZmesoQJw&s",
    trailer: "https://youtu.be/vqu4z34wENw?si=PvxSjzxmGRbaIoHs"
  },
  {
    title: "Singham",
    genre: "Action",
    language: "Hindi",
    rating: "6.8",
    poster: "https://m.media-amazon.com/images/I/41m2twFFkyL._UF1000,1000_QL80_.jpg",
    trailer: "https://youtu.be/mp-XqCrCi6I?si=w5q1HNPLaCv55_31"
  },
  {
    title: "Dhoom 2",
    genre: "Action",
    language: "Hindi",
    rating: "6.5",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/13/Dhoom_2_%282006_film%29_poster.jpg",
    trailer: "https://youtu.be/oRIIeyIa6nE?si=lLWcKO6XfDZi3DZy"
  },
  {
    title: "KGF: Chapter 1",
    genre: "Action",
    language: "Hindi",
    rating: "8.2",
    poster: "https://image.tmdb.org/t/p/w500/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg",
    trailer: "https://www.youtube.com/watch?v=-KfsY-qwBS0"
  },

  /* ───────── COMEDY (5) ───────── */
  {
    title: "3 Idiots",
    genre: "Comedy",
    language: "Hindi",
    rating: "8.4",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsH7PYZlHRm1ero9sy8C52it53Ui5i-JTYnQ&s",
    trailer: "https://www.youtube.com/watch?v=xvszmNXdM4w"
  },
  {
    title: "Hera Pheri",
    genre: "Comedy",
    language: "Hindi",
    rating: "8.2",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a5/Hera_Pheri_2000_poster.jpg",
    trailer: "https://www.youtube.com/watch?v=TIQ5hrfermg"
  },
  {
    title: "Bhool Bhulaiyaa",
    genre: "Comedy",
    language: "Hindi",
    rating: "7.4",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6f/Bhool_bhulaiyaa.jpg",
    trailer: "https://www.youtube.com/watch?v=ss-7iGf1xE8"
  },
  {
    title: "Welcome",
    genre: "Comedy",
    language: "Hindi",
    rating: "7.1",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Welcome_poster_2007.jpg/250px-Welcome_poster_2007.jpg",
    trailer: "https://youtu.be/AKiynoClCaA?si=0ldcHTH4GJ0zVzoU"
  },
  {
    title: "Chup Chup Ke",
    genre: "Comedy",
    language: "Hindi",
    rating: "6.9",
    poster: "https://c.saavncdn.com/078/Chup-Chup-Ke-Hindi-2006-20221122163232-500x500.jpg",
    trailer: "https://youtu.be/4icp0QbOqtE?si=5CxAalGY4wbIscM6"
  },

  /* ───────── ROMANCE (5) ───────── */
  {
    title: "Dilwale Dulhania Le Jayenge",
    genre: "Romance",
    language: "Hindi",
    rating: "8.0",
    poster: "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    trailer: "https://www.youtube.com/watch?v=c25GKl5VNeY"
  },
  {
    title: "Kabir Singh",
    genre: "Romance",
    language: "Hindi",
    rating: "7.1",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWQ3eS0EOS41UFawGPDLBHyZd8rEQgc3xcA&s",
    trailer: "https://www.youtube.com/watch?v=RiANSSgCuJk"
  },
  {
    title: "Jab We Met",
    genre: "Romance",
    language: "Hindi",
    rating: "7.9",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYs3xZfL-eqE6xxnIWJ7KYFs6XZkQR6dsGiQ&s",
    trailer: "https://youtu.be/jf2gOSORoqU?si=Xd9OhG1GnBdpAB_Y"
  },
  {
    title: "Barfi!",
    genre: "Romance",
    language: "Hindi",
    rating: "8.1",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Barfi%21_poster.jpg/250px-Barfi%21_poster.jpg",
    trailer: "https://www.youtube.com/watch?v=fDpjzEKJjsM"
  },
  {
    title: "Tamasha",
    genre: "Romance",
    language: "Hindi",
    rating: "7.3",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Tamasha_%28film_poster%29.jpg/250px-Tamasha_%28film_poster%29.jpg",
    trailer: "https://www.youtube.com/watch?v=o-e5eWVCzx8"
  },

  /* ───────── HORROR (5) ───────── */
  {
    title: "Stree",
    genre: "Horror",
    language: "Hindi",
    rating: "7.5",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4f/Stree_-_2018_Movie_Poster.jpg",
    trailer: "https://www.youtube.com/watch?v=gzeaGcLLl_A"
  },
  {
    title: "Tumbbad",
    genre: "Horror",
    language: "Hindi",
    rating: "8.2",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/41/Tumbbad_poster.jpg",
    trailer: "https://www.youtube.com/watch?v=YGIcZrUBY0k"
  },
  {
    title: "Pari",
    genre: "Horror",
    language: "Hindi",
    rating: "6.6",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Pari_-_Poster.jpg/250px-Pari_-_Poster.jpg",
    trailer: "https://www.youtube.com/watch?v=PQKu78NnyvU"
  },
  {
    title: "Raaz",
    genre: "Horror",
    language: "Hindi",
    rating: "6.6",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZygglJG2vdNjImGHbR4DPvX5-1CzN52pUoQ&s",
    trailer: "https://www.youtube.com/watch?v=O6GUoVApVkc"
  },
  {
    title: "1920",
    genre: "Horror",
    language: "Hindi",
    rating: "6.4",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMb0Lgpm4WwdCacYDG6nnUivA4O81Cw0p4MQ&s",
    trailer: "https://www.youtube.com/watch?v=yy1Fdp_h4mM"
  },

  /* ───────── SCI-FI (5) ───────── */
  {
    title: "PK",
    genre: "Sci-Fi",
    language: "Hindi",
    rating: "8.1",
    poster: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=SOXWc32k4zA"
  },
  {
    title: "Koi... Mil Gaya",
    genre: "Sci-Fi",
    language: "Hindi",
    rating: "7.1",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/b5e381d73596e61e8b4281c974bb880040c660d856aa6c7f40e69d5e799321ab.jpg",
    trailer: "https://www.youtube.com/watch?v=IBpZH-CFgZ0"
  },
  {
    title: "Krrish",
    genre: "Sci-Fi",
    language: "Hindi",
    rating: "6.4",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/17d17b0615037bb2874c8d3395edb7c8af7067d481e4a16e8e0f646799d4079c.jpg",
    trailer: "https://youtu.be/aTq7Bo_VTVM"
  },
  {
    title: "Ra.One",
    genre: "Sci-Fi",
    language: "Hindi",
    rating: "4.7",
    poster: "https://m.media-amazon.com/images/M/MV5BMzcyMjMxOTg4MF5BMl5BanBnXkFtZTcwNzEwMDE5Ng@@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=pBud7byobX0"
  },
  {
    title: "Robot (Enthiran Hindi)",
    genre: "Sci-Fi",
    language: "Hindi",
    rating: "7.1",
    poster: "https://m.media-amazon.com/images/M/MV5BNDUxOGQ5NzItYmM0ZC00YTg3LWFmZjEtOTEwZDBmMTE5Mzc1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=sY_F6issHsU"
  },

  /* ───────── THRILLER (5) ───────── */
  {
    title: "Andhadhun",
    genre: "Thriller",
    language: "Hindi",
    rating: "8.2",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/47/Andhadhun_poster.jpg",
    trailer: "https://www.youtube.com/watch?v=2iVYI99VGaw"
  },
  {
    title: "Drishyam",
    genre: "Thriller",
    language: "Hindi",
    rating: "7.5",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Drishyam_2015_film.jpg/250px-Drishyam_2015_film.jpg",
    trailer: "https://www.youtube.com/watch?v=64xJLmcA2K8"
  },
  {
    title: "Badla",
    genre: "Thriller",
    language: "Hindi",
    rating: "7.8",
    poster: "https://image.tmdb.org/t/p/w500/eKpzbERuhogYTwI3PwfVsAHXnuO.jpg",
    trailer: "https://www.youtube.com/watch?v=xHWQiok-ei0"
  },
  {
    title: "Kahaani",
    genre: "Thriller",
    language: "Hindi",
    rating: "8.1",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24cZHDx3f6N2rEdR7iAGyQKNQWFW6BTBUhw&s",
    trailer: "https://www.youtube.com/watch?v=rsjamVgPoI8"
  },
  {
    title: "Talvar",
    genre: "Thriller",
    language: "Hindi",
    rating: "8.1",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/91/TalvarFilmPoster.jpg",
    trailer: "https://www.youtube.com/watch?v=aQNMsw8Ljjc"
  },

  /* ───────── DRAMA (5) ───────── */
  {
    title: "Dangal",
    genre: "Drama",
    language: "Hindi",
    rating: "8.4",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
    trailer: "https://www.youtube.com/watch?v=x_7YlGv9u1g"
  },
  {
    title: "Taare Zameen Par",
    genre: "Drama",
    language: "Hindi",
    rating: "8.4",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/b4/Taare_Zameen_Par_Like_Stars_on_Earth_poster.png",
    trailer: "https://www.youtube.com/watch?v=NjV25jXRLxA"
  },
  {
    title: "Swades",
    genre: "Drama",
    language: "Hindi",
    rating: "8.2",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/85/Swades_poster.jpg",
    trailer: "https://www.youtube.com/watch?v=vc7AZNWvs0M"
  },
  {
    title: "Gully Boy",
    genre: "Drama",
    language: "Hindi",
    rating: "7.9",
    poster: "https://upload.wikimedia.org/wikipedia/en/0/07/Gully_Boy_poster.jpg",
    trailer: "https://www.youtube.com/watch?v=JfbxcD6biOk"
  },
  {
    title: "Article 15",
    genre: "Drama",
    language: "Hindi",
    rating: "8.1",
    poster: "https://m.media-amazon.com/images/M/MV5BYmNlMWYzN2MtODNhOC00ZTdhLTk3NzAtNzRkMTg3MWE4ZmJhXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=HKOJY0cU63E"
  },
  // ── ADDITIONAL TAMIL MOVIES ──

// ACTION
{
  title: "Kaithi",
  genre: "Action",
  language: "Tamil",
  rating: "8.5",
  poster: "https://upload.wikimedia.org/wikipedia/en/7/79/Kaithi_2019_poster.jpg",
  trailer: "https://youtu.be/g79CvhHaj5I?si=fZRIR1m0cOmztCOc"
},
{
  title: "Master",
  genre: "Action",
  language: "Tamil",
  rating: "7.4",
  poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Master_2021_poster.jpg",
  trailer: "https://youtu.be/1_iUFT3nWHk?si=rrTE5EJeEz6dG4O1"
},
{
  title: "Thuppakki",
  genre: "Action",
  language: "Tamil",
  rating: "8.1",
  poster: "https://upload.wikimedia.org/wikipedia/en/b/be/Thuppakki_poster.jpg",
  trailer: "https://youtu.be/aW_j4pNvG98?si=eDDVOuWhG_0dagei"
},
{
  title: "Mankatha",
  genre: "Action",
  language: "Tamil",
  rating: "7.7",
  poster: "https://upload.wikimedia.org/wikipedia/en/8/83/Mankatha.jpg",
  trailer: "https://youtu.be/vHESM8iR1JE?si=3GCmp2VOUajU38Hl"
},
{
  title: "Anniyan",
  genre: "Action",
  language: "Tamil",
  rating: "8.2",
  poster: "https://upload.wikimedia.org/wikipedia/en/1/16/Anniyan_poster.jpg",
  trailer: "https://youtu.be/bzAxJDtS7zE?si=rceUQU8V6sh7AcUx"
},

// COMEDY
{
  title: "Boss Engira Bhaskaran",
  genre: "Comedy",
  language: "Tamil",
  rating: "7.5",
  poster: "https://upload.wikimedia.org/wikipedia/en/e/e9/Boss_Engira_Bhaskaran.jpg",
  trailer: "https://youtu.be/XRpLTu9Cj2U?si=GdtkzXXc4qqrfRCg"
},
{
  title: "OK OK",
  genre: "Comedy",
  language: "Tamil",
  rating: "6.9",
  poster: "https://upload.wikimedia.org/wikipedia/en/f/f8/Oru_Kal_Oru_Kannadi.jpg",
  trailer: "https://youtu.be/8t-c0NIqoWc?si=4jbFMGHYZ0EAfCHq"
},
{
  title: "Kalakalappu",
  genre: "Comedy",
  language: "Tamil",
  rating: "6.8",
  poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/Kalakalappu_poster.jpg",
  trailer: "https://youtu.be/QS0YgbeJ8E0?si=HGhNOXt7OAqVDztD"
},
{
  title: "Soodhu Kavvum",
  genre: "Comedy",
  language: "Tamil",
  rating: "8.3",
  poster: "https://upload.wikimedia.org/wikipedia/en/3/31/Soodhu_Kavvum.jpg",
  trailer: "https://youtu.be/JwDc_9J9QqI?si=KjHwT-6EedhxwiDE"
},
{
  title: "Doctor",
  genre: "Comedy",
  language: "Tamil",
  rating: "7.4",
  poster: "https://upload.wikimedia.org/wikipedia/en/4/4b/Doctor_2021_poster.jpg",
  trailer: "https://youtu.be/oQiH_Iw0kDs?si=4_BW1vntJyOjFedC"
},

// ROMANCE
{
  title: "Alaipayuthey",
  genre: "Romance",
  language: "Tamil",
  rating: "8.3",
  poster: "https://upload.wikimedia.org/wikipedia/en/b/b5/Alai_Payuthey.jpg",
  trailer: "https://youtu.be/e_11XFHsXi4?si=CKtDMTubh2Gm4iQT"
},
{
  title: "Vinnaithaandi Varuvaayaa",
  genre: "Romance",
  language: "Tamil",
  rating: "8.1",
  poster: "https://upload.wikimedia.org/wikipedia/en/a/a8/Vinnaithaandi_Varuvaaya_poster.jpg",
  trailer: "https://youtu.be/9z-NeZyiyF8?si=RJn7PfLU4ldjJrlP"
},
{
  title: "OK Kanmani",
  genre: "Romance",
  language: "Tamil",
  rating: "7.4",
  poster: "https://upload.wikimedia.org/wikipedia/en/8/80/Okay_Kanmani_film_poster.jpg",
  trailer: "https://youtu.be/2mBG4vlhcCc?si=xgWemJfr4EVlW9_m"
},
{
  title: "Thiruchitrambalam",
  genre: "Romance",
  language: "Tamil",
  rating: "7.9",
  poster: "https://upload.wikimedia.org/wikipedia/en/2/24/Thiruchitrambalam_poster.jpg",
  trailer: "https://youtu.be/tNnPHz1u3RM?si=GsuXDw4v75itMoS3"
},
{
  title: "96",
  genre: "Romance",
  language: "Tamil",
  rating: "8.6",
  poster: "https://upload.wikimedia.org/wikipedia/en/c/c4/%2796_film_poster.jpg",
  trailer: "https://youtu.be/r0synl-lI4I?si=uJDYVKcxdSOphNag"
},
// HORROR
{
  title: "Pizza",
  genre: "Horror",
  language: "Tamil",
  rating: "8.0",
  poster: "https://upload.wikimedia.org/wikipedia/en/b/b9/Pizza_2012_poster.jpg",
  trailer: "https://youtu.be/fOzF87PFGnw?si=qrI3JTDWHLhsrsgs"
},
{
  title: "Demonte Colony",
  genre: "Horror",
  language: "Tamil",
  rating: "7.5",
  poster: "https://upload.wikimedia.org/wikipedia/en/9/98/Demonte_Colony.jpg",
  trailer: "https://youtu.be/so6-G5pfmtM?si=Zp3V5ZAQesZQ1ZyC"
},
{
  title: "Maya",
  genre: "Horror",
  language: "Tamil",
  rating: "7.2",
  poster: "https://upload.wikimedia.org/wikipedia/en/8/85/Maya_%282015_Tamil_film%29.jpg",
  trailer: "https://youtu.be/7x43dvfqYSE?si=C7kRMpbeoPdQowut"
},
{
  title: "Aval",
  genre: "Horror",
  language: "Tamil",
  rating: "7.0",
  poster: "https://upload.wikimedia.org/wikipedia/en/6/68/The_House_Next_Door_-_Poster.jpg",
  trailer: "https://youtu.be/Ft1KvQNteYY?si=_JnhKQxo9PoBEEZg"
},
{
  title: "Game Over",
  genre: "Horror",
  language: "Tamil",
  rating: "7.1",
  poster: "https://upload.wikimedia.org/wikipedia/en/8/84/Game_Over_2019_poster.jpg",
  trailer: "https://youtu.be/JUswBxwJvaQ?si=DTJ6nDMUWEFgm4PH"
},

// SCI-FI
{
  title: "Enthiran",
  genre: "Sci-Fi",
  language: "Tamil",
  rating: "7.1",
  poster: "https://upload.wikimedia.org/wikipedia/en/0/0f/Enthiran_poster.jpg",
  trailer: "https://youtu.be/sY_F6issHsU?si=6841_9xzLU5qm7bJ"
},
{
  title: "2.0",
  genre: "Sci-Fi",
  language: "Tamil",
  rating: "6.2",
  poster: "https://translate.google.com/website?sl=en&tl=ta&hl=ta&client=srp&u=https://upload.wikimedia.org/wikipedia/en/c/cf/2.0_film_poster.jpg",
  trailer: "https://youtu.be/jrETX2eDhL8?si=K3IATDkorguyz0vx"
},
{
  title: "Indru Netru Naalai",
  genre: "Sci-Fi",
  language: "Tamil",
  rating: "8.1",
  poster: "https://translate.google.com/website?sl=en&tl=ta&hl=ta&client=srp&u=https://upload.wikimedia.org/wikipedia/en/5/5e/Indru_Netru_Naalai.jpg",
  trailer: "https://youtu.be/6YnVOsmfBQU?si=fLnHn37Aq8h7NbTe"
},
{
  title: "24",
  genre: "Sci-Fi",
  language: "Tamil",
  rating: "7.8",
  poster: "https://upload.wikimedia.org/wikipedia/en/7/79/24_%282016_film%29_poster.jpg",
  trailer: "https://youtu.be/wqXE_es_I3M?si=tFjzw6pkZu-TthTR"
},
{
  title: "Tik Tik Tik",
  genre: "Sci-Fi",
  language: "Tamil",
  rating: "6.4",
  poster: "https://upload.wikimedia.org/wikipedia/en/6/6e/Tik_Tik_Tik_Poster.jpg",
  trailer: "https://youtu.be/6ug9zvC9pJM?si=-ddr_vvUZaXxJ5-F"
},

// THRILLER
{
  title: "Ratsasan",
  genre: "Thriller",
  language: "Tamil",
  rating: "8.3",
  poster: "https://upload.wikimedia.org/wikipedia/en/7/77/Ratsasan_poster.jpg",
  trailer: "https://youtu.be/GsrN7rNch9Y?si=U3HBJeqqsu5vanHw"
},
{
  title: "Thani Oruvan",
  genre: "Thriller",
  language: "Tamil",
  rating: "8.4",
  poster: "https://upload.wikimedia.org/wikipedia/en/f/f1/Thani_Oruvan.jpg",
  trailer: "https://youtu.be/r5Lih8rKd6k?si=EAaXZ1OM41Jky8FX"
},
{
  title: "Dhruvangal 16",
  genre: "Thriller",
  language: "Tamil",
  rating: "8.2",
  poster: "https://upload.wikimedia.org/wikipedia/en/3/35/Dhuruvangal_Pathinaaru_Poster.jpg",
  trailer: "https://youtu.be/xpt2jfiL5GY?si=PEolrTcs7-pywyK6"
},
{
  title: "Anjathe",
  genre: "Thriller",
  language: "Tamil",
  rating: "8.1",
  poster: "https://upload.wikimedia.org/wikipedia/en/b/bd/Anjathe.jpg",
  trailer: "https://youtu.be/qdB--HcIRKw?si=nyXpSnvXHaRFkcV7"
},
{
  title: "Imaikkaa Nodigal",
  genre: "Thriller",
  language: "Tamil",
  rating: "7.3",
  poster: "https://upload.wikimedia.org/wikipedia/en/f/fa/Imaikkaa_Nodigal_poster.jpg",
  trailer: "https://youtu.be/Q0QoCgbwPjs?si=q3y0mRxtYeuKrbYX"
},

// DRAMA
{
  title: "Super Deluxe",
  genre: "Drama",
  language: "Tamil",
  rating: "8.4",
  poster: "https://upload.wikimedia.org/wikipedia/en/a/a1/Super_Deluxe_film_poster.jpg",
  trailer: "https://youtu.be/3-Xq_Zz3nPA?si=0-JCigw4sA42JY0i"
},
{
  title: "Jai Bhim",
  genre: "Drama",
  language: "Tamil",
  rating: "8.8",
  poster: "https://upload.wikimedia.org/wikipedia/en/a/ad/Jai_Bhim_film_poster.jpg",
  trailer: "https://youtu.be/Gc6dEDnL8JA?si=RWxJV6S2iWnVvHUX"
},
{
  title: "Asuran",
  genre: "Drama",
  language: "Tamil",
  rating: "8.5",
  poster: "https://upload.wikimedia.org/wikipedia/en/7/78/Asuran_2019_poster.jpg",
  trailer: "https://youtu.be/vOCM9wztBYQ?si=8RQRA4sQ-g_4pwbj"
},
{
  title: "Visaranai",
  genre: "Drama",
  language: "Tamil",
  rating: "8.5",
  poster: "https://upload.wikimedia.org/wikipedia/en/0/01/Visaranai_film_release_poster.jpg",
  trailer: "https://youtu.be/4mnzK2KIz9U?si=QjaQ_2op_kCFW16N"
},
{
  title: "Pariyerum Perumal",
  genre: "Drama",
  language: "Tamil",
  rating: "8.8",
  poster: "https://upload.wikimedia.org/wikipedia/en/3/35/Pariyerum_Perumal.jpg",
  trailer: "https://youtu.be/GMNsUxJe4R4?si=hVVUW40DXr8L5zPm"
},
// ── TELUGU ──

/* ───────── ACTION (5) ───────── */
{
  title: "RRR",
  genre: "Action",
  language: "Telugu",
  rating: "8.0",
  poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
  trailer: "https://youtu.be/NgBoMJy386M?si=3u5oOd6CNfT6fBpY"
},
{
  title: "Baahubali: The Beginning",
  genre: "Action",
  language: "Telugu",
  rating: "8.0",
  poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg",
  trailer: "https://youtu.be/3NQRhE772b0?si=5hkyrVzAooTxUUlD"
},
{
  title: "Baahubali: The Conclusion",
  genre: "Action",
  language: "Telugu",
  rating: "8.2",
  poster: "https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg",
  trailer: "https://youtu.be/qD-6d8Wo3do?si=mPQYZsmGGkElcb23"
},
{
  title: "Pushpa: The Rise",
  genre: "Action",
  language: "Telugu",
  rating: "7.6",
  poster: "https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg",
  trailer: "https://youtu.be/Q1NKMPhP8PY?si=MGvvPhRwDg5owUao"
},
{
  title: "Saaho",
  genre: "Action",
  language: "Telugu",
  rating: "5.2",
  poster: "https://upload.wikimedia.org/wikipedia/en/6/6b/Saaho_poster.jpg",
  trailer: "https://youtu.be/HNnt00swZ5Q?si=YnUnQ5KXPdOcPJ6s"
},

/* ───────── COMEDY (5) ───────── */
{
  title: "F2: Fun and Frustration",
  genre: "Comedy",
  language: "Telugu",
  rating: "6.1",
  poster: "https://upload.wikimedia.org/wikipedia/en/c/c6/F2_Fun_and_Frustration.jpg",
  trailer: "https://youtu.be/XttQbFKkeHQ?si=qTKZj7rx3lZS6_k6"
},
{
  title: "Jathi Ratnalu",
  genre: "Comedy",
  language: "Telugu",
  rating: "7.3",
  poster: "https://translate.google.com/website?sl=en&tl=te&hl=te&client=srp&u=https://upload.wikimedia.org/wikipedia/en/7/7e/Jathi_Ratnalu_poster.jpg",
  trailer: "https://youtu.be/Hgc07_BX4_8?si=XuJ5wQEkf6JDosnJ"
},
{
  title: "DJ Tillu",
  genre: "Comedy",
  language: "Telugu",
  rating: "7.2",
  poster: "https://upload.wikimedia.org/wikipedia/en/3/3c/DJ_Tillu_poster.jpg",
  trailer: "https://youtu.be/CRFnqrv9pEg?si=XPCfNe5ijqKBUdkt"
},
{
  title: "Ready",
  genre: "Comedy",
  language: "Telugu",
  rating: "7.3",
  poster: "https://upload.wikimedia.org/wikipedia/te/thumb/7/72/TeluguFilm_Ready.jpg/500px-TeluguFilm_Ready.jpg",
  trailer: "https://youtu.be/3iTUJSSJ7us?si=WEfY9vvPYyJywGk8"
},
{
  title: "Dhee",
  genre: "Comedy",
  language: "Telugu",
  rating: "7.5",
  poster: "https://translate.google.com/website?sl=en&tl=te&hl=te&client=srp&u=https://upload.wikimedia.org/wikipedia/en/c/c2/Dhee_%2528movie_poster%2529.jpg",
  trailer: "https://youtu.be/BAWRUR15bq8?si=pUDdhSknUN9GYvnb"
},

/* ───────── ROMANCE (5) ───────── */
{
  title: "Geetha Govindam",
  genre: "Romance",
  language: "Telugu",
  rating: "7.7",
  poster: "https://upload.wikimedia.org/wikipedia/en/4/46/Geetha_Govindam.jpg",
  trailer: "https://youtu.be/qHqWRCxhcOk?si=WUtGrAPRIzGJG5I-"
},
{
  title: "Arjun Reddy",
  genre: "Romance",
  language: "Telugu",
  rating: "8.1",
  poster: "https://upload.wikimedia.org/wikipedia/en/4/46/Arjun_Reddy.jpg",
  trailer: "https://youtu.be/aozErj9NqeE?si=AMITD2qyB4ryLX3y"
},
{
  title: "Majili",
  genre: "Romance",
  language: "Telugu",
  rating: "7.2",
  poster: "https://upload.wikimedia.org/wikipedia/en/7/79/Majili_Film_Poster.jpg",
  trailer: "https://youtu.be/R9VF3m7UiLw?si=lDBDlnXLy3wRgo2q"
},
{
  title: "Tholi Prema",
  genre: "Romance",
  language: "Telugu",
  rating: "7.5",
  poster: "https://upload.wikimedia.org/wikipedia/en/7/7d/Tholi_Prema.jpg",
  trailer: "https://youtu.be/-kFvrsAgp3M?si=IDim53XzRWn8kkzP"
},
{
  title: "Pelli Choopulu",
  genre: "Romance",
  language: "Telugu",
  rating: "8.2",
  poster: "https://upload.wikimedia.org/wikipedia/en/b/b3/Pelli_Choopulu_poster.jpg",
  trailer: "https://youtu.be/9v9nESxBpqU?si=ry6Duef_TLxk_Og7"
},

/* ───────── HORROR (5) ───────── */
{
  title: "Arundhati",
  genre: "Horror",
  language: "Telugu",
  rating: "7.4",
  poster: "https://upload.wikimedia.org/wikipedia/en/a/a3/Arundhati.jpg",
  trailer: "https://youtu.be/zzF2HOEzPf8?si=j1k6zXJJAM198GDM"
},
{
  title: "Raju Gari Gadhi",
  genre: "Horror",
  language: "Telugu",
  rating: "7.0",
  poster: "https://upload.wikimedia.org/wikipedia/en/0/07/Raju_Gari_Gadhi_Telugu_Posters.jpg",
  trailer: "https://youtu.be/YBrooCamrbY?si=C5PJsKQ02vhhwA6b"
},
{
  title: "Kanchana (Muni 2)",
  genre: "Horror",
  language: "Telugu",
  rating: "6.6",
  poster: "https://upload.wikimedia.org/wikipedia/en/3/37/Kanchana_2011_poster.jpg",
  trailer: "https://youtu.be/MtP3iqRRO2g?si=vtyLFO4zRoqhGug_"
},
{
  title: "Avunu",
  genre: "Horror",
  language: "Telugu",
  rating: "6.8",
  poster: "https://upload.wikimedia.org/wikipedia/en/7/75/First_look_of_Avunu.jpg",
  trailer: "https://youtu.be/KIFJNawbIFQ?si=H5sfCUyyvUaYihM-"
},
{
  title: "Ekkadiki Pothavu Chinnavada",
  genre: "Horror",
  language: "Telugu",
  rating: "7.2",
  poster: "https://upload.wikimedia.org/wikipedia/en/4/44/Ekkadiki_Pothavu_Chinnavada.jpg",
  trailer: "https://youtu.be/-RQ1vIOPjXM?si=T9Z98mM4wZDsr5rc"
},

/* ───────── SCI-FI (5) ───────── */
{
  title: "Aditya 369",
  genre: "Sci-Fi",
  language: "Telugu",
  rating: "8.1",
  poster: "https://upload.wikimedia.org/wikipedia/en/3/3d/Aditya_369_poster.jpg",
  trailer: "https://youtu.be/ARN4L8UFp4M?si=lNh25B0nYStQ7F0L"
},
{
  title: "Eega",
  genre: "Sci-Fi",
  language: "Telugu",
  rating: "7.7",
  poster: "https://upload.wikimedia.org/wikipedia/en/3/30/Eega_poster.jpg",
  trailer: "https://youtu.be/x-1ZoU1xB4I?si=Fr_3PBQY10qXr9-4"
},
{
  title: "Okka Kshanam",
  genre: "Sci-Fi",
  language: "Telugu",
  rating: "6.5",
  poster: "https://upload.wikimedia.org/wikipedia/en/b/b3/Okka_Kshanam.jpg",
  trailer: "https://youtu.be/39IUXrqOCys?si=zyDkfQES6TUeZUM4"
},
{
  title: "Project K (Kalki 2898 AD)",
  genre: "Sci-Fi",
  language: "Telugu",
  rating: "8.3",
  poster: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kalki_2898_AD.jpg",
  trailer: "https://youtu.be/bC36d8e3bb0?si=NxxeoLT5Q5Jxbkjm"
},
{
  title: "Antariksham 9000 KMPH",
  genre: "Sci-Fi",
  language: "Telugu",
  rating: "6.8",
  poster: "https://upload.wikimedia.org/wikipedia/en/8/87/Antariksham_9000_KMPH.jpeg",
  trailer: "https://youtu.be/MTXXMDfIicA?si=0Gj33wVVYm57RbLI"
},

/* ───────── THRILLER (5) ───────── */
{
  title: "Evaru",
  genre: "Thriller",
  language: "Telugu",
  rating: "8.1",
  poster: "https://upload.wikimedia.org/wikipedia/en/b/b5/Evaru_Poster.jpg",
  trailer: "https://youtu.be/TfW6lil5uyc?si=hK-rSNKvYIKtSkT1"
},
{
  title: "Goodachari",
  genre: "Thriller",
  language: "Telugu",
  rating: "7.8",
  poster: "https://upload.wikimedia.org/wikipedia/en/b/ba/Goodachari.jpg",
  trailer: "https://youtu.be/lysoF97MOMk?si=9s87JyM3T5SaiG8S"
},
{
  title: "Kshanam",
  genre: "Thriller",
  language: "Telugu",
  rating: "8.2",
  poster: "https://upload.wikimedia.org/wikipedia/en/0/0d/Kshanam_poster.jpg",
  trailer: "https://youtu.be/OroFSmQQm1U?si=0--U7jJqOnBQqfny"
},
{
  title: "Hit: The First Case",
  genre: "Thriller",
  language: "Telugu",
  rating: "7.7",
  poster: "https://upload.wikimedia.org/wikipedia/en/1/12/HIT_The_First_Case.jpg",
  trailer: "https://youtu.be/JtdCIn47v5g?si=2bOPoADYooKb8iZf"
},
{
  title: "Agent Sai Srinivasa Athreya",
  genre: "Thriller",
  language: "Telugu",
  rating: "8.3",
  poster: "https://upload.wikimedia.org/wikipedia/en/6/61/Agent_Sai_Srinivasa_Athreya_poster.jpg",
  trailer: "https://youtu.be/iPfVbR5oAWE?si=iL-DhZ-dhSn1gUqC"
},

/* ───────── DRAMA (5) ───────── */
{
  title: "C/o Kancharapalem",
  genre: "Drama",
  language: "Telugu",
  rating: "8.8",
  poster: "https://upload.wikimedia.org/wikipedia/en/d/d3/C-o_Kancharapalem.jpg",
  trailer: "https://youtu.be/-YeQZwlNeaY?si=igRuiormXOTSVW30"
},
{
  title: "Mahanati",
  genre: "Drama",
  language: "Telugu",
  rating: "8.4",
  poster: "https://upload.wikimedia.org/wikipedia/en/1/1d/Mahanati_poster.jpg",
  trailer: "https://youtu.be/PLmBpf7UHJs?si=C9DxpvrNaUC0Ktr9"
},
{
  title: "Jersey",
  genre: "Drama",
  language: "Telugu",
  rating: "8.5",
  poster: "https://upload.wikimedia.org/wikipedia/en/1/10/Jersey_2019_poster.jpg",
  trailer: "https://youtu.be/AjAe_Q1WZ_8?si=ZkJfLpZRA5BwTKVf"
},
{
  title: "Vedam",
  genre: "Drama",
  language: "Telugu",
  rating: "8.1",
  poster: "https://upload.wikimedia.org/wikipedia/en/3/3c/Vedam-poster.jpg",
  trailer: "https://youtu.be/ueZj5P3r2GY?si=dFW4Q1djMRLTWbDu"
},
{
  title: "Leader",
  genre: "Drama",
  language: "Telugu",
  rating: "8.0",
  poster: "https://upload.wikimedia.org/wikipedia/en/8/8f/Leader_2010_poster.jpg",
  trailer: "https://youtu.be/72IctULfaAE?si=S2KGLut4P2dbANjs"
},
];


// ── DOM REFERENCES ──
const genreSelect    = document.getElementById("genreSelect");
const langSelect     = document.getElementById("langSelect");
const recommendBtn   = document.getElementById("recommendBtn");
const movieGrid      = document.getElementById("movieGrid");
const noResults      = document.getElementById("noResults");
const loader         = document.getElementById("loader");
const resultsMeta    = document.getElementById("resultsMeta");
const resultsSection = document.getElementById("resultsSection");
const resetBtn       = document.getElementById("resetBtn");


// ── RENDER MOVIES ──
function renderMovies(movies) {
  movieGrid.innerHTML = "";

  if (movies.length === 0) {
    noResults.classList.add("active");
    resultsMeta.textContent = "";
    return;
  }

  noResults.classList.remove("active");

  const genreVal = genreSelect.value;
  const langVal  = langSelect.value;

  let metaParts = [];
  if (genreVal !== "all") metaParts.push(`genre: ${genreVal}`);
  if (langVal  !== "all") metaParts.push(`language: ${langVal}`);

  const filterStr = metaParts.length ? ` · ${metaParts.join(" · ")}` : "";
  resultsMeta.innerHTML = `<span>${movies.length}</span> flick${movies.length !== 1 ? "s" : ""} found${filterStr}`;

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <div class="card-poster">
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="rating-badge">⭐ ${movie.rating}</div>
        <div class="genre-pill">${movie.genre}</div>
      </div>
      <div class="card-body">
        <div class="card-title">${movie.title}</div>
        <div class="card-meta">${movie.language}</div>
        <div class="teaser-btn">
          <a href="${movie.trailer}" target="_blank">▶ Watch Teaser</a>
        </div>
      </div>
    `;

    movieGrid.appendChild(card);
  });
}


// ── FILTER LOGIC ──
function filterMovies() {
  const genre  = genreSelect.value;
  const lang   = langSelect.value;

  return MOVIES.filter(movie => {
    const matchGenre = genre === "all" || movie.genre === genre;
    const matchLang  = lang  === "all" || movie.language === lang;
    return matchGenre && matchLang;
  });
}


// ── RECOMMEND ──
function recommend() {
  resultsSection.scrollIntoView({ behavior: "smooth" });

  loader.classList.add("active");
  movieGrid.innerHTML = "";
  noResults.classList.remove("active");
  resultsMeta.textContent = "";

  setTimeout(() => {
    loader.classList.remove("active");
    renderMovies(filterMovies());
  }, 500);
}


// ── RESET ──
function resetFilters() {
  genreSelect.value = "all";
  langSelect.value  = "all";
  recommend();
}


// ── EVENTS ──
recommendBtn.addEventListener("click", recommend);
resetBtn.addEventListener("click", resetFilters);


// ── INITIAL LOAD ──
window.addEventListener("DOMContentLoaded", () => {
  renderMovies(MOVIES);
});