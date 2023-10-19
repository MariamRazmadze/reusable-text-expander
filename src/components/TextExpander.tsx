import { useState } from "react";

interface TextExpanderProps {
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  children: string;
}

import { Button } from "./Button";
import { Box } from "./Box";

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "magenta",
  expanded = false,
  children,
}: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <Box>
      <span>{displayText}</span>
      <Button color={buttonColor} onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </Button>
    </Box>
  );
}
