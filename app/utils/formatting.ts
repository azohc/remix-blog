export const formatDateTime = (datestr: string) => {
  const date = new Date(datestr)
  const locale = "en-ES"
  return `${date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  })} @ ${date.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
  })}`
}
