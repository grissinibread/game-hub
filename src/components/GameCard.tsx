import { Game } from "@/hooks/useGames";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body margin={5} padding={0}>
        <HStack justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map((platform) => platform.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </Card.Body>
      <Card.Header fontSize='2xl' m={5} mt={0} padding={0}>{game.name}</Card.Header>
    </Card.Root>
  );
};

export default GameCard;
