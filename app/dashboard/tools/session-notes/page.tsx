"use client";
import SessionNotes from "@/markdown/tools/session-notes.mdx";

export default function Page() {
  return (
    <article className="prose lg:prose-xl max-w-7xl mt-20 mx-auto dark:prose-invert p-6">
      <SessionNotes />
    </article>
  );
}
