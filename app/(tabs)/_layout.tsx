import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>        
      <Tabs.Screen name="index" options={{ title: 'Home da App' }} />
      <Tabs.Screen name="tela01" options={{ title: 'Tela Zero Um ' }} />
    </Tabs>
  );
}
