import { View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cn } from "../lib/utils";

export function PageWrapper({ className, children, ...props }: ViewProps) {
  return (
    <SafeAreaView>
      <View
        className={cn(
          "flex-container dark bg-background p-8 overflow-auto h-screen-safe gap-8",
          className
        )}
        {...props}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
