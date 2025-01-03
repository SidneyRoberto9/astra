import { Zap } from "lucide-react"
import Link from "next/link"

import Container from "@/components/globals/container"
import Wrapper from "@/components/globals/wrapper"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SectionBadge from "@/components/ui/section-badge"
import { PRICING_CARDS } from "@/constants"
import { cn } from "@/lib/utils"

const Pricing = () => {
  return (
    <Wrapper className="relative flex flex-col items-center justify-center py-12">
      <Container>
        <div className="mx-auto max-w-md text-start md:text-center">
          <SectionBadge title="Pricing" />
          <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
            Unlock the right plan for your business
          </h2>
          <p className="text-muted-foreground mt-6">
            Choose the best plan for your business and start building your dream
            website today
          </p>
        </div>
      </Container>
      <Container className="flex items-center justify-center">
        <div className="grid w-full max-w-4xl grid-cols-1 flex-wrap gap-5 py-10 md:gap-8 md:py-20 lg:grid-cols-3">
          {PRICING_CARDS.map(
            ({ buttonText, description, features, price, priceId, title }) => (
              <Card
                key={title}
                className={cn(
                  "flex w-full flex-col border-neutral-700",
                  title === "Unlimited SaaS" && "border-primary border-2"
                )}
              >
                <CardHeader className="border-border border-b">
                  <span>{title}</span>
                  <CardTitle
                    className={cn(
                      title === "Unlimited SaaS" && "text-muted-foreground"
                    )}
                  >
                    {price}
                  </CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-6">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Zap className="fill-primary text-primary size-4" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto w-full">
                  <Link
                    href="#"
                    className={cn(
                      "text-primary-foreground bg-primary w-full rounded-md p-2 text-center text-sm font-medium",
                      title !== "Unlimited SaaS" &&
                        "!bg-foreground !text-background"
                    )}
                  >
                    {buttonText}
                  </Link>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </Container>
    </Wrapper>
  )
}

export default Pricing
