import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [novoFilme, setNovoFilme] = useState("");
  const [listaFilmes, setListaFilmes] = useState([]);
  
  const adicionarFilme = () => {
    if (novoFilme.trim() === "") return;
    const jogoObjeto = {
      id: String(Date.now()),
      texto: novoFilme
    }
    setListaFilmes([...listaFilmes, jogoObjeto]);
    setNovoFilme("");
  }

  const removerFilme = (idParaRemover) => {
    const listaFiltrada = listaFilmes.filter((item) => item.id !== idParaRemover);
    setListaFilmes(listaFiltrada);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
