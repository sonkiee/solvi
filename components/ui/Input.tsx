import { MaterialIcons } from "@expo/vector-icons";
import { ReactElement, useState } from "react";
import {
  Keyboard,
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

interface TextInputProps extends RNTextInputProps {
  title?: string;
  value?: string;
  icon?: ReactElement;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  container?: StyleProp<ViewStyle>;
  label?: StyleProp<TextStyle>;
}

const TextInput = ({
  title,
  value = "",
  icon,
  placeholder,
  containerStyle,
  textInputStyle,
  secureTextEntry: secureProp,
  container,
  onChangeText,
  label,
  ...rest
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isPassword = title?.toLowerCase() === "password";
  const [secureTextEntry, setSecureTextEntry] = useState(
    isPassword ? true : secureProp ?? false
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={containerStyle}>
        {title && <Text style={[styles.label, label]}>{title}</Text>}
        <View
          style={[
            styles.inputContainer,
            isFocused && styles.focusedInputContainer,
            container,
          ]}
        >
          <View style={{ marginRight: 5 }}>{icon && icon}</View>

          <RNTextInput
            style={[styles.textInput, textInputStyle]}
            placeholder={placeholder}
            value={value}
            secureTextEntry={secureTextEntry}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={onChangeText}
            placeholderTextColor="#aaa"
            {...rest}
          />
          {isPassword && (
            <Pressable onPress={() => setSecureTextEntry(!secureTextEntry)}>
              <Text style={styles.toggle}>
                {secureTextEntry ? "Show" : "Hide"}
              </Text>
            </Pressable>
          )}

          {/* Clear button */}
          {value?.length > 0 && !isPassword && (
            <Pressable onPress={() => onChangeText?.("")} hitSlop={10}>
              <MaterialIcons name="cancel" size={20} color="#aaa" />
            </Pressable>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "500",
    // color: "#333",
    color: "#ccc",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f4f5f7",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 13,
    backgroundColor: "transparent",
    gap: 6,
  },
  focusedInputContainer: {
    borderColor: "#0a7ea4",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#aaa",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#666",
  },
  toggle: {
    fontSize: 12,
    color: "#0a7ea4",
    marginLeft: 8,
  },
});
