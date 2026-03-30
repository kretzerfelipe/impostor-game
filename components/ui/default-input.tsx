import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { cn } from "../../lib/utils";

export function DefaultInput({
  className,
  onFocus,
  onBlur,
  ...props
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      onFocus={(e) => {
        setIsFocused(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        onBlur?.(e);
      }}
      className={cn(
        "h-12 w-full min-w-0 rounded-lg border px-safe-or-4 bg-input text-base text-foreground",
        "placeholder:text-muted-foreground disabled:opacity-50",
        isFocused ? "border-ring" : "border-input",
        className
      )}
      {...props}
    />
  );
}
