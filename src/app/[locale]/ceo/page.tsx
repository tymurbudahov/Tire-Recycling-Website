"use client";

import { useState } from "react";
import type React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Briefcase,
  Copy,
  Check,
  Download,
  Send,
  Building2,
  Factory,
  Handshake,
} from "lucide-react";

export default function Page() {
  const [copied, setCopied] = useState(false);

  // ▶️ Edit these placeholders with real data
  const data = {
    firstName: "Artur",
    lastName: "Budagov",
    title: "Chief Executive Officer",
    company: "Tire Recycling UA",
    email: "ceo@tirerecycling.com.ua",
    phoneUS: "+1 (786) 546-7020",
    phoneUA: "+380 (67) 631-0400",
    website: "https://tirerecycling.com.ua",
    location: "Kyiv, Ukraine • Miami, FL, USA",
  } as const;

  const fullName = `${data.firstName} ${data.lastName}`;

  // make a tel: href from a human-readable phone
  const toTelHref = (s: string) => `tel:${s.replace(/[^\d+]/g, "")}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:${data.lastName};${data.firstName};;;
FN:${fullName}
TITLE:${data.title}
ORG:${data.company}
EMAIL;TYPE=INTERNET,PREF:${data.email}
TEL;TYPE=CELL,VOICE:${data.phoneUS}
TEL;TYPE=CELL,VOICE:${data.phoneUA}
URL:${data.website}
ADR;TYPE=WORK:;;${data.location};;;;
END:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fullName.replace(/\s+/g, "_")}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white relative isolate overflow-x-hidden pb-28 sm:pb-36">
      {/* soft gradient background */}
      <DecorBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-6 sm:gap-8 md:grid-cols-[1.2fr_1fr] items-stretch"
        >
          {/* Business Card */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-amber-400 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]"
          >
            {/* subtle animated shine */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity bg-[radial-gradient(80rem_20rem_at_0%_0%,white,transparent)]" />

            <div className="relative rounded-3xl bg-neutral-900/70 backdrop-blur-md p-6 sm:p-8 md:p-10 h-full">
              <div className="flex flex-col md:flex-row md:items-center gap-5 sm:gap-6 md:gap-8">
                {/* Avatar */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.98 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="size-16 sm:size-20 md:size-24 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 grid place-items-center shadow-inner ring-1 ring-white/10"
                  >
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                      {data.firstName[0]}
                      {data.lastName[0]}
                    </span>
                  </motion.div>
                  <div className="absolute -bottom-1 -right-1 rounded-full p-[2px] bg-gradient-to-br from-cyan-500 to-fuchsia-500">
                    <div className="rounded-full bg-neutral-900 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium">
                      CEO
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                    <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                      {fullName}
                    </span>
                  </h1>
                  <p className="mt-1 text-neutral-300 flex flex-wrap items-center gap-2">
                    <Briefcase className="size-4 opacity-80 shrink-0" />
                    <span className="truncate">{data.title}</span>
                    <span className="opacity-40">•</span>
                    <span className="truncate">{data.company}</span>
                  </p>
                  <p className="mt-1 text-neutral-400 flex items-center gap-2">
                    <MapPin className="size-4 opacity-80 shrink-0" />
                    <span className="break-words">{data.location}</span>
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-5 sm:my-6 h-px bg-gradient-to-r from-transparent via-neutral-700/60 to-transparent" />

              {/* Contact grid */}
              <div className="grid gap-3 sm:grid-cols-2">
                <ContactRow
                  icon={<Mail className="size-4" />}
                  label="Email"
                  value={data.email}
                  asLink
                  href={`mailto:${data.email}`}
                />
                <ContactRow
                  icon={<Phone className="size-4" />}
                  label="Phone (US)"
                  value={data.phoneUS}
                  asLink
                  href={toTelHref(data.phoneUS)}
                />
                <ContactRow
                  icon={<Phone className="size-4" />}
                  label="Phone (UA)"
                  value={data.phoneUA}
                  asLink
                  href={toTelHref(data.phoneUA)}
                />
                <ContactRow
                  icon={<Globe className="size-4" />}
                  label="Website"
                  value={data.website}
                  asLink
                  href={data.website}
                />
              </div>

              {/* Actions */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <button
                  onClick={handleCopy}
                  aria-label="Copy email address"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-neutral-100 text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition"
                >
                  {copied ? (
                    <>
                      <Check className="size-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" /> Copy email
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${data.email}`}
                  aria-label="Send email"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-cyan-500/90 px-4 py-2 text-sm font-medium hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 transition"
                >
                  <Send className="size-4" /> Email
                </a>

                <button
                  onClick={downloadVCard}
                  aria-label="Download vCard"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2 text-sm font-medium hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition"
                >
                  <Download className="size-4" /> Add to Contacts
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right column – mini bio / tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative p-[1px] rounded-3xl bg-gradient-to-br from-amber-400/80 via-fuchsia-500/70 to-cyan-500/80"
          >
            <div className="relative rounded-3xl bg-neutral-900/70 backdrop-blur-md p-6 sm:p-8 md:p-10 h-full flex flex-col">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
                About
              </h2>
              <p className="mt-3 text-neutral-300 leading-relaxed text-sm sm:text-base">
                Executive with 20+ years of leadership in industrial operations,
                with core expertise in tire recycling in Ukraine.
              </p>

              <ul className="mt-5 sm:mt-6 space-y-3 text-neutral-300 text-sm sm:text-base">
                <BioItem icon={<Building2 className="size-4" />}>
                  CEO & Owner: Tire Recycling UA; Green Technology
                  (tire-recycling plant operations)
                </BioItem>
                <BioItem icon={<Factory className="size-4" />}>
                  Former CEO: EuroTire — manufacturer of ultra-large
                  off-the-road (OTR) tires
                </BioItem>
                <BioItem icon={<Handshake className="size-4" />}>
                  Focus areas: plant scaling & operations, business development,
                  strategic partnerships.
                </BioItem>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  asLink = false,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  asLink?: boolean;
  href?: string; // optional explicit href (e.g., mailto:..., tel:+...)
}) {
  const content = (
    <div className="flex items-center gap-2 text-neutral-200">
      <span className="opacity-80 break-words text-sm sm:text-base">
        {value}
      </span>
    </div>
  );

  return (
    <motion.div
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="group rounded-2xl border border-white/10 bg-neutral-800/40 px-4 py-3 hover:border-white/20 transition shadow-[0_6px_20px_-10px_rgba(0,0,0,0.7)]"
    >
      <div className="text-[11px] sm:text-xs uppercase tracking-wide text-neutral-400 flex items-center gap-2">
        <span className="inline-grid place-items-center size-6 rounded-md bg-white/5 ring-1 ring-white/10">
          {icon}
        </span>
        {label}
      </div>
      <div className="mt-1">
        {asLink ? (
          <a
            href={href ?? value}
            className="hover:underline decoration-dotted underline-offset-4 break-words"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </motion.div>
  );
}

function BioItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1.5 inline-grid place-items-center size-6 rounded-md bg-white/5 ring-1 ring-white/10 text-neutral-300">
        {icon}
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

function DecorBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* big soft glows */}
      <div className="absolute -top-48 -right-40 h-[38rem] w-[38rem] rounded-full bg-cyan-500/40 blur-[140px] mix-blend-screen" />
      <div className="absolute -bottom-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/35 blur-[140px] mix-blend-screen" />

      {/* center radial wash for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12),_transparent_60%)]" />

      {/* faint grid */}
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden>
        <div
          className="h-full w-full
            [background-image:linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),
                                linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)]
            [background-size:40px_40px]"
        />
      </div>
    </div>
  );
}
