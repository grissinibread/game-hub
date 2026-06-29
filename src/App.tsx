import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseGenres";
import PlatformSelector from "./components/PlatformSelector";

const breakpoints = {
  base: "0rem", // 0px
  sm: "30rem", // ~480px
  md: "48rem", // ~768px
  lg: "63.9375rem", // ~1023px
  xl: "80rem", // ~1280px
  "2xl": "96rem", // ~1536px
};

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        <GridItem area={"aside"} hideBelow={breakpoints.lg} paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
        </GridItem>

        <GridItem area={"main"}>
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
