import { Plus } from "lucide-react-native";
import { useState } from "react";
import { View } from "react-native";
import { useGameStore } from "../../hooks/store/game-store";
import { DefaultButton } from "../ui/default-button";
import { DefaultInput } from "../ui/default-input";

export function UserToGameForm({ userToEdit }: { userToEdit: string | null }) {
  const { addUser } = useGameStore();
  const [user, setUser] = useState(userToEdit ?? "");

  return (
    <View className="flex-container justify-center gap-2">
      <View className="flex-container fill">
        <DefaultInput
          value={user}
          onChangeText={(text) => setUser(text)}
          placeholder="Ex: Renato"
        />
      </View>
      <View className="flex-container w-auto">
        <DefaultButton>
          <Plus />
        </DefaultButton>
      </View>
    </View>
  );
}
