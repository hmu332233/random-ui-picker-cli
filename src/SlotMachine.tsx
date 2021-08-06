import React, { useState, useEffect } from "react";
import { Box, Text } from "ink";

import { getNextIndex } from "./utils";

const SLOT_MACHINE_WIDTH = 50;

function SlotMachine({ items }: PickerProps) {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * items.length - 1));
  useEffect(() => {
    let time = 0;
    const timer = setInterval(() => {
      setCurrentIndex((v) => (v + 1) % items.length);

      if (time++ === 25) {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const firstIndex = getNextIndex(items.length, currentIndex, -2);
  const prevIndex = getNextIndex(items.length, currentIndex, -1);
  const nextIndex = getNextIndex(items.length, currentIndex, 1);
  const lastIndex = getNextIndex(items.length, currentIndex, 2);

  return (
    <Box width={SLOT_MACHINE_WIDTH} flexDirection="column" alignItems="center" paddingTop={2} paddingBottom={2}>
      <Text color="gray">{items[firstIndex]}</Text>
      <Text color="gray">{items[prevIndex]}</Text>
      <Box justifyContent="center" width="100%" borderStyle="round">
        <Text color="white">{items[currentIndex]}</Text>
      </Box>
      <Text color="gray">{items[nextIndex]}</Text>
      <Text color="gray">{items[lastIndex]}</Text>
    </Box>
  );
}

export default SlotMachine;
