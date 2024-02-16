import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { IconButton } from "react-native-paper";

import Fence from "./src/Screen/Fence";
import FenceDetails from "./src/Screen/FenceDetails";
import Plantation from "./src/Screen/Plantation";
import PlantationDetails from "./src/Screen/PlantationDetails";
import Fertilization from "./src/Screen/Fertilization";
import FertilizationDetails from "./src/Screen/FertilizationDetails";
import TemplateView from "./src/Screen/TemplateView";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TemplateView"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Slide-in/slide-out animation
        }}
      >
         <Stack.Screen
          name="TemplateView"
          component={TemplateView}
          options={({ navigation }) => ({
            headerShown: false,
            title: "",
            headerTransparent: true,
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                iconColor="#fff"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Fence"
          component={Fence}
          options={({ navigation }) => ({
            headerShown: false,
            title: "",
            headerTransparent: true,
          })}
        />

        <Stack.Screen
          name="FenceDetails"
          component={FenceDetails}
          options={({ navigation }) => ({
            headerShown: false,
            title: "",
            headerTransparent: true,
          })}
        />

        <Stack.Screen
          name="Plantation"
          component={Plantation}
          options={({ navigation }) => ({
            headerShown: false,
            title: "",
            headerTransparent: true,
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                iconColor="#fff"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />

        <Stack.Screen
          name="PlantationDetails"
          component={PlantationDetails}
          options={({ navigation }) => ({
            headerShown: false,
            title: "",
            headerTransparent: true,
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                iconColor="#fff"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />

        <Stack.Screen
          name="Fertilization"
          component={Fertilization}
          options={({ navigation }) => ({
            headerShown: false,
            title: "",
            headerTransparent: true,
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                iconColor="#fff"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />

        <Stack.Screen
          name="FertilizationDetails"
          component={FertilizationDetails}
          options={({ navigation }) => ({
            headerShown: false,
            title: "",
            headerTransparent: true,
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                iconColor="#fff"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
