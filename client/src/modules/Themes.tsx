


export type Theme = {
  title: string,
  background: string,
  background_lighter: string,
  text: string,
  color: string,
  reverse: string
}

export const DarkTheme = {
  title: 'dark',
  background: 'bg-dark',
  background_lighter: 'bg-opacity-100',
  text: 'text-white',
  color: 'black',
  reverse: 'white'
}

export const LightTheme = {
  title: 'light',
  background: 'bg-white',
  background_lighter: 'bg-light',
  text: 'text-dark',
  color: 'white',
  reverse: 'black'
}
