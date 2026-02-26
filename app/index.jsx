import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
    return (
        <>
        <View>
            <Text>Index</Text>
            <Link href="login">Login</Link>
            <Link href="sobre">Página Sobre</Link>            
            <Link href="admin">Administrar</Link>
        </View>
        </>
    );
}