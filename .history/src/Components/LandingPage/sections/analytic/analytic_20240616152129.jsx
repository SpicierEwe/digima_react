export default function Analytic() {
  return (
    <div className="p-5 md:px-9 max-w-screen-xl items-start py-52 flex flex-col md:flex-row gap-y-20 mx-auto gap-x-11 ">
      <div className="text-start md:w-[35%] pt-10 ">
        <h2 className="text-4xl font-bold leading-tight">
          Analytics-driven strategies.
        </h2>
        <p className="mt-7 leading-relaxed max-w-md">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti
        </p>
      </div>
      <div>
        <img src="/images/graph.svg" alt="" />
      </div>
    </div>
  );
}