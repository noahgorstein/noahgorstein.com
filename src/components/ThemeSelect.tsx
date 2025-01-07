import React, { useState, useEffect } from "react";
import { Check, MoonStars, PersonSimpleSki, Sun } from "@phosphor-icons/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

type Theme = {
  icon: JSX.Element;
};

const themeOptions: Map<string, Theme> = new Map([
  ["light", { icon: <Sun size="24" /> }],
  ["dark", { icon: <MoonStars size="24" /> }],
  ["eighties", { icon: <PersonSimpleSki size="24" /> }],
]);

const applyTheme = (newTheme: string) => {
  const element = document.documentElement;
  element.classList.remove("dark", "eighties");

  switch (newTheme) {
    case "dark":
      element.classList.add("dark");
      element.setAttribute("data-theme", "github-dark");
      break;
    case "light":
      element.setAttribute("data-theme", "github-light");
      break;
    case "eighties":
      element.classList.add("eighties");
      element.setAttribute("data-theme", "synthwave-84");
      break;
  }

  localStorage.setItem("theme", newTheme);
};

const ThemeSelect: React.FC = () => {
  // Initialize from localStorage directly since we're client:only
  const [theme, setTheme] = useState(
    () =>
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <Listbox value={theme} onChange={handleThemeChange}>
      <ListboxButton className="rounded-lg border-2 border-background p-2 hover:border-active hover:text-active">
        {themeOptions.get(theme)?.icon}
      </ListboxButton>
      <ListboxOptions
        className="w-[150px] rounded-xl border border-foreground/10 bg-background p-1 transition duration-100 ease-in [--anchor-gap:var(--spacing-1)] focus:outline-none data-[leave]:data-[closed]:opacity-0"
        anchor="bottom"
      >
        {Array.from(themeOptions.entries()).map(([name, theme]) => (
          <ListboxOption
            className="group flex flex-row items-center justify-between px-2 text-foreground data-[focus]:font-bold data-[focus]:text-active"
            key={name}
            value={name}
          >
            <Check className="invisible group-data-[selected]:visible" />
            <div className="flex flex-row items-center justify-between gap-2">
              {name} {theme.icon}
            </div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default ThemeSelect;
