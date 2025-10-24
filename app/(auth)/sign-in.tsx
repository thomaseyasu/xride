import {Text, StyleSheet, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


const SignIn = () => {
	return(
		<SafeAreaView style={styles.container}>
			<TouchableOpacity style={styles.router} onPress={() => {
				router.replace("/(auth)/welcome");
			}}>
			 <ThemedText style={{}}>SignUp</ThemedText>
			</TouchableOpacity>
		</SafeAreaView>
		);
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  router: {
  	width: '100%',
  	flex: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

  },
});

export default SignIn;