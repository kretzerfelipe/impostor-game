import { View } from "react-native";
import "../assets/style/global.css";
import { PageWrapper } from "../components/page-wrapper";
import { DefaultText } from "../components/ui/default-text";

export default function Home() {
  return (
    <PageWrapper>
      <View className="flex-container justify-center ">
        <DefaultText variant="h1" weight={700}>
          Jogo do impostor:
        </DefaultText>
      </View>
    </PageWrapper>
  );
}
