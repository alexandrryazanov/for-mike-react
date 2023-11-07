import React from "react";
import useTheme from "../../hooks/useTheme";
import Button from "../Button";
import themes from "../../themes";

const TestTheme = () => {
  const { changeTheme } = useTheme();

  return (
    <div>
      {themes.map((t) => (
        <Button onClick={() => changeTheme(t.title)}>{t.title}</Button>
      ))}
    </div>
  );
};

export default TestTheme;
