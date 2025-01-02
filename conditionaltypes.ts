{
  type ExtraType<T, U> = T extends U ? T : never;
  type OnlyNumbers = ExtraType<number | string | boolean, number>;
  type OnlyString = ExtraType<number | string | boolean, string>;
}
