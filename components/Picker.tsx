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
};

const Picker = ({
  options,
  selectedValue,
  onValueChange,
  placeholder = "Select an option",
  icon,
}: PickerProps) => {
  const [visible, setVisible] = useState(false);

  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label || placeholder;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.inputBox}
        onPress={() => setVisible((v) => !v)}
      >
        <Text style={selectedValue ? styles.text : styles.placeholder}>
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
  inputBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 12,
    backgroundColor: "#fff",
  },
  text: {
    color: "#000",
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
