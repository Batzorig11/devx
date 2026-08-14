import type { Metadata } from "next";

import Lecture3 from "./lecture3";

export const metadata: Metadata = {
  title: "Lecture 03 · Semantic HTML ба CSS-ийн үндэс",
  description:
    "Semantic HTML, comment, class, id болон CSS syntax, selector, color, background, border, spacing, хэмжээс, box model-ийн үндэс.",
};

export default function Lecture3Page() {
  return <Lecture3 />;
}
