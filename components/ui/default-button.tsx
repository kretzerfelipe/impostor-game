import { cva, type VariantProps } from "class-variance-authority";
import { Children, cloneElement, isValidElement, ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";
import { cn } from "../../lib/utils";
import { DefaultText } from "./default-text";

const buttonVariants = cva(
  "items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-safe-or-4",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-16 rounded-md px-6",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTextVariants = cva("text-base font-medium", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      destructive: "text-destructive-foreground",
      outline: "hover:text-accent-foreground",
      secondary: "text-secondary-foreground",
      ghost: "hover:text-accent-foreground",
      link: "text-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function DefaultButton({
  className,
  textClassName,
  variant = "default",
  size = "default",
  children,
  ...props
}: PressableProps &
  VariantProps<typeof buttonVariants> & {
    textClassName?: string;
    children?: ReactNode;
  }) {
  return (
    <Pressable
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <DefaultText
        className={cn(
          buttonTextVariants({ variant, className: textClassName })
        )}
      >
        {Children.map(children, (child) => {
          if (isLucideIcon(child)) {
            return cloneElement(
              child as React.ReactElement<{ color?: string }>,
              {
                color: iconColorMap[variant ?? "default"],
              }
            );
          }

          return (
            <DefaultText
              className={cn(
                buttonTextVariants({ variant, className: textClassName })
              )}
            >
              {child}
            </DefaultText>
          );
        })}
      </DefaultText>
    </Pressable>
  );
}

const iconColorMap: Record<string, string> = {
  default: "rgb(233, 230, 255)",
  destructive: "rgb(233, 230, 255)",
  outline: "rgb(233, 230, 255)",
  secondary: "rgb(233, 230, 255)",
  ghost: "rgb(233, 230, 255)",
  link: "rgb(109, 143, 106)",
};

const isLucideIcon = (child: ReactNode): boolean => {
  if (!isValidElement(child)) return false;

  const type = child.type as any;

  return (
    typeof type === "object" &&
    typeof type?.render === "function" &&
    typeof type?.render?.displayName === "string"
  );
};
