import type { TerminalData } from "~/types";
import { profile } from "./profile";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-me",
        title: "intro.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, I&apos;m {profile.name}. {profile.title}
            </div>
            <div className="mt-2 opacity-80">{profile.summary}</div>
          </div>
        ),
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Cloud-native · Kubernetes · DevOps · Full-stack · System design · Microservices · CI/CD",
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>Phone: {profile.contact.phone}</li>
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href={`mailto:${profile.contact.email}`}
                target="_blank"
                rel="noreferrer"
              >
                {profile.contact.email}
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                className="text-blue-300"
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {profile.contact.linkedinLabel}
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                className="text-blue-300"
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
              >
                {profile.contact.githubLabel}
              </a>
            </li>
            <li>
              Portfolio:{" "}
              <a
                className="text-blue-300"
                href={profile.contact.website}
                target="_blank"
                rel="noreferrer"
              >
                {profile.contact.websiteLabel}
              </a>
            </li>
          </ul>
        ),
      },
    ],
  },
];

export default terminal;
