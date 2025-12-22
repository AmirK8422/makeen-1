import React from 'react'
import Image from "next/image";

function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-9/10 h-[700px] fade-bottom">
        <Image
          src="/img/gallery.svg"
          alt="Makeen Picture"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default Page;
