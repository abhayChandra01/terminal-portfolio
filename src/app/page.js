"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import Terminal from "@/components/terminal";
import { useState } from "react";

export default function Home() {

  const [terminalShow, setTerminalShow] = useState(true)

  return (
    <div className='flex relative justify-center items-center w-100% min-h-screen bg-[url(../assets/images/bgimage.jpg)]'>
      <Header />
      {terminalShow ?
        <Terminal />
        : null}
      <Footer terminalShow={terminalShow} setTerminalShow={setTerminalShow} />
    </div>
  )
}
