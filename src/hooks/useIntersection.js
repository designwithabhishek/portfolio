import React, { useEffect } from "react";

let listenersCallback = new Map();
let observer;

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (listenersCallback.has(entry.target)) {
      const callback = listenersCallback.get(entry.target);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        listenersCallback.delete(entry.target);
        callback();
      }
    }
  });
};

const getObserver = () => {
  if (!observer) {
    observer = new IntersectionObserver(handleIntersection, {
      root: 0,
      threshold: 0.15,
    });
    return observer;
  }
};

const useIntersection = (elem, cb) => {
  useEffect(() => {
    const target = elem.current;
    const observer = getObserver();
    listenersCallback.set(target, cb);
    observer.observe(target);
    return () => {
      listenersCallback.delete(target);
      observer.unobserve(target);
    };
  }, []);
};

export default useIntersection;
