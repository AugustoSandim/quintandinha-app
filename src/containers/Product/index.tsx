import React, {useEffect, useState} from 'react';
import {AsyncStorage, Platform, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {Appbar, Button, Divider, List, TextInput} from 'react-native-paper';
import {v4 as uuidv4} from 'uuid';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Product: React.FC = () => {
  const [data, setData] = useState({
    productCode: '',
    productName: '',
    productValue: '',
    productCostValue: '',
    productStock: '',
    productBarcode: '',
  });

  useEffect(() => {}, [data]);

  const getProducts = () => {
    return AsyncStorage.getItem('products');
  };

  const handleDelete = async () => {
    console.warn('!!!!!!!!!!!DELETED ALL!!!!!!!!!!');
    return AsyncStorage.removeItem('products');
  };

  const handleSubmit = async () => {
    const all = getProducts();
    all.then((products: any) => {
      const ALL_PRODUCTS = JSON.parse(products) || [];
      ALL_PRODUCTS.push({id: uuidv4(), ...data});

      console.log('---CAP', ALL_PRODUCTS);
      AsyncStorage.setItem('products', JSON.stringify(ALL_PRODUCTS));
    });

    return;
  };

  return (
    <View>
      <View>
        <Appbar.Header>
          <Appbar.Content
            title="Novo produto"
            subtitle="Voce pode adicionar um novo produto"
          />
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
        </Appbar.Header>
      </View>
      <View style={{padding: 20}}>
        <List.Section title="Categoria">
          <List.Accordion
            title="Selecione uma categoria"
            left={(props) => <List.Icon {...props} icon="folder" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
        <TextInput
          label="Código"
          nativeID="productCode"
          keyboardType="decimal-pad"
          value={data.productCode}
          onChangeText={(value) => setData({...data, productCode: value})}
          mode="outlined"
        />
        <TextInput
          label="Nome"
          nativeID="productName"
          keyboardType="default"
          value={data.productName}
          onChangeText={(value) => setData({...data, productName: value})}
          mode="outlined"
        />
        <TextInput
          label="Valor de venda"
          nativeID="productValue"
          keyboardType="number-pad"
          value={data.productValue}
          onChangeText={(value) => setData({...data, productValue: value})}
          mode="outlined"
          render={(props) => <TextInputMask type="money" {...props} />}
        />
        <TextInput
          label="Valor de custo"
          nativeID="productCostValue"
          value={data.productCostValue}
          onChangeText={(value) => setData({...data, productCostValue: value})}
          mode="outlined"
        />
        <Divider />
        <TextInput
          label="Estoque"
          nativeID="productStock"
          value={data.productStock}
          onChangeText={(value) => setData({...data, productStock: value})}
          mode="outlined"
        />
        <TextInput
          label="Codigo de barras"
          nativeID="productBarcode"
          value={data.productBarcode}
          onChangeText={(value) => setData({...data, productBarcode: value})}
          mode="outlined"
        />
        <Button mode="contained" onPress={() => handleSubmit()}>
          Salvar
        </Button>
        <Button mode="contained" onPress={() => handleDelete()}>
          remove todos
        </Button>
      </View>
    </View>
  );
};

export default Product;
