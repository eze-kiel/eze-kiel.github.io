const mediaLibrary = [
    {
        title: 'Lost (S1-2)',
        author: 'J. J. Abrams',
        cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fTJtenFfz9ZoH97R0fBvun6KR8v.jpg',
        rating: 3,
        favorite: false,
        readDate: '2024-09-01',
        kind: 'serie',
        link: 'https://www.themoviedb.org/tv/4607-lost'
},
    // BOOKS \\
    {
        title: "This Is How They Tell Me the World Ends",
        author: "Nicole Perlroth",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610927353i/49247043.jpg",
        rating: 5,
        favorite: true,
        link: "https://www.goodreads.com/book/show/49247043-this-is-how-they-tell-me-the-world-ends",
        readDate: "2024-01-20",
        kind: "book"
    },
    {
        title: "La Horde du Contre-Vent",
        author: "Alain Damasio",
        cover: "https://m.media-amazon.com/images/I/81xxBCSH9eL._AC_UF1000,1000_QL80_.jpg",
        rating: 5,
        favorite: true,
        link: "https://www.goodreads.com/book/show/1397743.La_Horde_du_Contrevent",
        readDate: "2024-02-20",
        kind: "book"
    },
    {
        title: "Walden",
        author: "Henry David Thoreau",
        cover: "https://m.media-amazon.com/images/I/41Wl3lTr+uL._AC_UF1000,1000_QL80_.jpg",
        rating: 4,
        link: "https://www.goodreads.com/book/show/16902.Walden",
        readDate: "2024-03-20",
        kind: "book"
    },
    {
        title: "Fondation",
        author: "Isaac Asimov",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1171839380i/122363.jpg",
        rating: 3,
        link: "https://www.goodreads.com/book/show/122363.Fondation",
        readDate: "2024-07-20",
        kind: "book"
    },
    {
        title: "Ravage",
        author: "René Barjavel",
        cover: "https://m.media-amazon.com/images/I/81--VV+ZXrL.jpg",
        rating: 4,
        link: "https://www.goodreads.com/book/show/106751.Ravage?ref=nav_sb_ss_1_21",
        readDate: "2024-09-20",
        kind: "book"
    },
    {
        title: "Le Combat Ordinaire",
        author: "Manu Larcenet",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1338190149i/9335032.jpg",
        rating: 5,
        link: "https://www.goodreads.com/book/show/9335032-le-combat-ordinaire",
        readDate: "2024-10-20",
        kind: "book"
    },
    {
        title: "2001: L'Odyssée de l'espace",
        author: "Arthur C. Clarke",
        cover: "https://static.fnac-static.com/multimedia/Images/FR/NR/56/5c/d4/13917270/1507-1/tsp20221111071950/2001-L-Odyee-de-l-espace.jpg",
        rating: 5,
        link: "https://www.goodreads.com/book/show/1453765.2001",
        readDate: "2024-11-20",
        kind: "book"
    },
    
    // MOVIES \\
    {
        title: "Million Dollar Baby",
        author: "Client Eastwood",
        cover: "https://a.ltrbxd.com/resized/film-poster/5/1/9/7/9/51979-million-dollar-baby-0-1000-0-1500-crop.jpg?v=0003198e90",
        rating: 5,
        favorite: true,
        link: "http://www.imdb.com/title/tt0405159/",
        readDate: "2024-01-16",
        kind: "movie"
    },
    {
        title: "Gone Baby Gone",
        author: "Ben Affleck",
        cover: "https://a.ltrbxd.com/resized/sm/upload/xm/5m/yt/zm/zE200jBb0VmFhyNGH7uL2vB6vYd-0-1000-0-1500-crop.jpg?v=9824ab0f36",
        rating: 5,
        link: "http://www.imdb.com/title/tt0452623/",
        readDate: "2024-01-17",
        kind: "movie"
    },
    {
        title: "Bullet Train",
        author: "David Leitch",
        cover: "https://a.ltrbxd.com/resized/film-poster/6/4/1/9/6/1/641961-bullet-train-0-1000-0-1500-crop.jpg?v=9245faa1ba",
        rating: 4,
        link: "http://www.imdb.com/title/tt12593682/",
        readDate: "2024-01-19",
        kind: "movie"
    },
    {
        title: "I Don't Feel at Home in This World Anymore",
        author: "Macon Blair",
        cover: "https://a.ltrbxd.com/resized/sm/upload/yj/n6/fj/uz/ipgGuBqTxja4KiSwiBn3pMRvV2a-0-1000-0-1500-crop.jpg?v=2e71ff6d03",
        rating: 3.5,
        link: "http://www.imdb.com/title/tt5710514/",
        readDate: "2024-01-23",
        kind: "movie"
    },
    {
        title: "Army of One",
        author: "Larry Charles",
        cover: "https://a.ltrbxd.com/resized/film-poster/2/6/5/7/4/8/265748-army-of-one-0-1000-0-1500-crop.jpg?v=e8282fdc31",
        rating: 1.5,
        link: "http://www.imdb.com/title/tt4382824/",
        readDate: "2024-01-23",
        kind: "movie"
    },
    {
        title: "Kill Bill: Vol. 1",
        author: "Quentin Tarantino",
        cover: "https://a.ltrbxd.com/resized/sm/upload/sw/w2/ep/v4/9O50TVszkz0dcP5g6Ej33UhR7vw-0-1000-0-1500-crop.jpg?v=5a65f5202f",
        rating: 4.5,
        link: "http://www.imdb.com/title/tt0266697/",
        readDate: "2024-01-27",
        kind: "movie"
    },
    {
        title: "Kill Bill: Vol. 2",
        author: "Quentin Tarantino",
        cover: "https://a.ltrbxd.com/resized/sm/upload/ka/7q/dh/8m/bxbX4sHZHcy81dnNs4VAVs7HXDL-0-1000-0-1500-crop.jpg?v=52e9a07730",
        rating: 4,
        link: "http://www.imdb.com/title/tt0378194/",
        readDate: "2024-01-28",
        kind: "movie"
    },
    {
        title: "Reservoir Dogs",
        author: "Quentin Tarantino",
        cover: "https://a.ltrbxd.com/resized/sm/upload/u0/4o/op/yx/g7spS2Y4SZoQoC6Hn7zoqEqdYqR-0-1000-0-1500-crop.jpg?v=6d1aaa720c",
        rating: 4,
        link: "http://www.imdb.com/title/tt0105236/",
        readDate: "2024-01-28",
        kind: "movie"
    },
    {
        title: "They Cloned Tyrone",
        author: "Juel Taylor",
        cover: "https://a.ltrbxd.com/resized/film-poster/6/5/8/9/0/6/658906-they-cloned-tyrone-0-1000-0-1500-crop.jpg?v=afe533ab4e",
        rating: 4,
        link: "https://www.imdb.com/title/tt9873892/",
        readDate: "2024-02-12",
        kind: "movie"
    },
    {
        title: "Longlegs",
        author: "Osgood Perkins",
        cover: "https://a.ltrbxd.com/resized/film-poster/1/1/1/0/0/5/9/1110059-longlegs-0-1000-0-1500-crop.jpg?v=9d77241a8c",
        rating: 2,
        link: "http://www.imdb.com/title/tt23468450/",
        readDate: "2024-09-01",
        kind: "movie"
    },
    {
        title: "Everything Everywhere All at Once",
        author: "Daniel Scheinert, Daniel Kwan",
        cover: "https://a.ltrbxd.com/resized/film-poster/4/7/4/4/7/4/474474-everything-everywhere-all-at-once-0-1000-0-1500-crop.jpg?v=281f1a041e",
        rating: 4,
        link: "http://www.imdb.com/title/tt6710474/",
        readDate: "2024-10-01",
        kind: "movie"
    },
    {
        title: "John Wick",
        author: "Chad Stahelski",
        cover: "https://a.ltrbxd.com/resized/film-poster/1/7/2/0/7/6/172076-john-wick-0-1000-0-1500-crop.jpg?v=e3c8c69b11",
        rating: 4.5,
        link: "http://www.imdb.com/title/tt2911666/",
        readDate: "2024-11-01",
        kind: "movie"
    },

    // SERIES \\
    {
        title: "Severance (S1)",
        author: "Dan Erickson",
        cover: "https://m.media-amazon.com/images/I/61Ff6obgKYL._AC_UF894,1000_QL80_.jpg",
        rating: 4.5,
        link: "https://www.themoviedb.org/tv/95396-severance",
        readDate: "2024-01-01",
        kind: "serie"
    },
    {
        title: "Fiasco (S1)",
        author: "Igor Gotesman",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mxzF3PMICswCoPxHmkQVYV7XRkU.jpg",
        rating: 4,
        link: "https://www.themoviedb.org/tv/221120-fiasco",
        readDate: "2024-04-30",
        kind: "serie"
    },
    {
        title: "The Bear (S1-3)",
        author: "Christopher Storer",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3MVHF64rlvH1eofKefIoazXwOK0.jpg",
        rating: 4,
        link: "https://www.themoviedb.org/tv/136315-the-bear",
        readDate: "2024-06-01",
        kind: "serie"
    },
    {
        title: "Slow Horses (S1-2)",
        author: "James Hawew, Jeremy Lovering",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dnpatlJrEPiDSn5fzgzvxtiSnMo.jpg",
        rating: 4,
        link: "https://www.themoviedb.org/tv/95480-slow-horses",
        readDate: "2024-11-01",
        kind: "serie"
    },
    {
        title: "Kaos (S1)",
        author: "Charlie Covell",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dDBTUSl3tRsOeKC1jZugBSFHy9I.jpg",
        rating: 3.5,
        link: "https://www.themoviedb.org/tv/102621-kaos",
        readDate: "2024-11-01",
        kind: "serie"
    },
    {
        title: "Family Business (S1-3)",
        author: "Igor Gotesman",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xj8rrY53f5RtrhoI2Zliz3DPU31.jpg",
        rating: 3.5,
        link: "https://www.themoviedb.org/tv/89785-family-business",
        readDate: "2024-12-01",
        kind: "serie"
    },
];
