import React from "react";

export const Childarea = (props) => {
  const [open] = props;
  return (
    <>
      {open ? (
        <div>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
