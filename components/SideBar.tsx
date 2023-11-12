"use client";

import NewChat from "./NewChat";
import UserSettings from "./UserSettings";

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Map through the ChatRows */}
        </div>
      </div>

      <UserSettings />
    </div>
  );
}

export default SideBar;
