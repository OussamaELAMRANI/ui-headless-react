import Button from "@/ui/Button";
import { FacebookButton } from "@/component/CtaButtons/FacebookButton";

function App() {
  return (
    <>
      <h1 className="text-center text-5xl my-4">Vite + React</h1>
      <div className="card">
        <Button variant="primary">Button text</Button>
        <Button variant="secondary">Button text</Button>
        <Button variant="success">Button text</Button>
        <Button variant="warning">Button text</Button>
        <Button variant="danger">Button text</Button>
        <Button variant="danger" pill>
          Button text
        </Button>
        <FacebookButton />
      </div>
    </>
  );
}

export default App;
