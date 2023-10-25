import { Content } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Bounded from "@/app/components/Bounded";
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";


const components: JSXMapSerializer = {
  heading1: ({ children }) => (<Heading as="h1" size="xl" className="mb-4 mt-12 md:mb-8 first:mt-0 last:mb-0">{children}</Heading>),
  paragraph: ({ children }) => (
    <p className="max-w-md text-2xl text-center font-normal leading-10 font-body text-slate-600 mb-4">{children}</p>
  )
}
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 py-10 md:py-14 md:px-6 lg:py-16"
    >
      <div className="grid grid-cols-1 place-items-center text-center">
        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.body} components={components} />
        <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
          {slice.primary.button_text}
        </Button>
        <PrismicNextImage field={slice.primary.image} className="max-w-4xl drop-shadow-xl " />
      </div>
    </Bounded>
  );
};

export default Hero;
