import { useState } from "react";
import { View } from "react-native";
import "../assets/style/global.css";
import { UserToGameForm } from "../components/form/user-to-game-form";
import { PageWrapper } from "../components/page-wrapper";
import { DefaultButton } from "../components/ui/default-button";
import { DefaultInput } from "../components/ui/default-input";
import { DefaultText } from "../components/ui/default-text";
import { useGameStore } from "../hooks/store/game-store";

export default function Home() {
  const { users } = useGameStore();
  const [newUser, setNewUser] = useState("");
  return (
    <PageWrapper>
      <View className="flex-container justify-center p-4 bg-card rounded-3xl">
        <View className="flex-container justify-center">
          <DefaultText variant="h1" weight={700}>
            Jogo do
          </DefaultText>
        </View>
        <View className="flex-container justify-center">
          <DefaultText variant="h1" weight={700}>
            impostor
          </DefaultText>
        </View>
      </View>
      <View className="flex-container justify-center">
        <DefaultText>Escolha os jogadores:</DefaultText>
      </View>
      <View className="flex-container justify-center gap-4">
        <UserToGameForm />
        {users.map((u) => {
          return (
            <View className="flex-container justify-center gap-2" key={u.id}>
              <View className="flex-container fill">
                <DefaultInput placeholder="Ex: Renato" />
              </View>
              <View className="flex-container w-auto">
                <DefaultButton>Adicionar</DefaultButton>
              </View>
            </View>
          );
        })}
      </View>
      <DefaultButton className="w-full" variant="secondary">
        Iniciar jogo
      </DefaultButton>
    </PageWrapper>
  );
}
