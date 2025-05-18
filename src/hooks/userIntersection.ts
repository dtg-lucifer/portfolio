import { useEffect, useRef, useState } from "react";

// This hook allows you to observe the intersection of an element with the viewport.
// It returns a ref to be attached to the element and a boolean indicating if the element is intersecting.
// You can adjust the threshold to control when the intersection callback is triggered.
// @example
// const { ref, isIntersecting } = useIntersectionObserver();
// <div ref={ref}>...</div>
// isIntersecting will be true when the element is at least 10% visible in the viewport.
// @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
export function useIntersectionObserver<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust this to trigger earlier/later
      },
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref.current]);

  return { ref, isIntersecting };
}
