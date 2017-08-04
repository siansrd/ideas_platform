export function prettyDate(dateTime) {
  const date = new Date(dateTime)
  return new Intl.DateTimeFormat().format(date)
}