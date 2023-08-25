import Image from "next/image";
import { Inter } from "next/font/google";

import Child from "@/components/child";
import Parent from "@/components/parent";
import Uncle from "@/components/uncle";
import GrandParent from "@/components/grandparent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-10">
      <GrandParent />
    </div>
  );
}
