import axios from "axios";


const GITHUB_API_URL = "https://api.github.com";

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data; // returns the user object
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data from GitHub API");
  }
}
