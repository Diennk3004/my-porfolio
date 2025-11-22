"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Link } from "@/utils";
import styles from "@/scss/header.module.scss";
const Header = () => {
  return (
    <React.Fragment>
      <header className={clsx(["h-150", "bg-linear-to-br", "from-sky-900", "to-sky-400"])}>
        <div className={clsx(["flex", "gap-x-50", "pt-10", "pb-10", "pl-8", "pr-8"])}>
          <div className={clsx(["w-31"])}>
            <Link href={{ pathname: "/" }}>
              <Image src="/logo.png" alt="My website" width={123} height={24} className={clsx(["w-full", "h-full"])} />
            </Link>
          </div>
          <ul className={clsx(["flex", "items-center", "gap-x-5", "text-xs", "text-white", "font-bold"])}>
            <li>
              <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                Demos
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                Collection Pages
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                Product Pages
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                Responsive Layout
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                Features
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                FAQs
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                Documentation
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx(["w-325", "mx-auto", "flex", "justify-between"])}>
          <div>
            <div className={clsx(["text-white", "font-bold", "text-2xl"])}>The Multipurpose</div>
            <div className={clsx(["text-white", "font-bold", "text-2xl"])}>Premium Shopify Theme</div>
            <ul className={clsx(["mt-10", styles.introduce])}>
              <li>Shopify OS 2.0</li>
              <li>NO coding knowledge required</li>
              <li>NO Monthly charge</li>
              <li>High Converting Shopify Theme</li>
              <li>Maximum Customizability</li>
              <li>Premium Support</li>
            </ul>
          </div>
          <div>
            <Image src="/slide1-2.png" alt="Website" width={864} height={644} className={clsx(["h-130", "w-auto"])} />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export { Header };
