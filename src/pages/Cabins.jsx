import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { CabinsTable } from "../features/cabins/CabinTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  const [showForm, setShowFrom] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinsTable />

        <Button onClick={() => setShowFrom((show) => !show)}>
          Add new cabin
        </Button>

        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
