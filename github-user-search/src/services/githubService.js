import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

export async function fetchUserData(username) {
  try {
    const userResponse = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    const reposResponse = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
    return { user: userResponse.data, repos: reposResponse.data };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch user or repos");
  }
}

