import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";

import { icons } from "../constants";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (e: string) => void;
  otherStyles: string;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View className={`space-y-2 w-full  ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View
        // className={`border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl items-center flex-row focus:border-secondary`}
        className={`border-2 w-full h-16 px-4 bg-black-100 rounded-2xl items-center flex-row ${
          isFocused ? "border-secondary" : "border-black-200"
        }`}
      >
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          className="text-white flex-1 font-psemibold w-full"
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={title === "Email" ? "email-address" : "default"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
