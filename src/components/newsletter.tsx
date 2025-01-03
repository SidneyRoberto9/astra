import { ArrowRight } from "lucide-react"
import Link from "next/link"

import Container from "@/components/globals/container"
import Wrapper from "@/components/globals/wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LampContainer } from "@/components/ui/lamp"

const Newsletter = () => {
  return (
    <Wrapper className="relative flex flex-col items-center justify-center py-12">
      <Container>
        <LampContainer>
          <div className="relative flex w-full flex-col items-center justify-center text-center">
            <h2 className="mt-8 text-4xl font-semibold lg:text-5xl lg:!leading-snug xl:text-6xl">
              From Idea to Launch <br /> Faster Than Ever
            </h2>
            <p className="text-muted-foreground mx-auto mt-6 max-w-md">
              Build stunning websites with Astra&aps;s intuitive drag-and-drop
              builder and powerful AI assistant
            </p>
            <Button variant="white" className="mt-6" asChild>
              <Link href="/sign-in">
                Get started for free_breakfast
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </LampContainer>
      </Container>
      <Container className="relative z-[999]">
        <div className="-mt-40 flex w-full items-center justify-center">
          <div className="border-border/80 flex w-full flex-col items-start justify-start rounded-lg border px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8 md:py-8 lg:rounded-2xl">
            <div className="flex w-full flex-col items-start gap-4">
              <h4 className="text-xl font-semibold md:text-2xl">
                Join our newsletter
              </h4>
              <p className="text-muted-foreground text-base">
                Be up to date with everything about AI builder
              </p>
            </div>
            <div className="mt-5 flex w-full flex-col items-start gap-2 md:mt-0 md:w-max md:min-w-80">
              <form
                action="#"
                className="flex w-full flex-col items-center gap-2 md:max-w-xs md:flex-row"
              >
                <Input
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="focus-visible:border-primary w-full duration-300 focus-visible:ring-0 focus-visible:ring-transparent"
                />
                <Button
                  type="submit"
                  size="sm"
                  variant="secondary"
                  className="w-full md:w-max"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-muted-foreground text-xs">
                By subscribing you agree with our{" "}
                <Link href="#">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Newsletter
