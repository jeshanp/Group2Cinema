
export interface Movie {
    id: string;
    movieName: string;
    price: number;
    description: string;
    starring: string[];
    runTime: number;
    slug: string
    //imageUrl: string;
  }

  export const movies:Movie[] = [
    {
      id: "1ABAS",
      movieName: 'SPIDER-MAN: NO WAY HOME',
      price: 799,
      description: 'A large phone with one of the best screens',
      starring: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jon Favreau", "Jacob Batalon", 
      "Marisa Tomei"],
      runTime: 6666,
      slug: 'spider-man-no-way-home'
    },
    {
      id: "2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      movieName: 'MATRIX: RESSURECTIONS',
      price: 699,
      description: 'A great phone with one of the best cameras',
      starring: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jon Favreau", "Jacob Batalon", 
      "Marisa Tomei"],
      runTime: 999,
      slug: "MATRIX-RESSURECTIONS"
    },
  ];