"use client";

import NewChat from "./NewChat";
import UserSettings from "./UserSettings";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSession } from "next-auth/react";
import { db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from "./ChatRow";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  // console.log(chats);

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* Model Selection */}</div>

          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      <UserSettings />
    </div>
  );
}

export default SideBar;
