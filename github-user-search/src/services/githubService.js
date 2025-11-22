import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

/**
 * Fetch a GitHub user using the Search Users API
 * Supports optional location and minimum repositories filters
 */
export async function fetchUserData(username, location = "", minRepos = 0) {
  try {
    // Construct search query
    let query = username;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const url = `${GITHUB_API_URL}/search/users?q=${encodeURIComponent(query)}`;

    const response = await axios.get(url);

    // Return the first user found (or null if no results)
    return response.data.items.length > 0 ? response.data.items[0] : null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data from GitHub API");
  }
}

/**
 * Fetch repositories for a given GitHub username
 */
export async function fetchUserRepos(username) {
  try {
    const url = `${GITHUB_API_URL}/users/${username}/repos`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching user repos:", error);
    throw new Error("Failed to fetch user repositories");
  }
}



