import React, { JSX, RefObject, useEffect, useRef } from "react";

function App() {
  return (
    <div>
      <div
        style={{ width: "100%", height: 3000, backgroundColor: "lightblue" }}
      ></div>
      <MyComponent text="Test my component" />
    </div>
  );
}

export default App;

function showOnlyInViewport<Props extends Record<string, any>>(
  cb: (props: Props, ref: RefObject<any>) => JSX.Element
) {
  return (props: Props) => {
    const [visible, setVisible] = React.useState(false);
    const ref = useRef<any>(null);

    useEffect(() => {
      if (!ref.current) return;

      let options = {
        // root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 1,
      };

      let observer = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }, options);

      observer.observe(ref.current);
    }, []);

    return visible ? (
      cb(props, ref)
    ) : (
      <div
        ref={ref}
        style={{ width: 150, height: 150, backgroundColor: "orange" }}
      >
        Loading...
      </div>
    );
  };
}

const MyComponent = showOnlyInViewport<{ text: string }>(({ text }, ref) => {
  return <div ref={ref}>{text}</div>;
});
