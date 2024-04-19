import React from "react";
import { cn } from "@/lib/utils";

const List = ({ children, className, ...props }) => (
  <ul className={cn("list-disc pl-5", className)} {...props}>
    {children}
  </ul>
);

const ListItem = ({ children, className, ...props }) => (
  <li className={cn("py-1", className)} {...props}>
    {children}
  </li>
);

export { List, ListItem };
