import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const SignIn = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-center items-center h-full px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-white font-psemibold text-2xl mt-10">
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            otherStyles="mt-7 "
            // keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles="mt-7 "
          />
          <CustomButton
            title="Sign In"
            handlePress={handleSubmit}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-gray-100 text-lg font-pregular">
              Don't have an account?
            </Text>
            <Text
            className="text-secondary-200 font-psemibold text-lg"
            onPress={() => router.push("/sign-up")}
          >
            Sign Up
          </Text>
    
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
