import { User } from "lucide-react"

import Container from "@/components/globals/container"
import Wrapper from "@/components/globals/wrapper"
import Marquee from "@/components/ui/marquee"
import SectionBadge from "@/components/ui/section-badge"
import { REVIEWS } from "@/constants"

const Testimonials = () => {
  const firstRow = REVIEWS.slice(0, REVIEWS.length / 2)
  const secondRow = REVIEWS.slice(REVIEWS.length / 2)

  return (
    <Wrapper className="relative flex flex-col items-center justify-center py-12">
      <Container>
        <div className="mx-auto max-w-md text-start md:text-center">
          <SectionBadge title="Our Customers" />
          <h2 className="mt-6 font-serif text-3xl lg:text-4xl">
            What people are saying
          </h2>
          <p className="text-muted-foreground mt-6">
            See how Astra empowers business of all sizes. Here&apos;s what real
            people are saying on Twitter
          </p>
        </div>
      </Container>
      <Container>
        <div className="w-full py-10 md:py-20">
          <div className="relative flex h-full flex-col items-center justify-center overflow-hidden py-10">
            <Marquee pauseOnHover className="select-none [--duration:20s]">
              {firstRow.map(({ body, name, username }) => (
                <figure
                  key={name}
                  className="bg-background relative w-64 cursor-pointer overflow-hidden rounded-xl border border-zinc-50/[.1] p-4 hover:bg-zinc-50/[.15]"
                >
                  <div className="flex flex-row items-center gap-2">
                    <User className="size-6" />
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium">
                        {name}
                      </figcaption>
                      <p className="text-muted-foreground text-xs font-medium">
                        {username}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-sm">{body}</blockquote>
                </figure>
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              className="select-none [--duration:20s]"
            >
              {secondRow.map(({ body, name, username }) => (
                <figure
                  key={name}
                  className="bg-background relative w-64 cursor-pointer overflow-hidden rounded-xl border border-zinc-50/[.1] p-4 hover:bg-zinc-50/[.15]"
                >
                  <div className="flex flex-row items-center gap-2">
                    <User className="size-6" />
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium">
                        {name}
                      </figcaption>
                      <p className="text-muted-foreground text-xs font-medium">
                        {username}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-sm">{body}</blockquote>
                </figure>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r" />
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l" />
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Testimonials
