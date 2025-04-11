"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import "./Testimonials.css";

export function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section id="testimonials" className="py-10 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            {t("title")}
          </h2>
          <p className="text-muted-foreground max-w-xs sm:max-w-lg mx-auto text-sm sm:text-base">
            {t("subtitle")}
          </p>
        </div>

        {/* Mobile Carousel (hidden on lg and above) */}
        <div className="block lg:hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="w-full basis-full">
                  <Card className="border-0 shadow-md bg-card mx-auto max-w-sm">
                    <CardHeader className="pt-5 pb-0 px-5">
                      <Quote className="h-6 w-6 text-primary opacity-60" />
                    </CardHeader>
                    <CardContent className="pt-4 px-5">
                      <div className="testimonial-content max-h-[240px] overflow-y-auto mb-4">
                        <p className="text-sm text-card-foreground leading-relaxed">
                          "{t(`testimonials.${testimonial.id}.content`)}"
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start border-t pt-4 pb-5 px-5">
                      <h3 className="font-semibold text-foreground">
                        {t(`testimonials.${testimonial.id}.name`)}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {t(`testimonials.${testimonial.id}.role`)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {t(`testimonials.${testimonial.id}.organization`)}
                      </p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-6 mt-6">
              <CarouselPrevious 
                variant="outline"
                className="static h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border-none transform-none translate-x-0 translate-y-0"
                aria-label={t("previousSlide")}
              />
              <CarouselNext 
                variant="outline"
                className="static h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border-none transform-none translate-x-0 translate-y-0"
                aria-label={t("nextSlide")}
              />
            </div>
          </Carousel>
        </div>

        {/* Desktop Carousel (hidden on below lg) */}
        <div className="hidden lg:block">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 basis-1/2">
                  <Card className="border-0 shadow-md bg-card h-full">
                    <CardHeader className="pt-5 pb-0 px-6">
                      <Quote className="h-6 w-6 text-primary opacity-60" />
                    </CardHeader>
                    <CardContent className="pt-4 px-6">
                      <div className="testimonial-content max-h-[250px] overflow-y-auto mb-4">
                        <p className="text-sm text-card-foreground leading-relaxed">
                          "{t(`testimonials.${testimonial.id}.content`)}"
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start border-t pt-4 pb-5 px-6">
                      <h3 className="font-semibold text-foreground">
                        {t(`testimonials.${testimonial.id}.name`)}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {t(`testimonials.${testimonial.id}.role`)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {t(`testimonials.${testimonial.id}.organization`)}
                      </p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-6 mt-6">
              <CarouselPrevious 
                variant="outline"
                className="static h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border-none transform-none translate-x-0 translate-y-0"
                aria-label={t("previousSlide")}
              />
              <CarouselNext 
                variant="outline"
                className="static h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border-none transform-none translate-x-0 translate-y-0"
                aria-label={t("nextSlide")}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
} 