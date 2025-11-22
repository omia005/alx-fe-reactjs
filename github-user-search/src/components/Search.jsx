import { useState } from "react";
import { fetchUserData } from "../services/githubService"; // adjust path if needed

function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const userData = await fetchUserData(query);
      setUser(userData);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display User Info */}
      {user && (
        <div style={{ marginTop: "20px" }}>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width="120" />
          <p>
            Profile:{" "}
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.html_url}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;