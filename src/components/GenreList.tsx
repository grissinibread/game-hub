import useGenres, { Genre } from "@/hooks/UseGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} listStyleType="none">
          <Button variant="ghost" onClick={() => onSelectGenre(genre)}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg" fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}>{genre.name}</Text>
            </HStack>
          </Button>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
