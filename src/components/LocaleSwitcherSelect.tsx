"use client";

import clsx from "clsx";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label className={clsx("relative", isPending && "opacity-50")}>
      <span className="sr-only">{label}</span>
      <select
        className="appearance-none bg-transparent py-2 pl-3 pr-8 text-xs font-semibold uppercase tracking-wider"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
        aria-label={label}
      >
        {children}
      </select>
      <span
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px]"
        aria-hidden="true"
      >
        ↓
      </span>
    </label>
  );
}
