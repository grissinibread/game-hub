import useGames from "@/hooks/useGames";
import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import jong from "../assets/jong.jpg";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* need to add spacing=10px */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10} padding={10}>
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
        {/* <GameCard
          game={{
            background_image: jong,
            name: "Escape Jong 3: You Can't",
            id: 67,
            parent_platforms: [
              {
                platform: {
                  id: 69,
                  name: "PoopStation",
                  slug: "poop",
                },
              },
            ],
            metacritic: 67
          }}
        /> */}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
