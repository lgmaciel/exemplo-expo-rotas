import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
    return (
        <>
        <View>
            <Text>Index</Text>
            <Link href="admin/listar">Listar usuários</Link>
            <Link href="admin/aprovar">Aprovar contas</Link>            
        </View>
        </>
    );
}