import dynamic from "next/dynamic"
import Head from "next/head"
import Header from "./Header"
import Banner from "./Banner"

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
})

type Props = {
  children: object
  content: object
  courses: string[]
  progressService: object
}

export default function Layout({
  children,
  content,
  courses,
  progressService,
}: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <Header
        content={content}
        courses={courses}
        progressService={progressService}
      />
      {children}
      <Footer />
    </>
  )
}
