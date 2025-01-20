import { useState } from "react";
import ExpandButton from "./ExpandButton";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const renderButton = children.length > maxChars;

  return (
    <>
      <div>{expanded ? children : children.substring(0, maxChars) + "..."}</div>

      {renderButton && (
        <ExpandButton
          isExpanded={expanded}
          onClickExpandButton={() => setExpanded(!expanded)}
        />
      )}
    </>
  );
};

export default ExpandableText;
