import { Button } from "./components/ui/button";

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send("ping");

  return (
    <>
      <h1>heyyy bitch</h1>
      <Button onClick={ipcHandle}> heyy bitch</Button>
    </>
  );
}

export default App;
