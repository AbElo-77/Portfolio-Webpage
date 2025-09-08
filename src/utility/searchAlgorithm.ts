import { searchDatabase } from "../constant-data/searchDatabase";

export interface SearchItem {
  Title?: string;
  Name?: string;
  Languages?: string[];
  Framework?: string;
  Modules?: string[];
  Tools?: string[];
  WriteUp?: string;
  Type?: string;
  type?: string;
  Timeline?: string;
  Keywords?: string[];

  Social?: string;
  URL?: string;
}

export interface SearchResult {
  item: SearchItem;
  matchCount: number;
}

function cleanText(text: string) {
  return text.replace(/[^\w+#]/g, "").toLowerCase();
}

export default function Search(tokens: string[]): SearchResult[] {
  if (!tokens.length) return [];

  const filteredTokens = tokens
    .map(t => cleanText(t))
    .filter(t => t);

  const results: SearchResult[] = [];

  for (const entryRaw of searchDatabase) {
    const entry = entryRaw as SearchItem;
    let matchCount = 0;

    for (const token of filteredTokens) {
      let tokenMatched = false;

      if (entry.Keywords && entry.Keywords.some(k => cleanText(k) === token)) {
        matchCount += 2;
        tokenMatched = true;
      }

      const arrayFields = [entry.Languages, entry.Modules, entry.Tools];
      for (const arr of arrayFields) {
        if (arr) {
          for (const el of arr) {
            const cleanedEl = cleanText(el);
            if (
              (token.length <= 2 && cleanedEl === token) || 
              (token.length > 2 && cleanedEl.includes(token)) 
            ) {
              matchCount += 1;
              tokenMatched = true;
            }
          }
        }
      }

      const stringFields = [entry.Title, entry.Framework, entry.Type, entry.type, entry.WriteUp, entry.Social, entry.URL];
      for (const field of stringFields) {
        if (field && cleanText(field).includes(token)) {
          matchCount += 1;
          tokenMatched = true;
        }
      }

      if (!tokenMatched) continue;
    }

    if (matchCount > 0) results.push({ item: entry, matchCount });
  }

  return results.sort((a, b) => b.matchCount - a.matchCount);
}
