import Image from "next/image";
import HeroPage from "./hero/page";
import Categories from "./category/page";

export default function Home() {
  return (
    <>
      <HeroPage />
      <Categories />
    </>
  );
}
