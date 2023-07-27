import Footer from "@/components/footer";
import Header from "@/components/header";
import Terminal from "@/components/terminal";

export default function Home() {
  return (
    <div className='flex relative justify-center items-center w-100% min-h-screen bg-[url(../assets/images/bgimage.jpg)]'>
      <Header />
      <Terminal />
      <Footer />
    </div>
  )
}
