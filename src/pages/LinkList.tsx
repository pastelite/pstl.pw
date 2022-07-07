import { faDiscord, faGithub, faReddit, faSteam, faWikipediaW, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLAttributes } from "react";
import Osu from "../icons/osu.svg?component";
import "./LinkList.scss";

export default function LinkList() {
  return (
    <div className="max-w-4xl w-screen text-2xl other-page">
      <h1>Links</h1>
      <div className="flex flex-wrap">
        <LinkListItem faIcon={faGithub} link="https://github.com/pastelite">Github</LinkListItem>
        <LinkListItem faIcon={faWikipediaW} link="https://th.wikipedia.org/wiki/User:ZilentFyld">Wikipedia</LinkListItem>
        <LinkListItem faIcon={faWikipediaW} link="https://th.wiktionary.org/wiki/User:ZilentFyld">Wiktionary</LinkListItem>
      </div>
      <h2>Personal</h2>
      <div className="flex flex-wrap">
        <LinkListItem faIcon={faEnvelope} link="mailto:pastelite@pstl.pw">Email (open app)</LinkListItem>
          <div className="link-list-item path-fill-white cursor-pointer" onClick={()=>
            navigator.clipboard.writeText("pastelite@pstl.pw")
          }>
            <FontAwesomeIcon icon={faEnvelope} size={"lg"} className="mr-3"></FontAwesomeIcon>
            Email (clipboard)
          </div>
        <LinkListItem faIcon={faDiscord} link="https://discordapp.com/users/376314898562678788">Discord</LinkListItem>
        <LinkListItem faIcon={faReddit} link="https://www.reddit.com/user/pastelite-">Reddit</LinkListItem>
        <LinkListItem svgLocation={<Osu></Osu>} link="https://osu.ppy.sh/users/7098588">osu!</LinkListItem>
        <LinkListItem faIcon={faSteam} link="https://steamcommunity.com/id/pastelite/">Steam</LinkListItem>
      </div>
    </div>
  );
}

interface LinkListItemProps extends HTMLAttributes<HTMLDivElement> {
  link?: string
  useSVG?: boolean
  faIcon?: IconDefinition
  svgLocation?: JSX.Element
}

function LinkListItem({children, useSVG, faIcon, svgLocation, ...props}: LinkListItemProps) {
  return (
    <a href={props.link} className="cursor-pointer">
      <div {...props} className="link-list-item path-fill-white">
        {
          faIcon ? <FontAwesomeIcon icon={faIcon} size={"lg"} className="mr-3"></FontAwesomeIcon> : (
            svgLocation ? <div className="w-7 mr-3">{svgLocation}</div> : ""
          )
        }
        {children}
      </div>
    </a>
  );
}
