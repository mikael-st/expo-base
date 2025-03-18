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
import { CancelOrderModal } from "../../components/modals/CancelOrder";
import { useState } from "react";

export function OrderPage() {
  const navigator = useNavigation();

  const [ modalVisible, setModalVisible ] = useState(false);
  
  const closeModal = () => {
    setModalVisible(false);

    navigator.navigate('EditItemPage');
  }

  const items = [1,2,3,4,5]

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
          
          {items.map((value) => <ItemDetails key={value}/>)}

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
          <CancelOrderModal
            visible={modalVisible}
            onClose={closeModal}
          />
          <Content />
          <CancelButton
            onClick={() => {
              console.log('CANCELORDER');
              setModalVisible(true)
            }}
          />
        </Container>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}