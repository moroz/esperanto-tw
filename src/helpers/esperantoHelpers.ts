const letters = {
  cx: "ĉ",
  gx: "ĝ",
  hx: "ĥ",
  jx: "ĵ",
  sx: "ŝ",
  ux: "ŭ",
  CX: "Ĉ",
  GX: "Ĝ",
  HX: "Ĥ",
  JX: "Ĵ",
  SX: "Ŝ",
  UX: "Ŭ",
  Cx: "Ĉ",
  Gx: "Ĝ",
  Hx: "Ĥ",
  Jx: "Ĵ",
  Sx: "Ŝ",
  Ux: "Ŭ",
}

const pattern = Object.keys(letters).join("|")
const regexp = new RegExp(`(${pattern})`, "g")

export function convertXNotation(text: string) {
  return text.replace(regexp, letter => letters[letter])
}

export function deepConvertXNotation(translations: Record<string, string>) {
  return Object.keys(translations).reduce((acc, key) => {
    acc[key] = convertXNotation(translations[key])
    return acc
  }, {})
}
