"use client";
import styles from "@/scss/mate.module.scss";
import { Link } from "@/utils";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
const Home = () => {
  const slideshows: string[] = ["modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg"];
  const productItemRef = React.useRef<HTMLDivElement>(null);
  const labelRef = React.useRef<HTMLDivElement>(null);
  const ulRef = React.useRef<HTMLUListElement>(null);
  const bannerRef = React.useRef<HTMLDivElement>(null);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const menuMobileRef = React.useRef<HTMLDivElement>(null);
  const [isOpenMenuMobile, setOpenMenuMobile] = React.useState<boolean>(false);
  React.useEffect(() => {
    let offsetView: number = window.scrollY + window.innerHeight;
    let childNodes = null;
    let elmt: HTMLElement | null = null;
    let elmtOffsetTop: number = 0;
    if (productItemRef && productItemRef.current) {
      childNodes = productItemRef.current.children;
      if (childNodes) {
        for (let i = 0; i < childNodes.length; i++) {
          elmt = childNodes.item(i) as HTMLElement | null;
          if (elmt) {
            elmtOffsetTop = elmt.offsetTop;
            if (offsetView >= elmtOffsetTop) {
              elmt.classList.add(styles.productOnScroll);
            }
          }
        }
      }
    }
    if (labelRef && labelRef.current) {
      if (offsetView >= labelRef.current.offsetTop) {
        labelRef.current.classList.add(styles.labelOnScroll);
      }
    }
    if (ulRef && ulRef.current) {
      if (offsetView >= ulRef.current.offsetTop) {
        ulRef.current.classList.add(styles.ulOnScroll);
      }
    }
    if (bannerRef && bannerRef.current) {
      if (offsetView >= bannerRef.current.offsetTop) {
        bannerRef.current.classList.add(styles.bannerOnScroll);
      }
    }
    const onScroll = () => {
      offsetView = window.scrollY + window.innerHeight;
      if (productItemRef && productItemRef.current) {
        childNodes = productItemRef.current.children;
        if (childNodes) {
          for (let i = 0; i < childNodes.length; i++) {
            elmt = childNodes.item(i) as HTMLElement | null;
            if (elmt) {
              elmtOffsetTop = elmt.offsetTop;
              if (offsetView >= elmtOffsetTop) {
                elmt.classList.add(styles.productOnScroll);
              }
            }
          }
        }
      }
      if (headerRef && headerRef.current) {
        if (headerRef.current.children) {
          let headerChild: HTMLElement | null = headerRef.current.children.item(0) as HTMLElement | null;
          let headerChildWidth: number = 0;
          if (window.scrollY > headerRef.current.clientHeight) {
            if (headerChild) {
              headerChildWidth = headerChild.clientWidth;
              headerChild.classList.remove("pt-10", "pb-10");
              headerChild.classList.add("bg-linear-to-r", "from-sky-900", "to-sky-400", "shadow-2xl", "border-b", "border-sky-400", "pt-5", "pb-5");
              headerChild.style.width = `${headerChildWidth}px`;
            }
            headerRef.current.classList.add("fixed", "w-full", "z-9000", "flex", "justify-center", "left-0", "top-0");
          } else {
            headerRef.current.classList.remove("fixed", "w-full", "z-9000", "flex", "justify-center", "left-0", "top-0");
            if (headerChild) {
              headerChildWidth = headerChild.clientWidth;
              headerChild.classList.remove("bg-linear-to-r", "from-sky-900", "to-sky-400", "shadow-2xl", "border-b", "border-sky-400", "pt-5", "pb-5");
              headerChild.classList.add("pt-10", "pb-10");
              headerChild.style.width = "100%";
            }
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const handleOpenMenuMobile = () => {
    setOpenMenuMobile(!isOpenMenuMobile);
    if (menuMobileRef && menuMobileRef.current) {
      if (isOpenMenuMobile) {
        menuMobileRef.current.classList.remove(styles.active);
      } else {
        menuMobileRef.current.classList.add(styles.active);
      }
    }
  };
  return (
    <React.Fragment>
      <header className={clsx(["h-screen", "bg-linear-to-br", "from-sky-900", "to-sky-400"])}>
        <div ref={headerRef}>
          <div className={clsx(["flex", "gap-x-50", "pt-10", "pb-10", "pl-20", "pr-20"])}>
            <div className={clsx(["w-31", "max-md:w-full", "max-md:flex", "max-md:justify-center"])}>
              <Link href={{ pathname: "/" }}>
                <Image src="/logo.png" alt="My website" width={123} height={24} className={clsx(["w-full", "h-full"])} />
              </Link>
            </div>
            <ul className={clsx(["flex", "max-md:hidden", "items-center", "gap-x-5", "text-xs", "text-white", "font-bold"])}>
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
        </div>
        <div className={clsx(["w-full", "pl-20", "pr-20", "mt-20", "flex", "max-md:block"])}>
          <div className={clsx(["w-80", "max-md:w-full"])}>
            <div ref={labelRef}>
              <div className={clsx(["text-white", "font-bold", "text-2xl"])}>The Multipurpose</div>
              <div className={clsx(["text-white", "font-bold", "text-2xl"])}>Premium Shopify Theme</div>
            </div>
            <ul className={clsx(["mt-10", "font-bold", "text-sm", styles.introduce])} ref={ulRef}>
              <li>Shopify OS 2.0</li>
              <li>NO coding knowledge required</li>
              <li>NO Monthly charge</li>
              <li>High Converting Shopify Theme</li>
              <li>Maximum Customizability</li>
              <li>Premium Support</li>
            </ul>
          </div>
          <div className={clsx(["grow", "flex", "justify-end", "max-md:justify-center"])} ref={bannerRef}>
            <Image src="/slide1-2.png" alt="Website" width={864} height={644} />
          </div>
        </div>
      </header>
      {/* Begin Menu Mobile */}
      <div className={clsx(["hidden", "max-md:block", "fixed", "top-0", "left-0", "z-9001", "w-full", "h-screen", "bg-sky-800", "text-white", styles.menuMobile])} ref={menuMobileRef}>
        <div className={clsx(["flex", "justify-center", "mt-20", "mb-10"])}>
          <Link href={{ pathname: "/" }}>
            <Image src="/logo.png" alt="My website" width={123} height={24} className={clsx(["w-30"])} />
          </Link>
        </div>
        <ul>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>Demos</Link>
          </li>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>Collection Pages</Link>
          </li>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>Product Pages</Link>
          </li>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>Responsive Layout</Link>
          </li>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>Features</Link>
          </li>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>FAQs</Link>
          </li>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>Documentation</Link>
          </li>
        </ul>
      </div>
      {isOpenMenuMobile ? (
        <button role="button" className={clsx(["hidden", "max-md:block", "fixed", "top-3", "right-3", "z-9001", "text-2xl", "text-white"])} onClick={handleOpenMenuMobile}>
          <CloseOutlined />
        </button>
      ) : (
        <button role="button" className={clsx(["hidden", "max-md:block", "fixed", "top-3", "right-3", "z-9001", "text-2xl", "text-white"])} onClick={handleOpenMenuMobile}>
          <MenuOutlined />
        </button>
      )}
      {/* End Menu Mobile */}
      <div className={clsx(["bg-[#e8eef1]", "pt-20", "pl-4", "pr-4"])}>
        {slideshows.length > 0 && (
          <div className={clsx(["w-260", "max-md:w-full", "ml-auto", "mr-auto", "grid", "grid-cols-3", "max-md:grid-cols-2", "max-sm:grid-cols-1", "gap-x-7", "gap-y-30"])} ref={productItemRef}>
            {slideshows.map((item: string, idx: number) => {
              return (
                <Link key={`product-${idx}`} href={{ pathname: "/" }} className={clsx(["bg-white", "pl-4", "pr-4", "pt-4", "pb-4", "rounded-xl", "shadow-2xl", styles.productItem])}>
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
    </React.Fragment>
  );
};
export default Home;
