import { useContext } from "react";
import { ThemeContext } from "../../../../providers/themeProvider";

export default function Analytic() {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className="p-5 md:px-9 max-w-screen-xl items-start   flex flex-col md:flex-row gap-y-20 mx-auto gap-x-11 md:py-40 ">
      <div className="text-start md:w-[35%] pt-10 ">
        <h2 className="font-bold leading-tight">
          Analytics-driven strategies.
        </h2>
        <p className="mt-7 leading-relaxed max-w-sm">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti
        </p>
      </div>
      <div className="select-none">
        <img
          src={
            isDarkTheme
              ? "/images/graph-dark.svg"
              : "/images/landingPage/graph.svg"
          }
          alt="graph"
        />
      </div>
    </div>
  );
}
