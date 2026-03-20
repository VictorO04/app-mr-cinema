import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function FilmeCard({ filme, onRemover }) {
  function confirmar() {
    Alert.alert("Remover filme", `Deseja remover "${filme.titulo}"?`, [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Remover",
        style: "destructive",
        onPress: () => onRemover(filme.id),
      },
    ]);
  }

  return (
    <View style={styles.card}>
      <View style={styles.poster}>
        <Image source={{ uri: filme.imagem }} style={styles.posterImg} />
      </View>

      <View style={styles.info}>
        <Text style={styles.titulo}>{filme.titulo}</Text>
        <View style={styles.metaRow}>
          <MaterialCommunityIcons
            name="account-outline"
            size={12}
            color="#555"
          />
          <Text style={styles.sub}>{filme.diretor}</Text>
        </View>
        <View style={styles.metaRow}>
          <MaterialCommunityIcons
            name="calendar-outline"
            size={12}
            color="#555"
          />
          <Text style={styles.sub}>{filme.ano}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.deleteBtn} onPress={confirmar}>
        <MaterialCommunityIcons
          name="delete-outline"
          size={20}
          color="#e50914"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0e1118",
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderWidth: 1,
    borderColor: "#1c1f2a",
  },
  poster: {
    width: 52,
    height: 68,
    backgroundColor: "#1a0a0c",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#3a1010",
  },
  info: {
    flex: 1,
    gap: 5,
  },
  titulo: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  sub: {
    color: "#555",
    fontSize: 11,
  },
  deleteBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#1a0a0c",
    borderWidth: 1,
    borderColor: "#3a1010",
    alignItems: "center",
    justifyContent: "center",
  },
  posterImg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
