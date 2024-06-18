import { useEffect, useState } from "react";
import { IAPIResponse } from "../types/timeseries";


function useFetchTimeSeries() {
  const [apiResponse, setApiResponse] = useState<IAPIResponse>();

  useEffect(() => {
    // fetch_data();
  }, []);

  async function fetch_data(page: number = 1) {
    const data: string = await (await fetch(`http://localhost:3001/intraday?page=${page}`)).json();
    setApiResponse(JSON.parse(data) as IAPIResponse);
  }

  async function refetch(page?: number) {
    await fetch_data(page);
  }

  return { apiResponse, refetch };
}

export { useFetchTimeSeries }