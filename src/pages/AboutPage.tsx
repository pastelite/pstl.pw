import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faRust,
  faPython,
  faReact,
  IconDefinition,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import "./AboutPage.scss";
import { HTMLAttributes, ReactNode } from "react";
import { c, svelte, css, ts, tailwind } from "../icons/langicon";
import { faC } from "@fortawesome/free-solid-svg-icons";
import { bgcolor } from "@mui/system";
import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl text-2xl other-page">
      <h1>About</h1>
      <p>
        I'm <span className="text-primary font-semibold">pastelite.</span>, a
        normal guy from Thailand, currently studying CS in the university. I
        code as a hobby.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <WhatIKnow />
        <div>
          <h2>What I'm interested in</h2>
          <ul className="list-disc list-inside">
            <li>Web related technology</li>
            <li>System programming</li>
            <li>AI (in future)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function WhatIKnow() {
  type languageListItem = [
    string,
    any,
    "language" | "framework" | "other",
    number
  ];
  const languageList: languageListItem[] = [
    ["JavaScript", faJs, "language", 1],
    ["React", faReact, "framework", 1],
    ["CSS", <img src={css} className="p-[0.5em]"></img>, "other", 0.8],
    [
      "Tailwind",
      <img src={tailwind} className="p-[0.5em]"></img>,
      "framework",
      0.8,
    ],
    [
      "TypeScript",
      <img src={ts} className="p-[0.42em]"></img>,
      "language",
      0.8,
    ],
    ["Python", faPython, "language", 0.6],
    [
      "Svelte",
      <img src={svelte} className="p-[0.5em]"></img>,
      "framework",
      0.6,
    ],
    ["Rust", faRust, "language", 0.4],
    ["C", <img src={c} className="p-[0.5em]"></img>, "language", 0.3],
    ["Java", faJava, "language", 0.3],
  ];

  return (
    <div>
      <h2>What I know</h2>
      <WhatIKnowKey />
      <div className="flex flex-wrap justify-center">
        {languageList.map((e) => {
          if (React.isValidElement(e[1])) {
            return (
              <LanguagesItem name={e[0]} type={e[2]} experience={e[3]}>
                {e[1]}
              </LanguagesItem>
            );
          } else {
            if (e[1]) {
              return (
                <LanguagesItem
                  icon={e[1]}
                  name={e[0]}
                  type={e[2]}
                  experience={e[3]}
                ></LanguagesItem>
              );
            }
          }
        })}
      </div>
      <div className="text-base">* High experience for a guy with a single year of coding experience, noob according to others</div>
    </div>
  );
}

function WhatIKnowKey() {
  return (
    <div className="border border-primary/50 rounded-md m-2 flex flex-col items-center text-xl p-2">
      <div className=" flex flex-wrap justify-evenly">
        <div className="m-2">
          <div className="bg-sky-500 w-2 h-2 inline-block"></div> Language
        </div>
        <div className="m-2">
          <div className="bg-orange-500 w-2 h-2 inline-block"></div> Framework
        </div>
        <div className="m-2">
          <div className="bg-teal-500 w-2 h-2 inline-block"></div> Other
        </div>
      </div>
      <div className="mx-2">
        <span className="text-base">high</span>
        <div className="w-[4em] h-1 bg- bg-gradient-to-r from-sky-500 to-transparent inline-block mx-1"></div>
        <span className="text-base mr-2">low</span>
        Experience*
      </div>
    </div>
  );
}

interface LanguagesItemProps extends HTMLAttributes<HTMLDivElement> {
  //icon?: IconDefinition
  experience?: number;
  type?: "language" | "framework" | "other";
  name: string;
  icon?: IconDefinition;
}

function LanguagesItem({
  children,
  experience,
  name,
  type,
  icon,
  ...other
}: LanguagesItemProps) {
  const typeClassName = {
    language: "bg-sky-500",
    framework: "bg-orange-500",
    other: "bg-teal-500",
  };
  let bgColor = type
    ? type in typeClassName
      ? typeClassName[type]
      : "bg-white"
    : "bg-white";

  function centerThingy() {
    if (children) {
      return children;
    } else if (icon) {
      return <FontAwesomeIcon className="" size={"2x"} icon={icon} />;
    }
  }

  return (
    <div {...other} className="language-item shadow-md">
      <div className="language-item-text">{name}</div>
      <div
        className={`language-item-icon  ${bgColor}`}
        style={{
          opacity: experience || 1,
        }}
      >
        {centerThingy()}
      </div>
    </div>
  );
}
