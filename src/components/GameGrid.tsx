import useGames from "@/hooks/useGames";
import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import jong from "../assets/jong.jpg";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* need to add spacing=10px */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10} padding={10}>
        {isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

{
  /* <GameCard
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
        /> */
}
