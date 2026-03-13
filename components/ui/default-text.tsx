import { cva, type VariantProps } from "class-variance-authority";
import { Text, TextProps } from "react-native";
import { cn } from "../../lib/utils";

const textVariants = cva("text-foreground", {
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
  ...props
}: TextProps & VariantProps<typeof textVariants>) {
  return (
    <Text className={cn(textVariants({ variant, className }))} {...props} />
  );
}
