import "./App.css";

function Paragraph({ children }) {
  return (
    <p className="text-slate-500 dark:text-slate-400 mt-2 text-xl">
      {children}
    </p>
  );
}
function App() {

  return (
    <div>
      <h1 className="text-slate-900 dark:text-white mt-5 text-3xl font-medium tracking-tight">
        Hello World!
      </h1>
      <div className="bg-white dark:bg-slate-800 rounded-2xl px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <Paragraph>This is a test page for tailwindcss.</Paragraph>
      </div>
      <Paragraph>
        I'm using tailwind css to build a page that uses white-on-black for
        light mode and black-on-white for dark mode.
      </Paragraph>
    </div>
  );
}

export default App;
