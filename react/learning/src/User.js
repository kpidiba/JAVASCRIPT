export const User = () => {
  const val = [
    { id: 1, name: "dkdk" },
    { id: 2, name: "dkaa" },
  ];
  return (
    <div>
      <h2>
        {val.map((val) => {
          return val.name + "----";
        })}
      </h2>
    </div>
  );
};
