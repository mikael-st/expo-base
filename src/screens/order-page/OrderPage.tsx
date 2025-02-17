import { Logo } from "../../components/Logo";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Scroller } from "../../components/global/Scroller";
import { Container } from "../../components/global/Container";
import { OrderDetails } from "../../components/OrderDetails";
import { IconButton } from "../../components/IconButton";
import { TrashIcon } from "react-native-heroicons/solid";
import { Palette } from "../../../assets/palette";
import { TextButton } from "../../components/TextButton";
import { Title } from "./components";

export function OrderPage() {

  const Content = () => {
    return (
      <Scroller>
        <Container>
          <Title>Pedido</Title>
          <IconButton
            icon={<TrashIcon color={Palette.red}/>}
            label="Cancelar"
            onClick={() => {}}
          />
          <OrderDetails/>
        </Container>
      </Scroller>
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Container>
          <Logo />
          <Content />
          <TextButton
            label="Salvar"
            onClick={() => console.log('GO TO SELECT_HOME')}
          />
        </Container>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}