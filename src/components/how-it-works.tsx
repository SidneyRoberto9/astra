import Container from "@/components/globals/container"
import Wrapper from "@/components/globals/wrapper"
import SectionBadge from "@/components/ui/section-badge"
import { perks } from "@/constants"

const HowItWorks = () => {
  return (
    <Wrapper className="relative flex flex-col items-center justify-center py-12">
      <Container>
        <div className="mx-auto max-w-md text-start md:text-center">
          <SectionBadge title="The Process" />
          <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
            Three steps to build your dream website
          </h2>
          <p className="text-muted-foreground">
            Turn your vision into reality in just 3 simples steps
          </p>
        </div>
      </Container>
      <Container>
        <div className="flex w-full flex-col items-center justify-center py-10 md:py-20">
          <div className="grid w-full grid-cols-1 divide-x-0 divide-y divide-gray-900 first:border-gray-900 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3 lg:first:border-none">
            {perks.map(({ icon: Icon, info, title }) => (
              <div
                key={title}
                className="flex flex-col items-start px-4 py-4 md:px-6 lg:px-8 lg:py-6"
              >
                <div className="flex items-start justify-center">
                  <Icon className="size-8" />
                </div>
                <h3 className="mt-4 text-lg font-medium">{title}</h3>
                <p className="text-muted-foreground mt-2 text-start">{info}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default HowItWorks
