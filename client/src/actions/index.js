import axios from 'axios'

export const FETCH_IDEAS = 'fetch_ideas'
export const FETCH_IDEA = 'fetch_idea'
export const FETCH_USER = 'fetch_user'

const ROUTE_URL = 'http://localhost:5000/api'

export function fetchIdeas() {
  const request = axios.get(`${ROUTE_URL}/ideas`)

  return {
    type: FETCH_IDEAS,
    payload: request
  }
}

export function fetchIdea(id) {
  const request = axios.get(`${ROUTE_URL}/ideas/${id}`)

  return {
    type: FETCH_IDEA,
    payload: request
  }
}

export function fetchUser(userEmail) {
  const request = axios.get(`${ROUTE_URL}/users/${userEmail}`)

  return {
    type: FETCH_USER,
    payload: request
  }
}