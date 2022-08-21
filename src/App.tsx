import Button from "@/ui/Button";
import { FacebookButton } from "@/component/CtaButtons/FacebookButton";

function App() {
  return (
    <>
      <h1 className="text-center text-5xl my-4">Vite + React</h1>
      <div className="small">
        <Button variant="primary" size={"sm"}>
          Button text
        </Button>
        <Button variant="secondary" size={"sm"}>
          Button text
        </Button>
        <Button variant="success" size={"sm"}>
          Button text
        </Button>
        <Button variant="warning" size={"sm"}>
          Button text
        </Button>
        <Button variant="danger" size={"sm"}>
          Button text
        </Button>
      </div>
      <div className="normal">
        <Button variant="primary">Button text</Button>
        <Button variant="secondary">Button text</Button>
        <Button variant="success">Button text</Button>
        <Button variant="warning">Button text</Button>
        <Button variant="danger">Button text</Button>
      </div>
      <div className="large">
        <Button variant="primary" size={"lg"}>
          Button text
        </Button>
        <Button variant="secondary" size={"lg"}>
          Button text
        </Button>
        <Button variant="success" size={"lg"}>
          Button text
        </Button>
        <Button variant="warning" size={"lg"}>
          Button text
        </Button>
        <Button variant="danger" size={"lg"}>
          Button text
        </Button>
      </div>
      <div className="x-large">
        <Button variant="primary" size={"xl"}>
          Button text
        </Button>
        <Button variant="secondary" size={"xl"}>
          Button text
        </Button>
        <Button variant="success" size={"xl"}>
          Button text
        </Button>
        <Button variant="warning" size={"xl"}>
          Button text
        </Button>
        <Button variant="danger" size={"xl"}>
          Button text
        </Button>
      </div>
      <div className="rounded small">
        <Button variant="primary" size={"sm"} pill>
          Button text
        </Button>
        <Button variant="secondary" size={"sm"} pill>
          Button text
        </Button>
        <Button variant="success" size={"sm"} pill>
          Button text
        </Button>{" "}
        <Button variant="danger" size={"sm"} pill>
          Button text
        </Button>{" "}
        <Button variant="warning" size={"sm"} pill>
          Button text
        </Button>
      </div>
      <div className="rounded">
        <Button variant="primary" pill>
          Button text
        </Button>
        <Button variant="secondary" pill>
          Button text
        </Button>
        <Button variant="success" pill>
          Button text
        </Button>{" "}
        <Button variant="danger" pill>
          Button text
        </Button>{" "}
        <Button variant="warning" pill>
          Button text
        </Button>
      </div>
      <div className="social-buttons">
        <FacebookButton size={"sm"} />
        <FacebookButton size={"md"} />
        <FacebookButton size={"lg"} />
        <FacebookButton size={"xl"} />
      </div>
    </>
  );
}

export default App;
