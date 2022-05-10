import { useBrowserLanguage } from "../logic/BrowserLanguageProvider";

const Test = () => {
  const { Language } = useBrowserLanguage();
  return (
    <div className="text-slate-700 dark:text-slate-300 tracking-wide flex-1 max-w-lg mx-auto py-16 space-y-4">
      <h1>Language is: {Language}</h1>
    </div>
  );
};

export default Test;
