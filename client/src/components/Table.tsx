import { ReactElement } from "react";
import { useFetchTimeSeries } from "../hooks/timeseries";

export default function Table(): ReactElement {
  const { refetch, apiResponse } = useFetchTimeSeries();

  const sample_data = {
    "2024-06-17": {
      "1. open": "62279.16000000",
      "2. high": "62475.00000000",
      "3. low": "62146.90000000",
      "4. close": "62166.85000000",
      "5. volume": "3.00321632",
    },
    "2024-06-16": {
      "1. open": "64664.14000000",
      "2. high": "65298.24000000",
      "3. low": "60801.06000000",
      "4. close": "62262.17000000",
      "5. volume": "1826.63665226",
    },
    "2024-06-09": {
      "1. open": "62437.65000000",
      "2. high": "66132.47000000",
      "3. low": "62283.90000000",
      "4. close": "64648.18000000",
      "5. volume": "1890.72681229",
    },
    "2024-06-02": {
      "1. open": "63152.39000000",
      "2. high": "64989.91000000",
      "3. low": "61440.00000000",
      "4. close": "62428.48000000",
      "5. volume": "1558.55547124",
    },
    "2024-05-26": {
      "1. open": "60930.51000000",
      "2. high": "65933.02000000",
      "3. low": "60750.00000000",
      "4. close": "63154.49000000",
      "5. volume": "2469.19517889",
    },
    "2024-05-19": {
      "1. open": "57085.97000000",
      "2. high": "62261.43000000",
      "3. low": "56418.03000000",
      "4. close": "60927.75000000",
      "5. volume": "2144.93191604",
    },
    "2024-05-12": {
      "1. open": "59515.05000000",
      "2. high": "60834.00000000",
      "3. low": "55876.05000000",
      "4. close": "57075.98000000",
      "5. volume": "2126.96316157",
    },
  };

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
          {/* {!!apiResponse
            ? Object.keys(apiResponse.timeSeries).map((day) => (
                <tr className="*:text-[#4b5563] *:py-[1rem] *:px-[2.5rem] *:text-sm">
                  <td>{apiResponse.timeSeries[`${day}`]["1. open"]}</td>
                  <td>{apiResponse.timeSeries[`${day}`]["2. high"]}</td>
                  <td>{apiResponse.timeSeries[`${day}`]["3. low"]}</td>
                  <td>{apiResponse.timeSeries[`${day}`]["4. close"]}</td>
                  <td>{apiResponse.timeSeries[`${day}`]["5. volume"]}</td>
                </tr>
              ))
            : "No data was fetched"} */}
        </tbody>
      </table>
      {!!apiResponse?.pages && (
        <nav aria-label="Table pagination">
          <ul>
            {new Array(apiResponse?.pages).map((p) => (
              <li>
                <a href={`#${p}`}>{p}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
