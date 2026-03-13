import "../assets/style/global.css";
import { PageWrapper } from "../components/page-wrapper";
import { DefaultText } from "../components/ui/default-text";

export default function Home() {
  return (
    <PageWrapper>
      <DefaultText variant="h1">Bem-vindo à Livrari</DefaultText>
    </PageWrapper>
  );
}
