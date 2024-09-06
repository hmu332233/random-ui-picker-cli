# random-ui-picker-cli

A fun and interactive CLI tool that randomly selects an item with a simple UI. Perfect for making quick decisions or adding an element of chance to your choices!

## Features

- Easy to use command-line interface
- Multiple themes for visual variety
- Support for direct item input or file-based item lists
- Extensible design for adding new themes

## Installation

You can use this tool without installation via `npx`, or install it globally:

```bash
npm install -g random-ui-picker-cli
```

## Usage

### Using npx (no installation required):

```bash
npx random-ui-picker-cli -i item1 item2 item3
npx random-ui-picker-cli -t basic -if items_file_path
```

### If installed globally:

```bash
random-ui-picker -i item1 item2 item3
random-ui-picker -t basic -if items_file_path
```

### Options:

```
-t, --theme <theme>     Select UI theme (default: 'basic')
-i, --items <items...>  Directly input items to choose from
-if, --items_file <path>  Specify a file path containing items
-h, --help              Display help information
```

## Themes

### Basic
A simple, clean interface for quick selections.

![basic theme](./assets/images/theme.basic.gif)

### Slot Machine
Add some excitement with a slot machine-style picker!

![slot machine theme](./assets/images/theme.slot-machine.gif)

## Contributing

We welcome contributions, especially new themes! Here's how you can add a new theme:

1. Create a new theme component in the `src` directory. (Component props must have `PickerProps` type)
2. Add the new component with a key value to `ThemeMap` in `src/index.tsx`.
3. Test your theme using:
   ```bash
   yarn start -t [new theme name] -i item1 item2 item3
   ```

For other contributions or bug reports, please open an issue or submit a pull request.

## License

[MIT License](LICENSE)

## Support

If you encounter any problems or have questions, please open an issue on our GitHub repository.

Enjoy making random selections with style!