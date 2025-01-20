import { ReactNode } from "react";

interface BannerProps {
  children: ReactNode;
}

function Banner({ children }: BannerProps) {
  return <h1>{children}</h1>;
}

export default Banner;
