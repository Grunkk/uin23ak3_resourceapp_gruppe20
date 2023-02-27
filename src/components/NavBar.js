import { useState } from "react";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  function HomeTabContent() {
    return <div>Home content</div>;
  }

  function AboutTabContent() {
    return <div>About content</div>;
  }

  function ContactTabContent() {
    return <div>Contact content</div>;
  }

  const tabContentComponents = [
    <HomeTabContent />,
    <AboutTabContent />,
    <ContactTabContent />,
  ];

  return (
    <>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabContentComponents.map((content, index) => (
          <div
            key={index}
            className={`tab-pane ${index === activeTab ? "active" : ""}`}
          >
            {content}
          </div>
        ))}
      </div>
    </>
  );
}

export default function Navbar() {
  const tabs = [
    {
      label: "HTLM",
    },
    {
      label: "CSS",
    },
    {
      label: "Javascript",
    },
    {
      label: "React",
    },
    {
      label: "headless-cms",
    },
  ];

  return <Tabs tabs={tabs} />;
}
