import { ReactElement } from "react";

interface IDailyData {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

interface IArgs {
  time_series: { [key: string]: IDailyData };
}

export default function Table({ time_series }: IArgs): ReactElement {
  return (
    <table>
      <thead className="*:text-[#1f2937] *:font-normal *:p-[1.25rem]" >
        <th>Open</th>
        <th>High</th>
        <th>Low</th>
        <th>Close</th>
        <th>Volume</th>
      </thead>
      <tbody>
        {Object.keys(time_series).map((day) => (
          <tr className="*:text-[#4b5563] *:py-[1rem] *:px-[2.5rem] *:text-sm" >
            <td>{time_series[`${day}`]["1. open"]}</td>
            <td>{time_series[`${day}`]["2. high"]}</td>
            <td>{time_series[`${day}`]["3. low"]}</td>
            <td>{time_series[`${day}`]["4. close"]}</td>
            <td>{time_series[`${day}`]["5. volume"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
