import { Button, Menu, MenuItem, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
            Order by:  Relevance
          <BsChevronDown />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItem value={"relevance"}>Relevance</MenuItem>
            <MenuItem value={"date-added"}>Date Added</MenuItem>
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"release-date"}>Release Date</MenuItem>
            <MenuItem value={"popularity"}>Popularity</MenuItem>
            <MenuItem value={"average-rating"}>Average Rating</MenuItem>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
