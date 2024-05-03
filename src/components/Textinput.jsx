import { SendIcon } from ".";

export const TextInput = () => {
  return (
    <div className="bg-primary w-full p-4 absolute bottom-0 flex justify-center items-center">
      <div className="bg-accent w-6/12 p-1 rounded-md flex gap-2 justify-center items-center">
        <input
          className="w-full select-none"
          type="text"
          name="textEntry"
          id="textEntries"
          placeholder="Type anything..."
        />
        <button className="bg-secondary rounded-md p-0.5" type="button">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};
