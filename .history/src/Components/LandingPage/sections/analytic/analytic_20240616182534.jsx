export default function Analytic() {
  return (
    <div className="p-5 md:px-9 max-w-screen-xl items-start  py-32 md:py-52 bg-red-50  flex flex-col md:flex-row gap-y-20 mx-auto gap-x-11 ">
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
        <img src="/images/graph.svg" alt="graph" />
      </div>
    </div>
  );
}
