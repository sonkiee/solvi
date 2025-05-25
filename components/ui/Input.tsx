import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

type TextInputProps = RNTextInputProps & {
  secureTextEntry?: boolean;
  disabled?: boolean;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  placeholder?: string;
  placeholderTextColor?: string;
  returnKeyType?: string;
  textContentType?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onEndEditing?: () => void;
  onSubmitEditing?: (event: { nativeEvent: { text: string } }) => void;
  keyboardType?: string;
  autoCapitalize?: string;
  autoCorrect?: boolean;
  autoFocus?: boolean;
  clearButtonMode?: string;
  clearTextOnFocus?: boolean;
  editable?: boolean;
  enablesReturnKeyAutomatically?: boolean;
  keyboardAppearance?: string;
  icon: React.ReactElement;
};

const TextInput = ({ icon }: TextInputProps) => {
  return <RNTextInput placeholder="Enter text" />;
};

export default TextInput;
