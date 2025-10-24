import {Text, StyleSheet, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


const SignUp = () => {
	return(
		<SafeAreaView style={styles.container}>
			<TouchableOpacity onPress={() => {
				router.replace("/(auth)/sign-in");
			}}>
			 <ThemedText style={{}}>SignIn</ThemedText>
			</TouchableOpacity>
		</SafeAreaView>
		);
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SignUp;