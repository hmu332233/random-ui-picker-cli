import React, { useState, useEffect } from 'react';
import { Box, Text } from 'ink';

const getNextIndex = (length: number, current: number, addend: number): number => {
  const next = current + addend;

  if (next < 0) {
    return length - Math.abs(next);
  }

  if (next >= length) {
    return 0 + addend - 1;
  }

  return current + addend;
};

type RandomPickerProps = {
  items: Array<number | string>;
};
function RandomPicker({ items }: RandomPickerProps) {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * items.length - 1));
  useEffect(() => {
    let time = 0;
    const timer = setInterval(() => {
      setCurrentIndex((v) => (v + 1) % items.length);

      if (time++ === 15) {
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
    <Box padding={2}>
      <Box paddingTop={2} marginRight={1}>
        <Text>{'>>'}</Text>
      </Box>
      <Box flexDirection="column">
        <Text color="gray">{items[firstIndex]}</Text>
        <Text>{items[prevIndex]}</Text>
        <Text color="white">{items[currentIndex]}</Text>
        <Text>{items[nextIndex]}</Text>
        <Text color="gray">{items[lastIndex]}</Text>
      </Box>
    </Box>
  );
}

export default RandomPicker;
