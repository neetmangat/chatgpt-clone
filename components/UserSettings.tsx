"use client";
import {
  ArrowRightOnRectangleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import { useSession, signOut } from "next-auth/react";

function UserSettings() {
  const { data: session } = useSession();

  return (
    <button
      className="flex w-full gap-3 p-3 rounded-es-sm justify-between items-center cursor-pointer hover:bg-[#343541]"
      onClick={() => signOut()}
    >
      <div className="flex items-center">
        <img
          src={session?.user?.image!}
          alt="Profile pic"
          className="h-8 w-8 rounded cursor-pointer hover:opacity-50"
        />
        <p className="text-white text-center text-sm pl-2">
          {session?.user?.name}
        </p>
      </div>

      <ArrowRightOnRectangleIcon className="h-5 w-5 text-white cursor-pointer" />
    </button>
  );
}

export default UserSettings;
