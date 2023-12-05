import styled from "styled-components";
import Stats from "./Stats";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";
// import { useRecentBookings } from "./useRecentBookings";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
  overflow-x: hidden;
`;

function DashboardLayout() {
  const [searchParams] = useSearchParams();

  const numDays2 = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays2).toISOString();

  const { isLoading: isLoading1, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays2}`],
  });

  // const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { isLoading: isLoading2, confirmedStays, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  // console.log({ bookings, isLoading1 });

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
