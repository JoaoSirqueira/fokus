import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton"
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua {'\n'}produtividade,{'\n'}
        <Text style={styles.bold}>
          mergulhe no que{'\n'} importa
        </Text>
        </Text>
        <Image source={require('../assets/images/home.png')} />
        <FokusButton
          title="Quero iniciar!"
          onPress={() => router.replace('/pomodoro')}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício sem fins lucrativos.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Alura.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40,
  },
  inner: {
    gap: 16,
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26,
  },
  bold: {
    fontWeight: 'bold',
  },
  footer: {
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5,
  },
})