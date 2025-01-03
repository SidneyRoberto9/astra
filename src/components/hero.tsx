import { ArrowRight, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"

import Container from "@/components/globals/container"
import Wrapper from "@/components/globals/wrapper"
import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <Fragment>
      <Wrapper>
        <Container>
          <div className="flex w-full flex-col items-center justify-center py-20">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90def] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="from-primary/40 absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-tr blur-md"></span>
              <span className="z-10 flex items-center justify-center gap-1.5 py-0.5 text-sm text-neutral-100">
                <Image
                  src="/icons/sparkles-dark.svg"
                  alt="✨"
                  width={24}
                  height={24}
                  className="size-4"
                />
                Introducing Astra AI
                <ChevronRight className="size-4" />
              </span>
            </button>

            <div className="mx-auto mt-8 flex w-11/12 max-w-3xl flex-col items-center md:w-full">
              <h1 className="bg-gradient-to-b from-gray-50 to-gray-100 bg-clip-text text-center text-4xl font-semibold text-transparent md:text-6xl md:!leading-snug">
                Build your next idea and ship your dream site
              </h1>
              <p className="text-foreground/80 mt-6 text-center text-base md:text-lg">
                Zero code, maximum speed. Make professional sites easy, fast and
                fun while delivering best-in-class SEO, performance and user
                experience.
              </p>

              <div className="relative mt-8 hidden w-full items-center justify-center md:mt-12 md:flex">
                <Link
                  href="/"
                  prefetch={false}
                  className="border-foreground/30 shadow-foreground/40 flex w-max cursor-pointer select-none items-center justify-center rounded-full border-t bg-white/30 px-2 py-1 shadow-2xl backdrop-blur-lg md:gap-8 md:py-2"
                >
                  <p className="text-foreground pl-4 pr-4 text-center text-sm font-medium md:text-base lg:marker:pr-0">
                    ✨ Start building your dream website now!
                  </p>
                  <Button
                    size="sm"
                    className="border-foreground/20 hidden rounded-full border lg:flex"
                  >
                    Get Started
                    <ArrowRight className="ml-1 size-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex w-full items-center py-10 md:py-20">
              <div className="gradient absolute inset-0 left-1/2 top-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 blur-[10rem]"></div>
              <div className="md:-md-4 ring-foreground/20 -m-2 rounded-xl bg-opacity-50 p-2 ring-1 ring-inset backdrop-blur-lg lg:rounded-2xl">
                <Image
                  src="/assets/dashboard.svg"
                  alt="Dashboard"
                  width={1200}
                  height={1200}
                  className="bg-foreground/10 ring-border rounded-md shadow-2xl ring-1 lg:rounded-xl"
                />
                <BorderBeam size={250} duration={12} delay={9} />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Fragment>
  )
}

export default Hero
