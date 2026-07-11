import useGames, { Platform } from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import jong from "../assets/jong.jpg";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/hooks/UseGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6} padding="10px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
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
