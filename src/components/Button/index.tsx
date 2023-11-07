import React, { ReactNode } from "react";
import useTheme from "../../hooks/useTheme";

const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  const { theme } = useTheme();
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: theme?.colors.primary || "grey" }}
    >
      {children}
    </button>
  );
};

export default Button;
