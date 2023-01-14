import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    console.log("handleClick");
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
