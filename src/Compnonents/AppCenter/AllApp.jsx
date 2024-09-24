/** @format */

import { IoAppsOutline } from "react-icons/io5";

/** @format */
const drop = "/Assets/DropBox.png";
const figma = "/Assets/figma.png";
const github = "/Assets/github.png";
const googleCalendar = "/Assets/Googlecalender.png";
const googleDrive = "/Assets/googledrive.jpeg";
const jira = "/Assets/Jira.png";
const microsoftTeams = "/Assets/Microsoft_Office_Teams_Logo_256px.png";
const salesforce = "/Assets/Salesforce-logo.webp";
const slack = "/Assets/slack.png";
const appleCalendar = "/Assets/applecalender.png";
const outlook = "/Assets/outlookcalender.png";
const box = "/Assets/Box.png";
const googledrive = "/Assets/googledrive.jpeg";
const discords = "/Assets/Discords.png";
const googlechat = "/Assets/googlechat.png";
const UpMeet = "/Assets/uPMEET.jpeg";
const zoom = "/Assets/zoom.png";
const confluence = "/Assets/Confluence.png";
const Hubspot = "/Assets/guidelines_the-sprocket.svg";
const chrome = "/Assets/chromeextension.png";
const clock = "/Assets/clockify.png";

// eslint-disable-next-line react/prop-types
function AllApp({ activeSection }) {
  const appData = {
    Featured: {
      heading: "Feature",
      para: "Some of our favorite and most popular integrations.",
      cards: [
        {
          logo: drop,
          title: "DropBox",
          description:
            "Attach Dropbox files to tasks and search for Dropbox files directly within ClickUp.",
        },
        {
          logo: figma,
          title: "Figma",
          description:
            "View Figma designs, create new files, and search for existing ones—all directly within ClickUp.",
        },
        {
          logo: github,
          title: "GitHub",
          description:
            "View GitHub designs, create new files, and search for existing ones—all directly within ClickUp.",
        },
        {
          logo: googleCalendar,
          title: "Google Calendar",
          description: "Sync between Google Calendar and ClickUp.",
        },
        {
          logo: googleDrive,
          title: "Google Drive",
          description:
            "Easily attach, create, and search for Google Drive files directly within ClickUp.",
        },
        {
          logo: jira,
          title: "Jira",
          description:
            "Preview, create, and search Jira issues all within ClickUp.",
        },
        {
          logo: microsoftTeams,
          title: "Microsoft Teams",
          description:
            "Transform conversations into action by syncing ClickUp activities, creating tasks, and previewing links — all within Microsoft Teams.",
        },
        {
          logo: salesforce,
          title: "Salesforce",
          description:
            "Preview Salesforce links, create new leads, and search Salesforce — all directly within ClickUp.",
        },
        {
          logo: slack,
          title: "Slack",
          description:
            "Bring ClickUp inside Slack with commands and notification.",
        },
      ],
    },
    Calendar: {
      heading: "Calendars",
      para: "Sync your tasks and your Calendar.",
      cards: [
        {
          logo: appleCalendar,
          title: "Apple Calendar",
          description: "Sync Apple Calendar with ClickUp.",
        },
        {
          logo: googleCalendar,
          title: "Google Calendar",
          description: "Sync Google Calendar with ClickUp.",
        },
        {
          logo: outlook,
          title: "Outlook Calendar",
          description: "Sync Outlook Calendar with ClickUp.",
        },
      ],
    },
    Cloud: {
      heading: "Cloud Storage",
      para: "Search & bring your files inside ClickUp.",
      cards: [
        {
          logo: box,
          title: "box",
          description:
            "Attach Box files to tasks, comments and search for Box files directly within ClickUp.",
        },
        {
          logo: drop,
          title: "Dropbox",
          description:
            "Attach Dropbox files to tasks and search for Dropbox files directly within ClickUp.",
        },
        {
          logo: googledrive,
          title: "googledrive",
          description:
            "Attach google drive files to tasks and search for Google Drive files directly within ClickUp.",
        },
      ],
    },
    Communication: {
      heading: "Communications",
      para: "Connect ClickUp with chat and video.",
      cards: [
        {
          logo: discords,
          title: "discords",
          description: "Connect ClickUp to post notifications to Google.",
        },
        {
          logo: googlechat,
          title: "googlechat",
          description: "Connect ClickUp with chat and video.",
        },
        {
          logo: microsoftTeams,
          title: "microsoft",
          description:
            "Transform conversations into action by syncing ClickUp activities, creating tasks, and previewing links — all within Microsoft Teams.",
        },
        {
          logo: slack,
          title: "slack",
          description:
            "Bring ClickUp inside Slack with commands and notifications",
        },
        {
          logo: UpMeet,
          title: "UpMeet",
          description: "Have productive meetings with your team in ClickUp.",
        },
        {
          logo: zoom,
          title: "Zoom",
          description: "Start zoom meeting right from task.",
        },
      ],
    },
    Connected: {
      heading: "Connected Search",
      para: "Search all your apps inside ClickUp",
      cards: [
        {
          logo: box,
          title: "Box",
          description:
            "Attach Box files to tasks, comments and search for Box files directly within ClickUp.",
        },
        {
          logo: confluence,
          title: "Confluence",
          description: "Search Confluence inside ClickUp",
        },
        {
          logo: drop,
          title: "Dropbox",
          description:
            "Attach files to tasks and search for Dropbox files directly",
        },
        {
          logo: figma,
          title: "Figma",
          description:
            "View Figma designs, create new files, and search for existing ones—all directly within ClickUp.",
        },
        {
          logo: github,
          title: "GitHub",
          description:
            "View GitHub designs, create new files, and search for existing ones—all directly within ClickUp.",
        },
      ],
    },
    CRM: {
      heading: "CRM",
      para: "Link ClickUp to your customer data.",
      cards: [
        {
          logo: Hubspot,
          title: "HibSpot",
          description:
            "Integrate HubSpot Deal Workflows to bring tour deal data into ClickUP",
        },
        {
          logo: salesforce,
          title: "Salesforce",
          description:
            "Preview Salesforce links, create new leads, and search Salesforce — all directly within ClickUp.",
        },
      ],
    },
    Development: {
      heading: "Development",
      para: "Engineer,design & autimate with ClickUp",
      cards: [
        {
          logo: box,
          title: "Box",
          description:
            "Attach Box files to tasks, comments and search for Box files directly within ClickUp.",
        },
        {
          logo: confluence,
          title: "Confluence",
          description: "Search Confluence inside ClickUp",
        },
        {
          logo: drop,
          title: "Dropbox",
          description:
            "Attach files to tasks and search for Dropbox files directly",
        },
        {
          logo: jira,
          title: "Jira",
          description:
            "Preview, create, and search Jira issues all within ClickUp.",
        },
      ],
    },
    Email: {
      heading: "Email",
      para: "Send email from ClickUp and get replies in task",
      cards: [
        {
          logo: outlook,
          title: "Outlook Email",
          description: "Send and receive emails without leaving  ClickUp.",
        },
      ],
    },
    TimeTracking: {
      heading: "Time Tracking",
      para: "Make time tacking easier and more powerful.",
      cards: [
        {
          logo: chrome,
          title: "Chrome Extension",
          description: "Bring ClickUp with you everywhere you go in chrome",
        },
        {
          logo: clock,
          title: "Clockify",
          description: "Track time easier and more powerful",
        },
      ],
    },
  };

  const allApps = Object.values(appData).flatMap((section) => section.cards);
  // eslint-disable-next-line react/prop-types
  const sectionKey = activeSection.replace("/", "") || "allapp";
  const sectionData =
    sectionKey === "allapp"
      ? { heading: "All Apps", para: "All available apps.", cards: allApps }
      : appData[sectionKey] || appData.Featured;

  return (
    <div>
      <div className="flex justify-between items-center bg-white p-4">
        <div className="flex justify-between items-center gap-2">
          <IoAppsOutline />
          <span className="font-semibold">{`All Apps / ${sectionKey}`}</span>
        </div>
        <div className="px-8 flex items-center">
          <input
            type="text"
            placeholder="Search apps..."
            className="bg-gray-200 border border-gray-300 rounded-lg p-1 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <h1 className="mt-4 font-bold p-2 text-gray-700">
          {sectionData.heading}
        </h1>
        <p className="font-light p-2 text-gray-500">{sectionData.para}</p>
      </div>
      <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        {sectionData.cards.map((card, index) => (
          <div
            key={index}
            className="p-4 border rounded-md hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img src={card.logo} alt={card.title} className="w-12 h-12 mb-2" />
            <h2 className="font-bold text-gray-700 mt-2">{card.title}</h2>
            <p className="font-thin text-gray-400 text-sm mt-2">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllApp;
