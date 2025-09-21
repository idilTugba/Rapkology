"use client";
import { useMemo } from "react";
import { cleanTitle, type CleanTitleOptions } from "@/lib/utils/cleanTitle";

export function useCleanTitle(title: string, options?: CleanTitleOptions) {
  return useMemo(
    () => cleanTitle(title, options),
    [title, options?.removeApostropheSuffix, options?.cutAfterDash, options?.normalizeWhitespace]
  );
}
