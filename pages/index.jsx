import Languages from "../components/Languages";
import Repo from "../components/Repo";
import { app } from "../config/app";

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.github.com/users/${app.username}/repos`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  const data = await res.json();
  const languages = [...new Set(data.map((item) => item.language))];
  const filteredRepos = data.filter((item) => {
    if (item.description) {
      return item;
    }
  });
  function compare(x, y) {
    if (x.stargazers_count > y.stargazers_count) {
      return -1;
    }
    if (x.stargazers_count < y.stargazers_count) {
      return 1;
    }
    return 0;
  }
  const sortedRepo = filteredRepos.sort(compare);
  const repos = sortedRepo ?? [];
  // console.log(sortedRepo);
  // console.log("data : ", data.length);
  // console.log("repo : ", repos.length);
  // console.log(repos);
  return {
    props: {
      repos,
      languages,
    },
  };
};

export default function Home({ repos, languages }) {
  return (
    <div className="max-w-5xl mx-auto p-4 flex flex-col justify-between min-h-screen">
      <header className="flex items-center justify-between py-8 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold">
            Github/{app.username}
          </h1>
        </div>
        <nav>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-neutral-800 hover:bg-neutral-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3"
            href={process.env.NEXT_PUBLIC_PORTFOLIO_URL}
          >
            My Portfolio
          </a>
        </nav>
      </header>
      <main className="mt-[5vh] sm:mt-[10vh] mb-auto space-y-6">
        <section>
          <h1 className=" text-3xl font-semibold mb-4">Into -</h1>
          <p className="text-muted">
            Hey 👋 explorer {"i've"} built this project to test out my skill 🎯
            over <u>javascript</u>. it includes ⚡ Rest API, ♻ Array
            manipulation, etc.
            <br />
          </p>
        </section>
        <Languages languages={languages} />
        <Repo repos={repos} />
      </main>
      <footer className="py-6 mt-[5vh]">
        <div className="text-center text-muted font-semibold capitalize">
          Build With 🏗 Nextjs + Github {"API's"} & 🚀 Deployed on Github pages
          using actions
        </div>
      </footer>
    </div>
  );
}
