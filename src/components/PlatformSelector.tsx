import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  Portal,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  
  if(error) return null;
  
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <Text>Platforms</Text>
          <BsChevronDown />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <MenuItem value={platform.slug} key={platform.id}>
                {platform.name}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
