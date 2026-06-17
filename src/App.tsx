import { Grid, GridItem, Show } from "@chakra-ui/react";

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
        <GridItem area={"nav"} bg={"coral"}>
          Nav
        </GridItem>

        <GridItem area={"aside"} bg={"gold"} hideBelow={breakpoints.lg}>
          Aside
        </GridItem>

        <GridItem area={"main"} bg={"dodgerblue"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
