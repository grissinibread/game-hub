import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const breakpoints = {
  base: "0rem", // 0px
  sm: "30rem", // ~480px
  md: "48rem", // ~768px
  lg: "63.9375rem", // ~1023px
  xl: "80rem", // ~1280px
  "2xl": "96rem", // ~1536px
};

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        <GridItem area={"aside"} hideBelow={breakpoints.lg}>
          Aside
        </GridItem>

        <GridItem area={"main"}>Main</GridItem>
      </Grid>
    </>
  );
}

export default App;
