import { ReactElement } from "react";
import { useFetchTimeSeries } from "../hooks/timeseries";

export default function Table(): ReactElement {
  const { refetch, apiResponse } = useFetchTimeSeries();

  return (
    <>
      <table>
        <thead className="*:text-[#1f2937] *:font-normal *:p-[1.25rem]">
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
          <th>Volume</th>
        </thead>
        <tbody>
          {!!apiResponse
            ? Object.keys(apiResponse.timeSeries).map((day) => (
                <tr className="*:text-[#4b5563] *:py-[1rem] *:px-[2.5rem] *:text-sm">
                  <td>{apiResponse.timeSeries[`${day}`]["1. open"]}</td>
                  <td>{apiResponse.timeSeries[`${day}`]["2. high"]}</td>
                  <td>{apiResponse.timeSeries[`${day}`]["3. low"]}</td>
                  <td>{apiResponse.timeSeries[`${day}`]["4. close"]}</td>
                  <td>{apiResponse.timeSeries[`${day}`]["5. volume"]}</td>
                </tr>
              ))
            : "No data was fetched"}
        </tbody>
      </table>
      {!!apiResponse?.pages && (
        <nav aria-label="Table pagination">
          <ul>
            {new Array(apiResponse?.pages).map((p) => (
              <li>
                <a href={`#${p}`} onClick={e => {
                  e.preventDefault();
                  refetch(p);
                }} >{p}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
