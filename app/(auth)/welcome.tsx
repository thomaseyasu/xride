import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from "@/components/themed-view";
import { onboarding } from "@/constants";


const Onboarding = () => {
	const swiperRef = useRef<Swiper>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const isLastSlide = activeIndex === onboarding.length - 1;
	return(
		<SafeAreaView style={styles.container}>
			<TouchableOpacity style={styles.router} onPress={() => {
				router.replace("/(auth)/sign-up");
			}}>
			 <ThemedText style={{}}>SKIP</ThemedText>
			</TouchableOpacity>
			<Swiper
				//style={styles.swiper}
				ref={swiperRef}
				loop={false}
				dot={<ThemedView style={styles.swiperDot} />}
				activeDot={<ThemedView style={styles.swiperActiveDot} />}
				onIndexChanged={(index) => setActiveIndex(index)}
			>
				{onboarding.map((item) => (
					<ThemedView key={item.id} style={styles.swiperText}>
						<Image 
							source={item.image}
							style={styles.swiperImage}
						/>
						<ThemedText type="subtitle">
							{item.title}
						</ThemedText>
						<ThemedText type="default">
							{item.description}
						</ThemedText>
					</ThemedView>
				))}
				
			</Swiper>
			<TouchableOpacity 
				style={styles.button}
				onPress={() => 
					isLastSlide ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1)
				}
			>
			<ThemedText type="default">
				{isLastSlide ? 'Get Started' : 'Next'}
			</ThemedText>
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
	backgroundColor: 'transparent',
  },

  router: {
  	width: '100%',
  	flex: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 5,

  },
  swiperDot: {
  	width: 32,
  	height: 4,
  	backgroundColor: "grey",
	borderRadius: 25,
	margin: 5,
  },
  swiperActiveDot: {
  	width: 32,
  	height: 4,
  	backgroundColor: "blue",
	borderRadius: 25,
	margin: 5,
  },
  swiperText: {
	flex: 0,
	width: '100%',
	height: '100%',
	alignItems: 'center',
	justifyContent: 'center',
  },
  swiperImage: {
	width: '100%',
	height: 300,
	resizeMode: 'contain',
  },
  button: {
    flex: 0,
    width: '70%',
    borderRadius: 25,
    backgroundColor: 'rgba(9, 28, 152, 0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
	margin: 10,
  },
});

export default Onboarding;