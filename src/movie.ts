export interface Movie {
  id: string;
  movieName: string;
  price: number;
  description: string;
  starring: string[];
  runTime: number;
  slug: string;
  //imageUrl: string;
}

export const movies: Movie[] = [
  {
    id: '1ABAS',
    movieName: 'SPIDER-MAN: NO WAY HOME',
    price: 7.99,
    description: 'A spectacular adventure',
    starring: [
      'Tom Holland',
      'Zendaya',
      'Benedict Cumberbatch',
      'Jon Favreau',
      'Jacob Batalon',
      'Marisa Tomei',
    ],
    runTime: 124,
    slug: 'spider-man-no-way-home',
  },
  {
    id: '2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    movieName: 'MATRIX: RESSURECTIONS',
    price: 6.99,
    description: 'A great homage to the trilogy',
    starring: [
      'Keanu Reeves',
      'Carrie-Anne Moss',
      'Yahya Abdul-Mateen II',
      'Jessica Henwick',
      'Priyanka Chopra Jonas',
    ],
    runTime: 118,
    slug: 'matrix-ressurections',
  },
];
