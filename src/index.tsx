import React from 'react';
import Basic from './Basic';
import SlotMachine from './SlotMachine';

import { render } from 'ink';

import { Command } from 'commander';

import * as fs from 'fs';

const ThemeMap: PickerThemeMap = {
  basic: Basic,
  'slot-machine': SlotMachine,
};

const program = new Command();

program
  .requiredOption('-i --items <items...>', 'items')
  .option('-t --theme <theme>', 'theme, [default: basic]')
  .option('-if --items_file <path>', 'items\'s file path')
  .action(({ theme = 'basic', items, items_file }) => {
    
    if (items_file) {
      items = fs.readFileSync(items_file, 'utf8').split('\n');
    }

    const Picker = ThemeMap[theme] || Basic;

    render(<Picker items={items} />);
  });

program.parse();