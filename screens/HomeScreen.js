import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FilmeCard from "../components/filmeCard";
import { filmes as dadosIniciais } from "../data";

export default function HomeScreen() {
  const [filmes, setFilmes] = useState(dadosIniciais);

  function removerFilme(id) {
    setFilmes((prev) => prev.filter((f) => f.id !== id));
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View>
          <Text style={styles.boas}>Boa noite 🌙</Text>
          <Text style={styles.titulo}>Sr. Cinema</Text>
        </View>
        <View style={styles.avatar}>
          <MaterialCommunityIcons name="movie-open" size={22} color="#fff" />
        </View>
      </View>

      <View style={styles.topArea}>
        <View style={styles.inputRow}>
          <MaterialCommunityIcons name="magnify" size={18} color="#444" />
          <TextInput
            placeholder="Buscar ou adicionar filme..."
            placeholderTextColor="#444"
            style={styles.input}
          />
        </View>

        <View style={styles.filtros}>
          <TouchableOpacity style={styles.botaoAtivo}>
            <MaterialCommunityIcons name="view-list" size={13} color="#fff" />
            <Text style={styles.textoAtivo}>Todos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <MaterialCommunityIcons name="clock-outline" size={13} color="#666" />
            <Text style={styles.texto}>Para assistir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <MaterialCommunityIcons name="check-circle-outline" size={13} color="#666" />
            <Text style={styles.texto}>Assistidos</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FilmeCard filme={item} onRemover={removerFilme} />
        )}
        contentContainerStyle={{ padding: 16, gap: 10 }}
      />

      <View style={styles.footer}>
        <View style={styles.footerItemAtivo}>
          <Entypo name="home" size={20} color="#e50914" />
          <Text style={styles.footerLabelAtivo}>Início</Text>
        </View>
        <View style={styles.footerItem}>
          <MaterialCommunityIcons name="movie-roll" size={20} color="#444" />
          <Text style={styles.footerLabel}>Em cartaz</Text>
        </View>
        <View style={styles.footerItem}>
          <MaterialCommunityIcons name="heart-outline" size={20} color="#444" />
          <Text style={styles.footerLabel}>Favoritos</Text>
        </View>
        <View style={styles.footerItem}>
          <MaterialCommunityIcons name="account-outline" size={20} color="#444" />
          <Text style={styles.footerLabel}>Perfil</Text>
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#05070d" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 54, paddingBottom: 6 },
  boas: { color: "#666", fontSize: 12, marginBottom: 2 },
  titulo: { color: "#fff", fontSize: 26, fontWeight: "bold" },
  avatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: "#e50914", alignItems: "center", justifyContent: "center" },
  topArea: { paddingHorizontal: 20, marginTop: 14 },
  inputRow: { flexDirection: "row", alignItems: "center", backgroundColor: "#0e1118", borderRadius: 12, borderWidth: 1, borderColor: "#1c1f2a", paddingHorizontal: 12, marginBottom: 14, gap: 8 },
  input: { flex: 1, paddingVertical: 12, color: "#fff", fontSize: 14 },
  filtros: { flexDirection: "row", gap: 8 },
  botao: { flexDirection: "row", alignItems: "center", gap: 5, borderWidth: 1, borderColor: "#1e2130", paddingVertical: 7, paddingHorizontal: 14, borderRadius: 20, backgroundColor: "#0e1118" },
  botaoAtivo: { flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#e50914", paddingVertical: 7, paddingHorizontal: 14, borderRadius: 20 },
  texto: { color: "#666", fontSize: 12 },
  textoAtivo: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  footer: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 14, paddingBottom: 28, borderTopWidth: 1, borderTopColor: "#0e1118", backgroundColor: "#080a10" },
  footerItem: { alignItems: "center", gap: 4 },
  footerItemAtivo: { alignItems: "center", gap: 4 },
  footerLabel: { color: "#444", fontSize: 10 },
  footerLabelAtivo: { color: "#e50914", fontSize: 10, fontWeight: "bold" },
});