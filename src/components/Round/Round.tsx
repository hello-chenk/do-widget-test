import React, { FC, PropsWithChildren } from "react";

export interface RoundProps {
  color: string;
}

const Round: FC<PropsWithChildren<RoundProps>> = (props) => {
  return (
    <div
      style={{
        color: props.color,
      }}
    >
      {props.children}
    </div>
  );
};

export default Round;
