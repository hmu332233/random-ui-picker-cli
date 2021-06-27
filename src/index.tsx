import React from 'react';
import RandomPicker from './RandomPicker';
import { render } from 'ink';

import { Command } from 'commander';

import * as fs from 'fs';

const program = new Command();

program
  .option('-i --items <items...>', 'items')
  .option('-if --items_file <path>', 'items\'s file path')
  .action(({ items, items_file }) => {
    
    if (items_file) {
      items = fs.readFileSync(items_file, 'utf8').split('\n');
    }

    render(<RandomPicker items={items} />);
  });

program.parse();