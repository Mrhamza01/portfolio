import type { TerminalData } from "~/types";

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
              Hi, I'm Muhammad Hamza. Senior Software Engineer & Full Stack Developer.
              Specializing in architecting scalable SaaS & ERP platforms.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Cloud-native / Kubernetes / DevOps / Full-stack engineering"
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://hamzaghafoor.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://hamzaghafoor.vercel.app/
              </a>
            </li>
          </ul>
        )
      }
    ]
  }
];

export default terminal;
