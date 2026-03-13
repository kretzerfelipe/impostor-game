import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeStore } from "../hooks/store/theme-store";
import { cn } from "../lib/utils";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();
  return (
    <SafeAreaView className={cn(theme === "dark" && "dark")}>
      <View
        className={cn(
          "flex-container p-4 bg-background overflow-hidden h-full",
        )}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
