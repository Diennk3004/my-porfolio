import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Link } from "@/utils";
import styles from "@/scss/mate.module.scss";
const Home = () => {
  const slideshows: string[] = ["modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg"];
  return (
    <div className={clsx(["bg-[#e8eef1]", "pt-20"])}>
      {slideshows.length > 0 && (
        <div className={clsx(["w-260", "mx-auto", "grid", "grid-cols-3", "gap-x-7", "gap-y-30"])}>
          {slideshows.map((item: string, idx: number) => {
            return (
              <Link href={{ pathname: "/" }} className={clsx(["bg-white", "px-4", "py-4", "rounded-xl", "shadow-2xl", styles.productItem])}>
                <div>
                  <Image src={`/${item}`} alt="Website" width={440} height={540} className={clsx(["w-full"])} />
                </div>
                <h3 className={clsx(["mt-8", "font-bold", "text-sm"])}>ModaMate - Home 1</h3>
                <div className={clsx(["mt-4", "text-xs", "text-gray-600"])}>Clothes and Fashion Shopify Theme</div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Home;
