import { HelpIcon } from ".";

export const Header = () => {
  return (
    <div className="bg-primary w-full p-3 flex justify-between items-center">
      <h1 className="text-2xl text-secondary font-bold tracking-wider">
        AskMe
      </h1>
      <a className="bg-secondary rounded-full p-1" href="#">
        <HelpIcon />
      </a>
    </div>
  );
};
