import React from "react";

const Filter_SelectType = () => {
  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <span className="label-text">T-shirt for Men's</span>
        <input
          type="checkbox"
          checked="checked"
          className="checkbox checkbox-warning"
        />
      </label>
      <label className="cursor-pointer label">
        <span className="label-text">T-shirt for FeMen's</span>
        <input
          type="checkbox"
          checked="checked"
          className="checkbox checkbox-warning"
        />
      </label>
      <label className="cursor-pointer label">
        <span className="label-text">T-shirt for Unisex</span>
        <input
          type="checkbox"
          checked="checked"
          className="checkbox checkbox-warning"
        />
      </label>
    </div>
  );
};

export default Filter_SelectType;
