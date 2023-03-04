import { useEffect } from "react";
export const Texts = () => {
  let value = "hello";
  useEffect(() => {
    console.log("component is mounted");
    return ()=> {
        console.log("component is unmounted");
    }
  }, [value]);
  return (
    <div>
      <p>Text is red</p>
      <h1>{value}</h1>
    </div>
  );
};
