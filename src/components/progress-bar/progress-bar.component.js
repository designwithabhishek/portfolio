import React from "react";
import { ProgressBarInner, ProgressBarOuter } from "./progress-bar.styles";

const ProgressBar = (props) => {
  const { value, max } = props;
  return (
    <ProgressBarOuter>
      <ProgressBarInner progress={`${Math.floor((value / max) * 100)}%`} />
    </ProgressBarOuter>
  );
};

export default ProgressBar;
