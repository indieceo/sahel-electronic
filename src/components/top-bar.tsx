"use client";

import { motion } from "motion/react";
import { MapPin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

/** Yellow bar with address and contact – scrolls away with the page */
export function TopBar() {
  return (
    <motion.div
      className="w-full py-3 text-sm font-normal text-black md:py-3.5 md:text-base"
      style={{ backgroundColor: "#FDCB01" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-8 md:justify-between md:gap-x-8">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:underline"
          >
            <MapPin className="size-4 shrink-0" aria-hidden />
            <span className="truncate">{site.address}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.mail}`}
            className="flex items-center gap-1.5 hover:underline"
          >
            <Mail className="size-4 shrink-0" aria-hidden />
            <span>{site.mail}</span>
          </a>
          <a
            href={`https://wa.me/${site.whatsapp.replace(/\s/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:underline"
          >
            <FaWhatsapp className="size-4 shrink-0" aria-hidden />
            <span>{site.whatsapp}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
