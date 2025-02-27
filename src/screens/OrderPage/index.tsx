import { Logo } from "../../components/Logo";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Scroller } from "../../components/global/Scroller";
import { Container } from "../../components/global/Container";
import { OrderDetails } from "../../components/OrderDetails";
import { SectionHeader, Title } from "./components";
import { ItemDetails } from "../../components/ItemDetails";
import { useNavigation } from "@react-navigation/native";
import { AwaitingConfirmation } from "../../components/StateIndicators/AwaitingConfirmation";
import { Confirmed } from "../../components/StateIndicators/Confirmed";
import { Delivered } from "../../components/StateIndicators/Delivered";
import { InProduction } from "../../components/StateIndicators/InProduction";
import { OutForDelivery } from "../../components/StateIndicators/OutForDelivery";
import { PriceDetailsSection } from "./PriceDetailsSection";
import { DeliveryLocalItem } from "../../components/DeliveryLocalItem";
import { CancelButton } from "./CancelButton";

export function OrderPage() {
  const navigator = useNavigation();

  const Content = () => {
    return (
      <Scroller>
        <Container>
          <SectionHeader>
            <Title>Pedido</Title>
          </SectionHeader>
          <OrderDetails/>
          <AwaitingConfirmation/>
          <SectionHeader>
            <Title>Itens</Title>
          </SectionHeader>
          <ItemDetails/>
          <ItemDetails/>
          <ItemDetails/>
          <ItemDetails/>
          <PriceDetailsSection/>
          <SectionHeader>
            <Title>Local de entrega</Title>
          </SectionHeader>
          <DeliveryLocalItem
            type="Casa"
          />
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
          <CancelButton 
            onClick={() => console.log('CANCELORDER')}
          />
        </Container>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}