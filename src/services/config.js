export function createAxiosConfig(token) {
  return({
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  })
}
