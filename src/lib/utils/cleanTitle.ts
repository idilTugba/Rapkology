export type CleanTitleOptions = {
  removeApostropheSuffix?: boolean; // 'den / 'dan sonrası sil
  cutAfterDash?: boolean; // – — - sonrası sil
  cutAfterComma?: boolean; // , sonrası sil
  normalizeWhitespace?: boolean; // fazla boşlukları temizle
};

const DEFAULT_OPTS: Required<CleanTitleOptions> = {
  removeApostropheSuffix: true,
  cutAfterDash: true,
  cutAfterComma: true,
  normalizeWhitespace: true,
};

export function cleanTitle(input: string, opts: CleanTitleOptions = {}): string {
  const o = { ...DEFAULT_OPTS, ...opts };
  let s = input ?? "";

  if (o.removeApostropheSuffix) {
    // 'den / ’den / 'dan / ’dan → sonrası komple sil
    s = s.replace(/['’](den|dan).*$/i, "");
  }

  if (o.cutAfterDash) {
    // en dash (–), em dash (—) veya normal tire (-) → sonrası komple sil
    s = s.replace(/\s*[–—-].*$/, "");
  }

  if (o.cutAfterComma) {
    // virgülden sonrası komple sil
    s = s.replace(/,.*$/, "");
  }

  if (o.normalizeWhitespace) {
    s = s.replace(/\s+/g, " ").trim();
  }
  // console.log({ input, cleaned: s });

  return s;
}
