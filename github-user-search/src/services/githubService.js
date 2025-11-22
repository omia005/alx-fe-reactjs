import axios from "axios";
const GITHUB_API_URL = "https://api.github.com";

export async function fetchUserData(username, location = "", minRepos = 0) {
  let query = username;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;
  const url = `${GITHUB_API_URL}/search/users?q=${encodeURIComponent(query)}`;
  const response = await axios.get(url);
  return response.data.items.length > 0 ? response.data.items[0] : null;
}

export async function fetchUserRepos(username) {
  const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
  return response.data;
}


