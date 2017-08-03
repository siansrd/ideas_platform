import axios from 'axios'

export const FETCH_IDEAS = 'fetch_ideas'
export const FETCH_IDEA = 'fetch_idea'
export const FETCH_USER = 'fetch_user'
export const CREATE_IDEA = 'create_idea'
export const FETCH_IDEAS_BY_USER = 'fetch_ideas_by_user'
export const DELETE_IDEA = 'delete_user'

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

export function fetchUser(userEmail, callback) {
  const request = axios.get(`${ROUTE_URL}/users/${userEmail}`)
    // .then( () => { callback() })

  return {
    type: FETCH_USER,
    payload: request
  }
}

export function createIdea(values, callback) {
  const request = axios.post(`${ROUTE_URL}/ideas`, values)
    .then( () => { callback() })

  return {
    type: CREATE_IDEA,
    payload: request
  }
}

export function deleteIdea(id) {
  const request = axios.delete(`${ROUTE_URL}/ideas/${id}`)

  return {
    type: DELETE_IDEA,
    payload: request
  }
}

export function fetchIdeasByUser(id) {
  const request = axios.get(`${ROUTE_URL}/users/${id}/ideas`)

  return {
    type: FETCH_IDEAS_BY_USER,
    payload: request
  }
}