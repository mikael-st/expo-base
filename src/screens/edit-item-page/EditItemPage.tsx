import { View, Text, ScrollView, TextInput } from "react-native";
import { Logo } from "../../components/Logo";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Scroller } from "../../components/global/Scroller";
import { ImageSelector } from "../../components/ImageSelector";
import { TextField } from "../../components/TextField";
import { Container } from "../../components/global/Container";
import { PriceInput } from "../../components/PriceInput";
import { TextButton } from "../../components/TextButton";
import { useRef, useState } from "react";
import { InputField } from "../../components/TextField/style";

export function EditItemPage() {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ price, setPrice ] = useState(0);

  function save() {
    const newItem = {
      name: name,
      description: description,
      price: price
    }

    console.log(newItem);
    console.log('SAVE NEW INFOS ABOUT ITEM');
  
  }

  const Content = () => {
    return (
      <Scroller>
        <Container>
          <ImageSelector />
          <InputField
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <InputField
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
            height={96}
          />
          <PriceInput/>
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
            onClick={save}
          />
        </Container>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}