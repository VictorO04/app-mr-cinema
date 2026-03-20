import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.logo}>
        <MaterialCommunityIcons name="movie-open" size={40} color="#fff" />
      </View>
      <Text style={styles.titulo}>Sr. Cinema</Text>
      <Text style={styles.sub}>Entre na sua conta</Text>

      <View style={styles.inputRow}>
        <MaterialCommunityIcons name="email-outline" size={18} color="#444" />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#444"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputRow}>
        <MaterialCommunityIcons name="lock-outline" size={18} color="#444" />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#444"
          style={styles.input}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05070d",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#e50914",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  titulo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
  },
  sub: {
    color: "#666",
    fontSize: 13,
    marginBottom: 32,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#0e1118",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1c1f2a",
    paddingHorizontal: 14,
    marginBottom: 12,
    gap: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    color: "#fff",
    fontSize: 14,
  },
  botao: {
    width: "100%",
    backgroundColor: "#e50914",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginTop: 8,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});