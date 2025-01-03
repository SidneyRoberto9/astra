import Container from "@/components/globals/container"
import Icons from "@/components/globals/icons"
import Wrapper from "@/components/globals/wrapper"
import SectionBadge from "@/components/ui/section-badge"
import { features } from "@/constants"

const Features = () => {
  return (
    <Wrapper className="relative flex flex-col items-center justify-center py-12">
      <Container>
        <div className="mx-auto max-w-md text-start md:text-center">
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
            {features.map(({ icon: Icon, info, title }) => (
              <div key={title} className="flex flex-col items-start px-0">
                <div className="flex items-center justify-center">
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

export default Features
