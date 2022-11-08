export function formatDate(dateString) {
  const dt = new Date(dateString)
  return dt.getDate() + "." + (dt.getMonth() + 1) + "." + dt.getFullYear()
}