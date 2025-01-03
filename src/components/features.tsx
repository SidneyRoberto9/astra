import Container from "@/components/globals/container"
import Icons from "@/components/globals/icons"
import Wrapper from "@/components/globals/wrapper"
import SectionBadge from "@/components/ui/section-badge"
import { FEATURES } from "@/constants"

const Features = () => {
  return (
    <Wrapper className="relative flex flex-col items-center justify-center py-12">
      <div className="bg-primary absolute -right-1/3 top-0 -z-10 hidden h-72 w-72 rounded-full blur-[10rem] md:block" />
      <div className="absolute -left-1/3 bottom-0 -z-10 hidden h-72 w-72 rounded-full bg-indigo-600 blur-[10rem] md:block" />
      <Container>
        <div className="max-w-md text-start md:mx-auto md:text-center">
          <SectionBadge title="Features" />
          <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
            Discover out powerful features
          </h2>
          <p className="text-muted-foreground mt-6">
            Astra offers a range of features to help you build a stunning
            websites in no time
          </p>
        </div>
      </Container>
      <Container>
        <div className="mx-auto mt-8 flex items-center justify-center">
          <Icons.feature className="h-80 w-auto" />
        </div>
      </Container>
      <Container>
        <div className="flex w-full flex-col items-center justify-center py-10 md:py-20">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-start px-0 md:px-0 lg:items-start"
              >
                <div className="flex items-center justify-center">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
                <p className="text-muted-foreground mt-2 text-start lg:text-start">
                  {feature.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Features
