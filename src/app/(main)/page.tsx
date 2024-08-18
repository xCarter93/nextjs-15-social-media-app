import PostEditor from "@/components/posts/editor/PostEditor";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
      </div>
    </main>
  );
}
