import type { Metadata } from "next";

import Lecture2 from "./lecture2";

export const metadata: Metadata = {
  title: "Lecture 02 · HTML танилцуулга",
  description:
    "HTML гэж юу болох, энгийн document, element-ийн бүтэц, browser болон HTML-ийн түүх.",
};

export default function Lecture2Page() {
  return <Lecture2 />;
}
