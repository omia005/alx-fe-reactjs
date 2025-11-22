import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

// Advanced search function
export async function fetchUserData(username, location = "", minRepos = 0) {
  try {
    // Construct the search query
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const url = `${GITHUB_API_URL}/search/users?q=${encodeURIComponent(query)}`;

    const response = await axios.get(url);

    // Return the first matched user or null if no results
    return response.data.items.length > 0 ? response.data.items[0] : null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data from GitHub API");
  }
}

