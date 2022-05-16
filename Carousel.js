import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList, Animated, StatusBar } from "react-native";
import LottieView from "lottie-react-native";
import { COLORS, SIZES } from './src/constants/theme';
import { useState } from "react";

import slides from './slides';

export default function Carousel() {
    const [showHomePage, setShowHomePage] = useState(true);

    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor(COLORS.primary);
  
    const buttonLabel = (label) => {
      return(
        <View style={{
          padding: 12
        }}>
          <Text style={{
            color: COLORS.title,
            fontWeight: '600',
            fontSize: SIZES.h4,
          }}>
            {label}
          </Text>
        </View>
      )
    }
  
    if(!showHomePage) {
      return(
        <AppIntroSlider
          data={slides}
          renderItem={({item}) => {
            return(
              <View style={{
                flex: 1,
                alignItems: 'center',
                padding: 15,
                paddingTop: 100,
              }}>
                <Image
                  source={item.image}
                  style={{
                    width: SIZES.width - 80,
                    height: 400,
                  }}
                  resizeMode="contain"
                />
                <Text style={{
                  fontWeight: 'bold',
                  color: COLORS.title,
                  fontSize: SIZES.h1,
                }}>
                  {item.title}
                </Text>
                <Text style={{
                  textAlign: 'center',
                  paddingTop: 5,
                  color: COLORS.title
                }}>
                  {item.description}
                </Text>
              </View>
            )
          }}
          activeDotStyle={{
            backgroundColor: COLORS.primary,
            width: 30,
          }}
          showSkipButton
          renderNextButton={() => buttonLabel("Next")}
          renderSkipButton={() => buttonLabel("Skip")}
          renderDoneButton={() => buttonLabel("Done")}
          onDone={() => {
            setShowHomePage(true);
          }}
        />
      )
    }
  
}

