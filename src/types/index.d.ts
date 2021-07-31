declare type PickerProps = {
  items: Array<number | string>;
};

declare type PickerThemeMap = {
  [key: string]: (props: PickerProps) => JSX.Element
};