interface Character {
  name: String;
  height: String;
  mass: String;
  hair_color: String;
  skin_color: String;
  eye_color: String;
  birth_year: String;
  gender: String;
  homeworld: String;
  films: Array<Object>;
  species: Array<Object>;
  vehicles: Array<URL>;
  starships: Array<Object>;
  created: Date;
  edited: Date;
  url: String;
}

export default Character;