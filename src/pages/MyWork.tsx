import { HTMLAttributes, useEffect, useState } from "react";
import "./MyWork.scss";
import betterCreate from "../myworkpicture/bettercreate.png";
import oldPstl from "../myworkpicture/oldpstl.png";
import newPstl from "../myworkpicture/newpstl.png";
import zilentBot from "../myworkpicture/zilentbot.png";
import zilentScriptWP from "../myworkpicture/zswp.png";
import zilentScriptWT from "../myworkpicture/zswt.png";

export default function MyWork() {
  const [currentIndex, setCurrentIndex] = useState(-1);

  function setAsCurrentIndex(a: number) {
    setCurrentIndex(a);
    //setCurrentIndex(-1);
  }

  const wikiWorkList: workListType[] = [
    [
      "bettercreate.js",
      "Userscript for Wiktionary. Automatically create a pages of some languages by one click",
      ["https://th.wiktionary.org/wiki/User:ZilentFyld/bettercreate.js", ,],
      betterCreate,
    ],
    [
      "ZilentBot",
      "The bot used to created thousands of pages in Thai Wiktionary",
      ["https://github.com/pastelite/ZilentBot-wiktionary", "used scripts"],
      zilentBot,
    ],
    [
      "ZilentScript",
      "Userscript for Wiktionary. Added a lot of useful tools.",
      ["https://th.wiktionary.org/wiki/User:ZilentFyld/zilentscript.js", ,],
      zilentScriptWT,
    ],
    [
      "ZilentScriptWP",
      "Userscript for Wikipedia. Added a lot of useful tools",
      ["https://th.wikipedia.org/wiki/User:ZilentFyld/Zilentscriptwp.js", ,],
      zilentScriptWP,
    ],
  ];

  const webWorkList: workListType[] = [
    [
      "Old Pstl.pw site",
      "Older website, written in Svelte",
      ["https://github.com/pastelite/pstl.pw-old", ,],
      oldPstl,
    ],
    [
      "Current Pstl.pw site",
      "Current website, written in React",
      ["https://github.com/pastelite/pstl.pw", ,],
      /* ["https://github.com/pastelite/pstl.pw-old",,] */ newPstl,
    ],
  ];

  return (
    <div className="max-w-4xl w-screen text-2xl other-page">
      <h1>My Works</h1>
      <h2>Website</h2>
      <WorkSection
        currentIndex={currentIndex}
        thisIndex={0}
        setThisCurrent={setAsCurrentIndex}
        workList={webWorkList}
      />
      <h2>
        Wikipedia/Wiktionary{" "}
        <span className="text-base">(old, inefficient, and plain bad)</span>
      </h2>
      <WorkSection
        currentIndex={currentIndex}
        thisIndex={1}
        setThisCurrent={setAsCurrentIndex}
        workList={wikiWorkList}
      />
    </div>
  );
}

type workListType = [
  string,
  string | undefined,
  [string, string | undefined] | undefined,
  string | undefined //background
];

interface WorkSectionProps extends HTMLAttributes<HTMLDivElement> {
  workList: workListType[];
  currentIndex: number;
  setThisCurrent: (i: number) => void;
  thisIndex: number;
}

function WorkSection({
  currentIndex: sectionIndex,
  setThisCurrent: setSectionIndex,
  thisIndex,
  workList,
  ...other
}: WorkSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);

  function setThisAsCurrentIndex(a: number) {
    if (currentIndex != a) {
      setCurrentIndex(a);
      setSectionIndex(thisIndex);
    } else {
      setCurrentIndex(-1);
      setSectionIndex(-1);
    }
  }

  useEffect(() => {
    //console.log(sectionIndex)
    if (sectionIndex != thisIndex) setCurrentIndex(-1);
  }, [sectionIndex]);

  return (
    <div {...other} className="flex flex-col md:flex-row w-full">
      {workList.map((e, i) => {
        return (
          <WorkList
            thisIndex={i}
            setThisCurrent={setThisAsCurrentIndex}
            title={e[0]}
            description={e[1]}
            isActive={i == currentIndex}
            linkText={e[2] ? (e[2][1] ? e[2][1] : undefined) : undefined}
            linkTo={e[2] ? (e[2][0] ? e[2][0] : undefined) : undefined}
            backgroundImage={e[3]}
          >
            {e}
          </WorkList>
        );
      })}
    </div>
  );
}

interface WorkListProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  setThisCurrent: (i: number) => void;
  thisIndex: number;
  title?: string;
  description?: string;
  linkText?: string;
  linkTo?: string;
  backgroundImage?: string;
}

function WorkList({
  isActive,
  setThisCurrent,
  thisIndex,
  children,
  title,
  description,
  linkText,
  linkTo,
  backgroundImage,
  ...other
}: WorkListProps) {
  isActive = isActive || false;
  const bgUrl = backgroundImage;

  return (
    <div
      {...other}
      onClick={() => setThisCurrent(thisIndex)}
      className={`my-works-item-box ${isActive ? "box-active" : ""}`}
      style={{
        //backgroundColor: "#333",
        //backgroundImage:
        backgroundImage: `url(${backgroundImage})`,
        /* "url(https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg)" */
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="my-works-item-container">
        {title && <div className="header">{title}</div>}
        {description && <div className="description">{description}</div>}
        {linkTo && (
          <div className="link-container">
            <a href={linkTo}>
              <div className="link">{linkText || "files"}</div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
