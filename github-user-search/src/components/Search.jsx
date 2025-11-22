import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const userData = await fetchUserData(
        username,
        location,
        minRepos ? parseInt(minRepos) : 0
      );

      if (!userData) {
        setError("No users match the advanced criteria.");
      } else {
        setUser(userData);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          GitHub User Search
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="GitHub username"
            required
            className="bg-blue-500 text-white p-4"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Location (optional)
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., San Francisco"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Minimum Repositories */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Minimum Repositories (optional)
          </label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="0"
            min="0"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-700">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="bg-white shadow-md rounded p-4 mt-4 text-gray-700">
          <h3 className="text-lg font-bold mb-2">{user.login}</h3>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full mb-2"
          />
          <p>
            Profile:{" "}
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              {user.html_url}
            </a>
          </p>
          {user.location && <p>Location: {user.location}</p>}
          <p>Public Repositories: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
