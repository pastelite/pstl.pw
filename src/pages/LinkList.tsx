import { HTMLAttributes } from "react";

export default function LinkList() {
  return (
    <div className="max-w-4xl w-screen text-2xl other-page">
      <h1>Links</h1>
      <div className="flex flex-wrap">
        <LinkListItem link="https://www.reddit.com/user/pastelite-">
          Reddit
        </LinkListItem>
        <LinkListItem>Discord</LinkListItem>
        <LinkListItem>Wikipedia</LinkListItem>
        <LinkListItem>Wiktionary</LinkListItem>
        <LinkListItem>Tatoeba</LinkListItem>
        <LinkListItem>Steam</LinkListItem>
        <LinkListItem>Osu</LinkListItem>
      </div>
      <h2></h2>
    </div>
  );
}

interface LinkListItemProps extends HTMLAttributes<HTMLDivElement> {
  link?: string;
}

function LinkListItem(props: LinkListItemProps) {
  return (
    <a href={props.link}>
      <div {...props} className="border py-3 px-4 m-2 rounded-md">
        {props.children}
      </div>
    </a>
  );
}
