import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Header from "../../_components/header";

// Varibalse
const socialBtns = [
  {
    src: "https://c0.klipartz.com/pngpicture/422/842/gratis-png-logotipo-de-apple-store-tienda-de-aplicaciones-android-google-play-boton-para-comenzar-ahora-thumbnail.png",
    href: "https://www.apple.com/store",
  },
  {
    src: "https://texttofloss.com/wp-content/uploads/2021/01/Google-Play-Store-Button.png",
    href: "https://play.google.com/store/apps?hl=en",
  },
];

const mobileImage = [
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQts1Athh-CB5278fBtkgGgS7VRnWEtm1p5blGUGfHS2zIVV_6",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUjoxU0eilV-5Qmxo5EqEMuMijatyLqZrJ7dwjH7vQbcjjaPZ5",
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1Z7Bf7Ivlmze081udzpGra3j2TxXSrq_4QC7w1T8qhBukeW5d",
];
export default function Home() {
  return (
    <div className="  relative z-0 ">
      <div className="bg-sky-200 h-[75vh] absolute inset-0 -z-10"></div>
      <div className="space-y-4 *:first-letter:capitalize section-wrapper">
        <Header
          h1="Smart home application"
          p1="centralized digital platform that allows users to monitor, control,
          and automate various connected devices in their home — all from a
          smartphone, tablet, or desktop."
          p2="It integrates with smart lights, thermostats, security cameras, door
          locks, appliances, and more, enabling real-time control and automation
          through an intuitive interface."
        />
        <ul className="flex items-center justify-center gap-4 ">
          {mobileImage.map((element, index) => (
            <li key={element}>
              <Image
                src={element}
                alt="mobile view"
                width={200}
                height={200}
                style={{ boxShadow: "0px 1px 10px 3px rgba(0, 0, 0, 0.3)" }}
                className={cn(index !== 1 && " mt-10", "rounded-2xl")}
              />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center gap-4 pt-10">
          {socialBtns.map((element, index) => (
            <li key={element.href}>
              <Link href={element.href}>
                <Image
                  src={element.src}
                  alt={index == 0 ? "apple store" : "google play"}
                  width={150}
                  height={200}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
