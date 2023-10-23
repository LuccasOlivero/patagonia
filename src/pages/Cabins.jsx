import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <img
        src="https://eiyahyupkcgjshtwwlli.supabase.co/storage/v1/object/sign/cabin-images/cabin-006.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvY2FiaW4tMDA2LmpwZyIsImlhdCI6MTY5ODA5MDU2NywiZXhwIjoxNjk4Njk1MzY3fQ.iuu2T_o7t0Rb8TCjPgR69RT7giIZVVtF1Q2-MFcbQk8&t=2023-10-23T19%3A49%3A30.159Z"
        alt=""
      />
    </Row>
  );
}

export default Cabins;
