import { app } from "../config/app";

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.github.com/users/${app.username}/repos?`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  const philosophies = "";
  const repos = await res.json();
  return {
    props: {
      philosophies,
      repos,
    },
  };
};

export default function Home({ philosophies, repos }) {
  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col justify-between min-h-screen">
      <header className="flex items-center justify-between py-8">
        <div>
          <h1 className="text-4xl font-bold">Github/{app.username}</h1>
          <p>{philosophies}</p>
        </div>
        <nav>
          <a href="">resume</a>
        </nav>
      </header>
      <main className="mt-[10vh] mb-auto">
        <div className="grid grid-cols-12 gap-6">
          {repos.map((repo, key) => {
            return (
              <div key={key} className="col-span-4">
                <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col justify-between">
                    <div>
                      <a
                        href={repo.html_url}
                        className="font-semibold text-lg  hover:text-primary-500"
                      >
                        📕 {repo.name}
                      </a>
                      <p className="text-muted mt-1">{repo.description}</p>
                    </div>
                    <div className="flex text-muted font-semibold gap-4 mt-2">
                      <p>⭐ {repo.stargazers_count} </p>
                      <p>📦 {repo.size}kb </p>
                      <p>⚒ {repo.language} </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="py-6">
        <div className="text-center text-muted font-semibold capitalize">
          Build With 🏗 Nextjs + Github {"API's"} & 🚀 Deployed on Github pages
          using actions
        </div>
      </footer>
    </div>
  );
}
