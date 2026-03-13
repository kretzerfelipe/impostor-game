import { cva, type VariantProps } from "class-variance-authority";
import { Text, TextProps } from "react-native";
import { cn, getFontWeightClass } from "../../lib/utils";

const textVariants = cva("text-foreground font-[Poppins-Regular]", {
  variants: {
    variant: {
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      p: "text-base",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export function DefaultText({
  variant = "p",
  className,
  weight = 400,
  italic = false,
  ...props
}: TextProps &
  VariantProps<typeof textVariants> & {
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    italic?: boolean;
  }) {
  const fontFamilyClass = getFontWeightClass({ weight, italic });

  return (
    <Text
      className={cn(textVariants({ variant }), fontFamilyClass, className)}
      {...props}
    />
  );
}
