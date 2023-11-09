import showOnlyInViewport from "../../HOCs/showOnlyInViewport";
import React from "react";

interface MyComponentProps {
  text: string;
}
const TestComponent = showOnlyInViewport<MyComponentProps, HTMLDivElement>(
  ({ text }, ref) => {
    return <div ref={ref}>{text}</div>;
  }
);

export default TestComponent;
