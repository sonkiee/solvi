import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export type RadioOption<T> = {
  label: string;
  value: T;
};

type Props<T> = {
  options: RadioOption<T>[];
  selected: T;
  onChange: (value: T) => void;
  row?: boolean;
};

function RadioButtonGroup<T>({
  options,
  selected,
  onChange,
  row = false,
}: Props<T>): React.ReactElement {
  return (
    <View
      style={[
        styles.group,
        row && {
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        },
      ]}
    >
      {options.map((option) => {
        const isSelected = option.value === selected;
        return (
          <Pressable
            key={String(option.value)}
            style={styles.option}
            onPress={() => onChange(option.value)}
          >
            <View
              style={[styles.outerCircle, isSelected && styles.selectedOuter]}
            >
              {isSelected && <View style={styles.innerCircle} />}
            </View>
            <Text style={styles.label}>{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default RadioButtonGroup;

const styles = StyleSheet.create({
  group: {
    flexDirection: "column",
    gap: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedOuter: {
    borderColor: "#007aff",
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#007aff",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});
