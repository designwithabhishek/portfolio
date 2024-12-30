import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Content, PageLoaderWrapper, Title } from "./page-loader.styles";

const PageLoader = (props) => {
  const { title, children } = props;
  const [opacity, setOpacity] = useState(0);
  const [loadComplete, setLoadComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const wrapperRef = useRef();

  //   useEffect(() => {
  //     if (wrapperRef.current) {
  //       const wrapper = wrapperRef.current;
  //       wrapper.addEventListener("animationend", () => {
  //         setOpacity(1);
  //         setTimeout(() => {
  //           setOpacity(0);
  //           setLoadComplete(true);
  //         }, 2000);
  //       });
  //     }
  //   }, []);

  const handleAnimationEnd = () => {
    setOpacity(1);
    setTimeout(() => {
      setOpacity(0);
      setLoadComplete(true);
      setShowContent(true);
    }, 500);
  };
  return (
    <>
      <PageLoaderWrapper
        ref={wrapperRef}
        loadComplete={loadComplete}
        onAnimationEnd={handleAnimationEnd}
      >
        <Title opacity={opacity}>{title}</Title>
      </PageLoaderWrapper>
      <Content showContent={showContent}>{children}</Content>
    </>
  );
};

export default PageLoader;