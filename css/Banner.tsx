interface BannerProps {
  bannerText: string;
}

function Banner({ bannerText }: BannerProps) {
  return <h1>{bannerText}</h1>;
}

export default Banner;
