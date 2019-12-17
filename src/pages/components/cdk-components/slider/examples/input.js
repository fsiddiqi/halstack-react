import { DxcSlider } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(0);
  const onChange = newValue => {
    changeValue(newValue);
  };
  const onDragEnd = ()=> {};
  const onChangeInput = (newValue) => {
    changeValue(newValue);
  };

  return (
    <DxcSlider
      minValue={0}
      maxValue={50}
      showLimitsValues={true}
      value={value}
      showInput={true}
      name="input"
      step={5}
      marks={true}
      onChange={onChange}
      onDragEnd={onDragEnd}
      onChangeInput={onChangeInput}
    />
  );
}`;

const scope = {
  DxcSlider,
  useState
};

export default { code, scope };
