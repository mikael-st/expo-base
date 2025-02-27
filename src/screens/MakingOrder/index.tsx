import { Logo } from "../../components/Logo";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Scroller } from "../../components/global/Scroller";
import { Container } from "../../components/global/Container";
import { OrderDetails } from "../../components/OrderDetails";
import { IconButton } from "../../components/IconButton";
import { TrashIcon } from "react-native-heroicons/solid";
import { Palette } from "../../../assets/palette";
import { TextButton } from "../../components/TextButton";
import { SectionHeader, Title } from "./components";
import { ItemDetails } from "../../components/ItemDetails";
import { PriceDetailsSection } from "./PriceDetailsSection";
import { CupomField } from "../../components/CupomField";
import { FowardButton } from "./FowardButton";
import { useNavigation } from "@react-navigation/native";

export function MakingOrder() {
  const navigator = useNavigation();

  const Content = () => {
    return (
      <Scroller>
        <Container>
          <SectionHeader>
            <Title>Pedido</Title>
            <IconButton
              icon={<TrashIcon color={Palette.red}/>}
              label="Cancelar"
              onClick={() => { console.log('CANCEL ORDER');}}
            />
          </SectionHeader>
          <OrderDetails/>
          <SectionHeader>
            <Title>Itens</Title>
          </SectionHeader>
          <ItemDetails
            withRemoveBtn={true}
          />
          <ItemDetails
            withRemoveBtn={true}
          />
          <ItemDetails
            withRemoveBtn={true}
          />
          <ItemDetails
            withRemoveBtn={true}
          />
          <PriceDetailsSection/>
          <CupomField/>
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
          <FowardButton
            onClick={() => {
              console.log('GO TO SELECT_HOME')
              navigator.navigate('SelectDeliveryLocal')
            }}
          />
        </Container>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}