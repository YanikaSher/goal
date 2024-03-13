import { useEffect } from "react";

export function DisplayUserError(children: String) {
  return (
  <div >
    <p className="text-red-600 text-sm">

    {children}
    </p>
    </div>
  );
}
