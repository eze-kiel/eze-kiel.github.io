const mediaLibrary = [
    {
        title: 'Lost (S1-2)',
        author: 'J. J. Abrams',
        cover: 'assets/series/lost.jpg',
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
        cover: "assets/books/this-is-how-they-tell-me.jpg",
        rating: 5,
        favorite: true,
        link: "https://www.goodreads.com/book/show/49247043-this-is-how-they-tell-me-the-world-ends",
        readDate: "2024-01-20",
        kind: "book"
    },
    {
        title: "La Horde du Contre-Vent",
        author: "Alain Damasio",
        cover: "assets/books/la-horde-du-contrevent.jpg",
        rating: 5,
        favorite: true,
        link: "https://www.goodreads.com/book/show/1397743.La_Horde_du_Contrevent",
        readDate: "2024-02-20",
        kind: "book"
    },
    {
        title: "Walden",
        author: "Henry David Thoreau",
        cover: "assets/books/walden.jpg",
        rating: 4,
        reRead: true,
        link: "https://www.goodreads.com/book/show/16902.Walden",
        readDate: "2024-03-20",
        kind: "book"
    },
    {
        title: "Fondation",
        author: "Isaac Asimov",
        cover: "assets/books/fondation.jpg",
        rating: 3,
        link: "https://www.goodreads.com/book/show/122363.Fondation",
        readDate: "2024-07-20",
        kind: "book"
    },
    {
        title: "Ravage",
        author: "René Barjavel",
        cover: "assets/books/ravage.jpg",
        rating: 4,
        link: "https://www.goodreads.com/book/show/106751.Ravage",
        readDate: "2024-09-20",
        kind: "book"
    },
    {
        title: "Le Combat Ordinaire",
        author: "Manu Larcenet",
        cover: "assets/books/le-combat-ordinaire.jpg",
        rating: 5,
        favorite: true,
        link: "https://www.goodreads.com/book/show/9335032-le-combat-ordinaire",
        readDate: "2024-10-20",
        kind: "book"
    },
    {
        title: "2001: L'Odyssée de l'espace",
        author: "Arthur C. Clarke",
        cover: "assets/books/2001-l-odysee-de-l-espace.jpg",
        rating: 5,
        link: "https://www.goodreads.com/book/show/1453765.2001",
        readDate: "2024-11-20",
        kind: "book"
    },
    {
        title: "Menaces sur le réseau",
        author: "Michal Zalewski",
        cover: "assets/books/menaces-sur-le-reseau.jpg",
        rating: 4.5,
        favorite: true,
        reRead: true,
        link: "https://www.goodreads.com/book/show/12652707-menaces-sur-le-r-seau",
        readDate: "2025-01-30",
        kind: "book"
    },
    {
        title: 'Du côté de chez Swann',
        author: 'Marcel Proust',
        cover: 'assets/books/du-cote-de-chez-swann.jpg',
        rating: 2,
        favorite: false,
        readDate: '2025-02-05',
        kind: 'book',
        link: 'https://www.goodreads.com/book/show/865069'
    },
    {
        title: 'De la guerre comme politique étrangère des États-Unis',
        author: 'Noam Chomsky',
        cover: 'assets/books/de-la-guerre-comme-politique.jpg',
        rating: 4,
        favorite: true,
        readDate: '2025-03-04',
        kind: 'book',
        link: 'https://www.goodreads.com/book/show/2416260.De_la_guerre_comme_politique_trang_re_des_Etats_Unis'
    },
    {
        title: 'War and Punishment',
        author: 'Mikhail Zygar',
        cover: 'assets/books/war-and-punishment.jpg',
        rating: 2.5,
        favorite: false,
        readDate: '2025-03-20',
        kind: 'book',
        link: 'https://www.goodreads.com/book/show/63923934-war-and-punishment'
    },
    {
        title: 'Flatland',
        author: 'Edwin Abott²',
        cover: 'assets/books/flatland.jpg',
        rating: 3.5,
        favorite: false,
        readDate: '2025-04-14',
        kind: 'book',
        link: 'https://www.goodreads.com/book/show/433567.Flatland'
    },
    // END OF BOOKS
    // MOVIES \\
    {
        title: "Million Dollar Baby",
        author: "Clint Eastwood",
        cover: "assets/movies/million-dollar-baby.jpg",
        rating: 5,
        favorite: true,
        link: "http://www.imdb.com/title/tt0405159/",
        readDate: "2024-01-16",
        kind: "movie"
    },
    {
        title: "Gone Baby Gone",
        author: "Ben Affleck",
        cover: "assets/movies/gone-baby-gone.jpg",
        rating: 5,
        link: "http://www.imdb.com/title/tt0452623/",
        readDate: "2024-01-17",
        kind: "movie"
    },
    {
        title: "Bullet Train",
        author: "David Leitch",
        cover: "assets/movies/bullet-train.jpg",
        rating: 4,
        link: "http://www.imdb.com/title/tt12593682/",
        readDate: "2024-01-19",
        kind: "movie"
    },
    {
        title: "I Don't Feel at Home in This World Anymore",
        author: "Macon Blair",
        cover: "assets/movies/i-dont-feel-at-home-anymore.jpg",
        rating: 3.5,
        link: "http://www.imdb.com/title/tt5710514/",
        readDate: "2024-01-23",
        kind: "movie"
    },
    {
        title: "Army of One",
        author: "Larry Charles",
        cover: "assets/movies/army-of-one.jpg",
        rating: 1.5,
        link: "http://www.imdb.com/title/tt4382824/",
        readDate: "2024-01-23",
        kind: "movie"
    },
    {
        title: "Kill Bill: Vol. 1",
        author: "Quentin Tarantino",
        cover: "assets/movies/kill-bill-vol-1.jpg",
        rating: 4.5,
        reRead: true,
        link: "http://www.imdb.com/title/tt0266697/",
        readDate: "2024-01-27",
        kind: "movie"
    },
    {
        title: "Kill Bill: Vol. 2",
        author: "Quentin Tarantino",
        cover: "assets/movies/kill-bill-vol-2.jpg",
        rating: 4,
        reRead: true,
        link: "http://www.imdb.com/title/tt0378194/",
        readDate: "2024-01-28",
        kind: "movie"
    },
    {
        title: "Reservoir Dogs",
        author: "Quentin Tarantino",
        cover: "assets/movies/reservoir-dogs.jpg",
        rating: 4,
        reRead: true,
        link: "http://www.imdb.com/title/tt0105236/",
        readDate: "2024-01-28",
        kind: "movie"
    },
    {
        title: "They Cloned Tyrone",
        author: "Juel Taylor",
        cover: "assets/movies/they-cloned-tyrone.jpg",
        rating: 4,
        link: "https://www.imdb.com/title/tt9873892/",
        readDate: "2024-02-12",
        kind: "movie"
    },
    {
        title: "Longlegs",
        author: "Osgood Perkins",
        cover: "assets/movies/longlegs.jpg",
        rating: 2,
        link: "http://www.imdb.com/title/tt23468450/",
        readDate: "2024-09-01",
        kind: "movie"
    },
    {
        title: "Everything Everywhere All at Once",
        author: "Daniel Scheinert, Daniel Kwan",
        cover: "assets/movies/everything-everywhere-all-at-once.jpg",
        rating: 4,
        link: "http://www.imdb.com/title/tt6710474/",
        readDate: "2024-10-01",
        kind: "movie"
    },
    {
        title: "John Wick",
        author: "Chad Stahelski",
        cover: "assets/movies/john-wick.jpg",
        rating: 4.5,
        reRead: true,
        link: "http://www.imdb.com/title/tt2911666/",
        readDate: "2024-11-01",
        kind: "movie"
    },
    {
        title: "Civil War",
        author: "Alex Garland",
        cover: "assets/movies/civil-war.jpg",
        rating: 5,
        link: "https://www.themoviedb.org/movie/929590-civil-war",
        readDate: "2025-01-24",
        favorite: true,
        kind: "movie"
    },
    {
        title: "En attendant les robots",
        author: "Natan Castay",
        cover: "assets/movies/en-attendant-les-robots.jpg",
        rating: 3,
        link: "https://www.themoviedb.org/movie/1108417-en-attendant-les-robots",
        readDate: "2025-01-24",
        kind: "movie"
    },
    {
        title: "Parasite",
        author: "Bong Joon-ho",
        cover: "assets/movies/parasite.jpg",
        rating: 4,
        link: "https://www.themoviedb.org/movie/496243",
        readDate: "2025-01-25",
        kind: "movie"
    },
    {
        title: "Opération Lune",
        author: "William Karel",
        cover: "assets/movies/operation-lune.jpg",
        rating: 3.5,
        link: "https://www.themoviedb.org/movie/2740-operation-lune",
        readDate: "2025-02-05",
        kind: "movie"
    },
    {
        title: "The Covenant",
        author: "Guy Ritchie",
        cover: "assets/movies/the-covenant.jpg",
        rating: 3.5,
        link: "https://www.themoviedb.org/movie/882569-guy-ritchie-s-the-covenant",
        readDate: "2025-02-06",
        kind: "movie"
    },
    {
        title: 'Le Clan',
        author: 'Éric Fraticelli',
        cover: "assets/movies/le-clan.jpg",
        rating: 2,
        favorite: false,
        readDate: '2025-02-07',
        kind: 'movie',
        link: 'https://www.themoviedb.org/movie/1000094-le-clan'
    },
    {
        title: 'Pas de vagues',
        author: 'Teddy Lussi-Modeste',
        cover: 'assets/movies/pas-de-vagues.jpg',
        rating: 2.5,
        favorite: false,
        readDate: '2025-01-26',
        kind: 'movie',
        link: 'https://www.themoviedb.org/movie/1000862-pas-de-vagues'
    },
    {
        title: 'I Believe I Can Fly',
        author: 'Sébastien Montaz-Rosset',
        cover: 'assets/movies/i-believe-i-can-fly.jpg',
        rating: 3,
        favorite: false,
        readDate: '2025-01-28',
        kind: 'movie',
        link: 'https://www.themoviedb.org/movie/79965-i-believe-i-can-fly'
    },
    {
        title: "Night and Day",
        author: "James Mangold",
        cover: "assets/movies/knight-and-day.jpg",
        rating: 4,
        link: "https://www.themoviedb.org/movie/37834-knight-and-day",
        readDate: "2025-02-09",
        kind: "movie"
    },
    {
        title: "Pacing The Pacific",
        author: "Caleb Hawkins",
        cover: "assets/movies/pacing-the-pacific.jpg",
        rating: 4.5,
        link: "https://www.themoviedb.org/movie/1264373-pacing-the-pacific",
        readDate: "2025-02-14",
        kind: "movie"
    },
    {
        title: "Solace",
        author: "Tom Gibbons",
        cover: "assets/movies/solace.jpg",
        rating: 3.5,
        link: "https://www.themoviedb.org/movie/912106-solace",
        readDate: "2025-02-15",
        kind: "movie"
    },
    {
        title: "Into the (Un)known",
        author: "Nick Danielsen",
        cover: "assets/movies/into-the-un-known.jpg",
        rating: 3.5,
        link: "https://www.themoviedb.org/movie/1371501-into-the-un-known",
        readDate: "2025-02-20",
        kind: "movie"
    },
    {
        title: "O'Brother",
        author: "Ethan et Joe Coen",
        cover: "assets/movies/o-brother.jpg",
        rating: 3.5,
        link: "https://www.themoviedb.org/movie/134-o-brother-where-art-thou",
        readDate: "2025-02-21",
        kind: "movie"
    },
    {
        title: "A Serious Man",
        author: "Ethan et Joe Coen",
        cover: "assets/movies/a-serious-man.jpg",
        rating: 3,
        link: "https://www.themoviedb.org/movie/12573-a-serious-man",
        readDate: "2025-03-13",
        kind: "movie"
    },
    {
        title: "Snatch",
        author: "Guy Ritchie",
        cover: "assets/movies/snatch.jpg",
        rating: 5,
        reRead: true,
        favorite: true,
        link: "https://www.themoviedb.org/movie/107-snatch",
        readDate: "2025-03-13",
        kind: "movie"
    },
    {
        title: "Les Chèvres du Pentagone",
        author: "Grant Heslov",
        cover: "assets/movies/les-chevres-du-pentagone.jpg",
        rating: 3,
        favorite: false,
        link: "https://www.themoviedb.org/movie/10313-the-men-who-stare-at-goats",
        readDate: "2025-03-16",
        kind: "movie"
    },
    {
        title: "Her",
        author: "Spike Jonze",
        cover: "assets/movies/her.jpg",
        rating: 3.5,
        favorite: false,
        link: "https://www.themoviedb.org/movie/152601-her",
        readDate: "2025-03-19",
        kind: "movie"
    },
    {
        title: "Lee Miller",
        author: "Ellen Kuras",
        cover: "assets/movies/lee-miller.jpg",
        rating: 4,
        favorite: false,
        link: "https://www.themoviedb.org/movie/832964-lee",
        readDate: "2025-03-20",
        kind: "movie"
    },
    {
        title: "Cloverfield",
        author: "Matt Reeves",
        cover: "assets/movies/cloverfield.jpg",
        rating: 1.5,
        favorite: false,
        link: "https://www.themoviedb.org/movie/7191-cloverfield",
        readDate: "2025-03-24",
        kind: "movie"
    },
    {
        title: "King of Moab",
        author: "Tylor Wolter",
        cover: "assets/movies/king-of-moab.jpg",
        rating: 4,
        favorite: false,
        link: "https://www.themoviedb.org/movie/1452955-king-of-moab",
        readDate: "2025-03-25",
        kind: "movie"
    },
    {
        title: "Lost in Translation",
        author: "Sofia Coppola",
        cover: "assets/movies/lost-in-translation.jpg",
        rating: 5,
        favorite: true,
        link: "https://www.themoviedb.org/movie/153-lost-in-translation",
        readDate: "2025-03-26",
        kind: "movie"
    },
    {
        title: "Fighter",
        author: "David O. Russell",
        cover: "assets/movies/fighter.jpg",
        rating: 3,
        favorite: false,
        link: "https://www.themoviedb.org/movie/45317-the-fighter",
        readDate: "2025-03-27",
        kind: "movie"
    },
    {
        title: "Riverboom",
        author: "Claude Baechtold",
        cover: "assets/movies/riverboom.jpg",
        rating: 4,
        favorite: false,
        link: "https://www.themoviedb.org/movie/1175235-riverboom",
        readDate: "2025-04-21",
        kind: "movie"
    },
    {
        title: "The Interview",
        author: "Seth Rogen, Evan Goldberg",
        cover: "assets/movies/the-interview.jpg",
        rating: 3,
        favorite: false,
        link: "https://www.themoviedb.org/movie/228967-the-interview",
        readDate: "2025-04-25",
        kind: "movie"
    },
    {
        title: "Coup de foudre à Notting Hill",
        author: "Roger Michell",
        cover: "assets/movies/notting-hill.jpg",
        rating: 4,
        favorite: false,
        link: "https://www.themoviedb.org/movie/509-notting-hill",
        readDate: "2025-04-28",
        kind: "movie"
    },
    {
        title: "Kodachrome",
        author: "Mark Raso",
        cover: "assets/movies/kodachrome.jpg",
        rating: 3,
        favorite: false,
        link: "https://www.themoviedb.org/movie/419635-kodachrome",
        readDate: "2025-04-30",
        kind: "movie"
    },
    {
        title: "Ennemi d'État",
        author: "Tony Scott",
        cover: "assets/movies/ennemi-d-etat.jpg",
        rating: 2,
        favorite: false,
        link: "https://www.themoviedb.org/movie/9798-enemy-of-the-state",
        readDate: "2025-05-03",
        kind: "movie"
    },
    {
        title: "Le Prestige",
        author: "Christopher Nolan",
        cover: "assets/movies/le-prestige.jpg",
        rating: 4,
        favorite: false,
        link: "https://www.themoviedb.org/movie/1124-the-prestige",
        readDate: "2025-05-03",
        kind: "movie"
    },
    {
        title: "The Settlers",
        author: "Louis Theroux",
        cover: "assets/movies/the-settlers.jpg",
        rating: 4.5,
        favorite: false,
        link: "https://www.themoviedb.org/movie/1466013-louis-theroux-the-settlers",
        readDate: "2025-06-03",
        kind: "movie"
    },
    // END OF MOVIES //
    // SERIES \\
    {
        title: "Severance (S1)",
        author: "Dan Erickson",
        cover: "assets/series/severance.jpg",
        rating: 4.5,
        link: "https://www.themoviedb.org/tv/95396-severance",
        readDate: "2024-01-01",
        kind: "serie"
    },
    {
        title: "Fiasco (S1)",
        author: "Igor Gotesman",
        cover: "assets/series/fiasco.jpg",
        rating: 4,
        link: "https://www.themoviedb.org/tv/221120-fiasco",
        readDate: "2024-04-30",
        kind: "serie"
    },
    {
        title: "The Bear (S1-3)",
        author: "Christopher Storer",
        cover: "assets/series/the-bear.jpg",
        rating: 4,
        link: "https://www.themoviedb.org/tv/136315-the-bear",
        readDate: "2024-06-01",
        kind: "serie"
    },
    {
        title: "Slow Horses (S1-2)",
        author: "James Hawew, Jeremy Lovering",
        cover: "assets/series/slow-horses.jpg",
        rating: 4,
        link: "https://www.themoviedb.org/tv/95480-slow-horses",
        readDate: "2024-11-01",
        kind: "serie"
    },
    {
        title: "Kaos (S1)",
        author: "Charlie Covell",
        cover: "assets/series/kaos.jpg",
        rating: 3.5,
        link: "https://www.themoviedb.org/tv/102621-kaos",
        readDate: "2024-11-01",
        kind: "serie"
    },
    {
        title: "Family Business (S1-3)",
        author: "Igor Gotesman",
        cover: "assets/series/family-business.jpg",
        rating: 3.5,
        link: "https://www.themoviedb.org/tv/89785-family-business",
        readDate: "2024-12-01",
        kind: "serie"
    },
    {
        title: "Bref (S1-2)",
        author: "Kyan Khojandi, Bruno Muschio",
        cover: "assets/series/bref.jpg",
        rating: 4.5,
        link: "https://www.themoviedb.org/tv/60715-bref",
        readDate: "2025-02-16",
        kind: "serie"
    },
    {
        title: "Silicon fucking Valley",
        author: "Pierre Schneidermann, Baptiste Giudicelli",
        cover: "assets/series/silicon-fucking-valley.jpg",
        rating: 3.5,
        favorite: false,
        link: "https://www.themoviedb.org/tv/277372-silicon-fucking-valley",
        readDate: "2025-03-15",
        kind: "serie"
    },
    {
        title: "The Pacific",
        author: "Bruce C. McKennai",
        cover: "assets/series/the-pacific.jpg",
        rating: 4,
        favorite: false,
        link: "https://www.themoviedb.org/tv/16997-the-pacific",
        readDate: "2025-03-29",
        kind: "serie"
    },
    {
        title: "Severance (S1-2)",
        author: "Dan Erickson",
        cover: "assets/series/severance.jpg",
        rating: 4,
        link: "https://www.themoviedb.org/tv/95396-severance",
        readDate: "2025-04-03",
        kind: "serie"
    },
    {
        title: "Eastbound & Down (S1)",
        author: "Ben Best, Jody Hill, Danny McBride",
        cover: "assets/series/eastbound-and-down.jpg",
        rating: 3.5,
        link: "https://www.themoviedb.org/tv/8624-eastbound-down",
        readDate: "2025-04-23",
        kind: "serie"
    },
    // END OF SERIES \\
    // PODCASTS \\
    {
        title: "Floodcast",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://podcasts.apple.com/us/podcast/floodcast/id1019768302",
        kind: "podcast"
    },
    {
        title: "16 Sunsets",
        cover: "assets/podcasts/16-sunsets.jpg",
        rating: 4,
        link: "https://sixteensunsets.com/show/",
        kind: "podcast"
    },
    {
        title: "Course épique",
        cover: "assets/podcasts/course-epique.jpg",
        rating: 4,
        link: "https://courseepique.fr/",
        kind: "podcast"
    },
    {
        title: "Darknet Diaries",
        cover: "assets/podcasts/darknet-diaries.jpeg",
        rating: 4.5,
        link: "https://darknetdiaries.com/",
        kind: "podcast"
    },
    {
        title: "Affaires sensibles",
        cover: "assets/podcasts/affaires-sensibles.webp",
        rating: 4,
        link: "https://www.radiofrance.fr/franceinter/podcasts/affaires-sensibles",
        kind: "podcast"
    },
    {
        title: "Le code a changé",
        cover: "assets/podcasts/le-code-a-change.webp",
        rating: 4,
        link: "https://www.radiofrance.fr/franceinter/podcasts/le-code-a-change",
        kind: "podcast"
    },
    {
        title: "Click Here",
        cover: "assets/podcasts/click-here.png",
        rating: 3,
        link: "https://therecord.media/podcast",
        kind: "podcast"
    },
    {
        title: "Les Pieds sur Terre",
        cover: "assets/podcasts/les-pieds-sur-terre.webp",
        rating: 4.5,
        link: "https://www.radiofrance.fr/franceculture/podcasts/les-pieds-sur-terre",
        kind: "podcast"
    },
];
