import useGithubStars from "../hooks/useGithubStars";

type GitHubRepoLinkProps = {
  repo: string;
  className?: string;
  stars?: number;
  username?: string;
};

/**
 * GitHub repository link component that displays the stars count and links to the repository.
 * If `stars` prop is not provided, it fetches the star count.
 */
const GitHubRepoLink: React.FC<GitHubRepoLinkProps> = ({
  repo,
  className,
  stars,
  username = "noahgorstein",
}: GitHubRepoLinkProps) => {
  if (!stars) {
    stars = useGithubStars(`${username}/${repo}`);
  }
  return (
    <a
      className={`flex flex-row items-center gap-6 text-sm transition-colors hover:text-pink ${className}`}
      href={`https://github.com/${username}/${repo}`}
      target="_blank"
    >
      <GithubIcon />
      <span className="flex items-center gap-[1.5px]">
        {stars}
        <StarIcon />
      </span>
    </a>
  );
};

const GithubIcon: React.FC = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" width="24" height="24">
    <path
      fill="currentColor"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
);

const StarIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    ></path>
  </svg>
);

export default GitHubRepoLink;
