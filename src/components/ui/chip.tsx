import React from "react";

const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center bg-dark px-2 py-1 rounded-4xl h-8 text-sm fg-light">
      {children}
    </div>
  );
};

export default Chip;
