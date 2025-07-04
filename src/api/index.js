const API_BASE_URL = 'http://localhost:3000'

const apiRequest = async (endpoint) => {
  const url = `${API_BASE_URL}${endpoint}`
  // add logic here
}

export const get = (endpoint) => {
  return apiRequest(endpoint, { method: 'GET' })
}