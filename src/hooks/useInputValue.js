import { useState } from "react";

export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    function onChange(e) {
      e.target && e.target.value ? setValue(e.target.value) : setValue("");
    },
  ];
};
