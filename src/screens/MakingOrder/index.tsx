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
import { useState } from "react";
import { CancelOrderModal } from "../../components/modals/CancelOrder";

export function MakingOrder() {
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
            <IconButton
              icon={<TrashIcon color={Palette.red}/>}
              label="Cancelar"
              onClick={() => {
                console.log('CANCEL ORDER');
                setModalVisible(true)
              }}
            />
          </SectionHeader>
          <OrderDetails/>
          <SectionHeader>
            <Title>Itens</Title>
          </SectionHeader>
          
          {items.map((value) => <ItemDetails withRemoveBtn={true} key={value}/>)}

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
          <CancelOrderModal
            visible={modalVisible}
            onClose={closeModal}
          />
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