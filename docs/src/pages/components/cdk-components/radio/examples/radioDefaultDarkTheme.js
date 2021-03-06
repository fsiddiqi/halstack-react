import { DxcRadio } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(true);
  const onClick = newValue => {
    changeChecked(newValue);
  };

  return (
    <div style={{ background: "#000000" }}>
      <DxcRadio
        checked={checked}
        theme="dark"
        label="Radio Label"
        onClick={onClick}
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcRadio,
  useState
};

export default { code, scope };
