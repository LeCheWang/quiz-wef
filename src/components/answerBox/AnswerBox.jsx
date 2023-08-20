import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export default function AnswerBox({ handleChange, options }) {
  return (
    <div className="answer-box mb-2 ml-6">
      <div className="grid grid-cols-options grid-rows-[repeat(2,auto)] gap-2 lg:grid-flow-col lg:gap-3">
        {options.map(
          (option, index) =>
            option?.title && (
              <FormControlLabel
                key={index}
                label={option?.title}
                sx={{
                  backgroundColor: "#cbd5e1",
                  padding: "10px",
                  borderRadius: 5,
                  transition: "0.3s ease-in",
                  ":hover": {
                    backgroundColor: "#d1d1d1",
                  },
                }}
                control={
                  <Checkbox
                    checked={option?.checked}
                    onChange={(e) => handleChange(e, index)}
                  />
                }
              />
            )
        )}
      </div>
    </div>
  );
}
