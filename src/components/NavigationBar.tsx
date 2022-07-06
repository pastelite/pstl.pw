import { ReactNode } from "react";
import { NavLink, NavLinkProps, useLocation } from "react-router-dom";
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
      </div>
    </div>
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
      <PageListItem to="/links" icon="link">
        Links
      </PageListItem>
    </>
  );
}

interface PageListItemProps extends NavLinkProps {
  //link: string
  children: ReactNode;
  icon?: string;
}

function PageListItem({ children, icon, ...props }: PageListItemProps) {
  return (
    <NavLink {...props} className="page-list-item">
      <div className="page-list-item md:text-lg">
        <div className="page-list-item-text flex flex-col items-center">
          <span className="material-icons md:hidden">{icon}</span>
          {children}
        </div>
      </div>
    </NavLink>
  );
}
