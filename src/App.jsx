import { Button, Card, CardFooter } from "react-bootstrap";

import Image from "./component/Image";
import Description from "./component/Description";
import Name from "./component/Name";
import Price from "./component/Price";
function App() {
  let firstName = "";
  return (
    <div>
      <Card bg="info" text="dark" style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Subtitle>
            <Price />
          </Card.Subtitle>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <CardFooter>
          {" "}
          Hello {firstName ? firstName : "there"}
          {firstName && "<3"}
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
