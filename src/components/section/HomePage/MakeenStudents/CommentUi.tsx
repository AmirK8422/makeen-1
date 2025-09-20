import { Select } from "@mui/material";
import React from "react";

interface commentType {
  id?: number;
    name: string,
    cours: string,
    workIn: string,
    compenyLogo: string,
    profile: string,
  layout?: string,
  onclick?: () => void;
  selected?:boolean,
}

function CommentUi({ name, cours, workIn, compenyLogo, profile, layout,onclick,selected }: commentType) {
  return (
    <div
      className={`shadow-2xl rounded-2xl p-4 cursor-pointer transition 
        ${layout} 
        ${
          selected
            ? "border-1 border-makeen " // 
            : "border border-transparent"
        }`}
      onClick={onclick}
    >
      <div className="flex items-center gap-2">
        <div>
          <div className="flex gap-7 items-center justify-between py-2">
            <p className="text-12 text-gray">{cours}</p>
            <p className="font-medium text-14 text-black">{name}</p>
          </div>
          <div className="flex items-center justify-between gap-x-1">
            <p className="font-medium text-14 text-gray">{workIn}</p>
            <img src={compenyLogo} alt="LOGOCOMPANY" />
          </div>
        </div>
        <div>
          <img src={profile} alt="studentProfile" />
        </div>
      </div>
    </div>
  );
}


export default CommentUi;
