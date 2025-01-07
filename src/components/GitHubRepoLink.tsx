import { GithubLogo, Star } from "@phosphor-icons/react";
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
      className={`flex flex-row items-center gap-6 text-sm transition-colors hover:text-accent ${className}`}
      href={`https://github.com/${username}/${repo}`}
      target="_blank"
    >
      <GithubLogo size={24} />
      <span className="flex items-center gap-[1.5px]">
        {stars}
        <Star size={24} />
      </span>
    </a>
  );
};

export default GitHubRepoLink;
