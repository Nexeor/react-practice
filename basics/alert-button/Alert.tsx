import { ReactNode } from "react";

interface alertProps {
  children: ReactNode;
  isActive: boolean;
  onClickClose: () => void;
}

const alert = ({ children, isActive, onClickClose }: alertProps) => {
  if (isActive == false) return null;
  return (
    <div className="alert alert-warning alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClickClose}
      ></button>
    </div>
  );
};

export default alert;
