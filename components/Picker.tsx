import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Option = {
  label: string;
  value: string;
  icon?: React.ReactElement;
};

type PickerProps = {
  options: Option[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactElement;
  transparent?: boolean;
  title?: string;
};

const Picker = ({
  options,
  selectedValue,
  onValueChange,
  placeholder = "Select an option",
  icon,
  transparent = false,
  title,
}: PickerProps) => {
  const [visible, setVisible] = useState(false);

  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label || placeholder;

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TouchableOpacity
        style={[
          styles.inputBox,
          transparent
            ? { backgroundColor: "rgba(255,255,255, 0.1)" }
            : { backgroundColor: "#fff" },
        ]}
        onPress={() => setVisible((v) => !v)}
      >
        <Text style={selectedValue ? styles.selectedText : styles.placeholder}>
          {selectedLabel}
        </Text>
      </TouchableOpacity>

      {visible && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  onValueChange(item.value);
                  setVisible(false);
                }}
              >
                {icon && icon}
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Picker;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    paddingVertical: 5,
    fontWeight: "500",
    color: "#aaa",
    fontSize: 15,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 12,
  },
  selectedText: {
    color: "#000", // Always black when value is selected
  },
  placeholder: {
    color: "#aaa",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#fff",
    maxHeight: 200,
    marginTop: 4,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
});
