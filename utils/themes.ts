import theme from "styled-theming";

const colors = {
  white: "#fff",
  gray: "#888",
  semiGray: "#e8e8e8",
  semiLight: "#f9f9f9",
  semiLight2: "#f3f3f3"
};

export enum ThemeMode {
  Dark = "dark",
  Light = "light"
}

export enum ThemeKeys {
  Mode = "mode"
}

const themeMode = (options: any) => theme(ThemeKeys.Mode, options);

export default {
  bgColor: themeMode({
    [ThemeMode.Light]: colors.semiLight2
  }),

  card: {
    bgColor: themeMode({
      [ThemeMode.Light]: colors.white
    }),
    bgHoverColor: themeMode({
      [ThemeMode.Light]: colors.semiLight
    }),
    borderColor: themeMode({
      [ThemeMode.Light]: colors.semiGray
    })
  }
};
