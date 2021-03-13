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
}

const pattern = Object.keys(letters).join("|")
const regexp = new RegExp(`(${pattern})`, "g")

export function convertXNotation(text: string) {
  return text.replace(regexp, letter => letters[letter])
}
