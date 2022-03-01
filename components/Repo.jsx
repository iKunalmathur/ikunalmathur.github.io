import React from "react";

export default function Repo({ repos }) {
  return (
    <section>
      <h1 className=" text-3xl font-semibold mb-4">Repositories -</h1>

      <div className="grid grid-cols-12 gap-6">
        {repos.map((repo, key) => {
          return (
            <div key={key} className="col-span-4">
              <div className="bg-neutral-800 p-6 rounded-lg shadow-md h-full">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <a
                      href={repo.html_url}
                      className="font-semibold text-lg hover:text-primary-500"
                    >
                      📕 {repo.name}
                    </a>
                    <p className="text-muted mt-1 line-clamp-4">
                      {repo.description}
                    </p>
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
    </section>
  );
}
