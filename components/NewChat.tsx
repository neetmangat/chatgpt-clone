import { PlusIcon } from "@heroicons/react/20/solid";

function NewChat() {
  return (
    <div>
      <div className="border-gray-700 border chatRow">
        <PlusIcon className="h-4 w-4" />
        <p>New Chat</p>
      </div>
    </div>
  );
}

export default NewChat;
