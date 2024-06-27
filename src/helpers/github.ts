/**
 * Fetches the number of stars for a given GitHub repository.
 *
 * @param repo - The repository identifier in the format "owner/repo".
 * @returns A promise that resolves to the number of stars.
 *          Returns 0 if there is an error.
 */
export async function fetchStars(repo: string) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    if (!response.ok) {
      throw new Error(`GitHub API returned status code ${response.status}`);
    }
    const data: { stargazers_count: number } = await response.json();

    if (typeof data.stargazers_count !== "number") {
      throw new Error("Invalid response structure");
    }
    return data.stargazers_count;
  } catch (error) {
    console.error(`Unable to fetch stars for ${repo}`, error);
    return 0;
  }
}
