/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Languages({ languages }) {
  const icons = {
    css: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    html: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    javascript: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    python: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    php: "https://cdn.worldvectorlogo.com/logos/php.svg",
    dart: "https://cdn.worldvectorlogo.com/logos/dart.svg",
    scss: "https://cdn.worldvectorlogo.com/logos/sass-1.svg",
    blade: "https://cdn.worldvectorlogo.com/logos/laravel-1.svg",
    typescript: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  };

  return (
    <section>
      <h1 className=" text-3xl font-semibold mb-8">Languages -</h1>
      <div className="grid sm:grid-cols-12 gap-6">
        {languages.map((lang, key) => {
          if (lang) {
            return (
              <div key={key} className="sm:col-span-6 md:col-span-4">
                <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
                  <div className="flex gap-4 items-center">
                    <div>
                      <img
                        src={icons[lang.toLowerCase()] ?? ""}
                        alt="icon"
                        className="w-10 h-10"
                      />
                    </div>
                    <div className="text-muted font-semibold">
                      <p>{lang}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <p className="text-sm text-muted mt-2">
        Images credit : https://worldvectorlogo.com
      </p>
    </section>
  );
}
