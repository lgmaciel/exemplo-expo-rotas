import { Stack } from "expo-router";
import { BarraDeRodape, BarraDeStatus } from "../components/meus-componentes";
export default function RootLayout() {
return (
    <>
    <BarraDeStatus></BarraDeStatus>
    <Stack>
        <Stack.Screen name="index" options={{
            title:"Home Page",
            headerShown: true,
        }}>            
        </Stack.Screen>

        <Stack.Screen name="sobre" options={{
            title:"Sobre",
            headerShown: true,
        }}>            
        </Stack.Screen>

        <Stack.Screen name="login" options={{
            title:"Faça login",
            headerShown: true,
        }}>         
        </Stack.Screen>

        <Stack.Screen name="+not-found" options={{
            headerShown: false,
        }}>         
        </Stack.Screen>
    
        <Stack.Screen name="admin/index" options={{
            headerShown: true,
            title:"Área administrativa"
        }}>         
        </Stack.Screen>
    
        <Stack.Screen name="admin/listar" options={{
            headerShown: true,
            title:"Listagem"
        }}>
        </Stack.Screen>
        
        <Stack.Screen name="admin/aprovar" options={{
            headerShown: true,
            title:"Aprovar contas"
        }}>         
        </Stack.Screen>
        
    </Stack>    
    <BarraDeRodape></BarraDeRodape>
    </>
);
}