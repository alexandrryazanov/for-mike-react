import React, {
  ComponentProps,
  JSX,
  RefObject,
  useEffect,
  useRef,
} from "react";

export default function showOnlyInViewport<
  Props extends ComponentProps<any>,
  Element extends HTMLElement = HTMLElement
>(cb: (props: Props, ref: RefObject<Element>) => JSX.Element) {
  return (props: Props) => {
    const [visible, setVisible] = React.useState(true);
    const ref = useRef<Element>(null);

    useEffect(() => {
      if (!ref.current) return;

      const options: IntersectionObserverInit = {
        // root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 1,
      };

      const observer = new IntersectionObserver((entries) => {
        setVisible(entries[0]?.isIntersecting);
      }, options);

      observer.observe(ref.current);

      return () => observer.disconnect();
    }, []);

    if (!visible) return <div ref={ref as RefObject<any>}>Loading...</div>;
    return cb(props, ref);
  };
}
