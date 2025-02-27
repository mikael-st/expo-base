import { Logo } from "../../components/Logo";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Scroller } from "../../components/global/Scroller";
import { ImageSelector } from "../../components/ImageSelector";
import { Container } from "../../components/global/Container";
import { PriceInput } from "../../components/PriceInput";
import { TextButton } from "../../components/TextButton";
import { InputField } from "../../components/TextField/style";
import { Text } from "react-native";
import { DeliveryLocalSelector } from "../../components/DeliveryLocalSelector";
import { FowardButton } from "../MakingOrder/FowardButton";
import { useState } from "react";
import { SuccessOrderModal } from "../../components/modals/SuccessOrderModal";
import { useNavigation } from "@react-navigation/native";

export function SelectDeliveryLocal() {
  const navigator = useNavigation();

  const [ modalVisible, setModalVisible ] = useState(false);

  const closeModal = () => {
    setModalVisible(false);

    navigator.navigate('OrderPage');
  }

  const Content = () => {
    return (
      <Scroller>
        <Container>
          <DeliveryLocalSelector
            type="Casa"
          />
          <DeliveryLocalSelector
            type="Condomínio"
          />
          <DeliveryLocalSelector
            type="Trabalho"
          />
        </Container>
      </Scroller>
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <SuccessOrderModal
          visible={modalVisible}
          onClose={closeModal}
        />
        <Container>
          <Logo />
          <Content />
          <FowardButton
            onClick={() => setModalVisible(true)}
          />
        </Container>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}