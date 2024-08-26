    import { StatusBar } from 'expo-status-bar';
    import { StyleSheet, Text, View } from 'react-native';
    import React, { useEffect } from 'react';
    import { StyleSheet, Text, View } from 'react-native';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function IntroScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Homepage');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Trường Đại học Sư Phạm Kỹ Thuật TPHCM</Text>
      <Text>Trần Trọng Khang</Text>
      <Text>21110834</Text>
      <Text>Công nghệ phần mềm</Text>
    </View>
  );
}

function HomepageScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my app</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Homepage" component={HomepageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
