import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";
import { NavLink, NavLinkProps, useLocation } from "react-router-dom";
import { faGithub, faWikipediaW, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./NavigationBar.scss";

export default function NavigationBar() {
  const location = useLocation();

  //let bgClass = location.pathname !== '/' ? 'bg-primary-bg/80' : ''

  const navBG: { [key: string]: string } = {
    "/": "bg-transparent",
  };

  function bgClass() {
    console.log(navBG[location.pathname]);
    if (navBG[location.pathname]) {
      return navBG[location.pathname];
    } else {
      return "bg-primary-bg/80";
    }
    //if (location.pathname !== '/')
  }

  return (
    <div
      className={`w-screen ${bgClass()} fixed bottom-0 transition-all duration-300`}
    >
      <div className="h-20 flex justify-evenly items-center md:max-w-xl m-auto pt-1">
        <PageList />
        <PageListItem className={"md:hidden"} to="/links" icon="link">
          Links
        </PageListItem>
        <Links />
      </div>
    </div>
  );
}

function Links() {

  const LinksList = ({link,icon}:{link: string, icon: IconDefinition}) => {
    return (
    <a className="page-list-item" href={link}>
      <div className="page-list-item-text">
        <FontAwesomeIcon className="text-2xl" icon={icon} />
      </div>
    </a>)
  }

  return (
    <>
      <div className="hidden md:flex gap-4">
        <LinksList link="https://github.com/pastelite" icon={faGithub}/>
        <LinksList link="https://th.wikipedia.org/wiki/User:ZilentFyld" icon={faWikipediaW}/>
        <PageListItem to="/links" icon="more_horiz" mdShow={true}/>
      </div>
    </>
  );
}

function PageList() {
  return (
    <>
      <PageListItem to="/" icon="home">
        Home
      </PageListItem>
      <PageListItem to="/about" icon="person">
        About Me
      </PageListItem>
      <PageListItem to="/works" icon="work">
        My works
      </PageListItem>
    </>
  );
}

interface PageListItemProps extends NavLinkProps {
  //link: string
  children?: ReactNode;
  icon?: string;
  mdShow?: boolean;
}

function PageListItem({ children, icon, mdShow, className, ...props }: PageListItemProps) {
  return (
    <NavLink {...props} className={`${className}`}>
      <div className="page-list-item md:text-lg">
        <div className="page-list-item-text flex flex-col items-center">
          <span className={`material-icons ${mdShow ? "" : "md:hidden"}`}>{icon}</span>
          {children}
        </div>
      </div>
    </NavLink>
  );
}
