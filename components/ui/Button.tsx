import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import GradientContainer from "./GradientContainer";

interface ButtonProps extends PressableProps {
  onPress?: () => void;
  title: string;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  gradient?: boolean;
}

// TODO: add support for icons, varient e.g primary, outline, and danger abd animated loading spinner

const Button = ({
  onPress,
  title,
  color = "#0a7ea4",
  disabled = false,
  loading = false,
  style,
  testID,
  gradient,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <GradientContainer>
      <Pressable
        onPress={onPress}
        disabled={isDisabled}
        testID={testID}
        accessibilityRole="button"
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: gradient ? "" : color },
          isDisabled && styles.disabled,
          pressed && !isDisabled && styles.pressed,
          style,
        ]}
        {...rest}
      >
        <View style={styles.content}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.text}>{title}</Text>
          )}
        </View>
      </Pressable>
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.4,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Button;

// accessibilityLabel?: string;
//   accessibilityHint?: string;
//   disabledStyle?: StyleProp<ViewStyle>;
//   disabledTitleStyle?: StyleProp<TextStyle>;
//   disabledColor?: string;
//   disabledTitle?: string;
//   disabledTestID?: string;
//   disabledAccessibilityLabel?: string;
//   disabledAccessibilityHint?: string;
//   loadingText?: string;
//   loadingStyle?: StyleProp<ViewStyle>;
//   loadingColor?: string;
//   loadingBackgroundColor?: string;
//   loadingSize?: "small" | "medium" | "large";
//   loadingTestId?: string;
//   loadingAccessibilityLabel?: string;
//   loadingAccessibilityHint?: string;
//   children?: React.ReactNode;
//   icon?: React.ReactNode;
//   iconSize?: number;
//   iconColor?: string;
