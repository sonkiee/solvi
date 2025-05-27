import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const bvnFaqs = [
  {
    q: "Why we need your BVN?",
    a: "Your BVN helps us verify your identity and ensure the security of your account. It's a requirement for all financial services in Nigeria..",
  },
  {
    q: "What details are your verifying with my BVN?",
    a: "We verify your full name, date of birth, and phone number to ensure they match our records. We do not have access to your bank accounts or transactions.",
  },
  {
    q: "What do i do if BVN verifcation fails?",
    a: "f verification fails, please ensure you entered the correct BVN. If the problem persists, contact our support team with a screenshot of the error message.",
  },
];

const Tier1Screen = () => {
  const [selected, setSelected] = React.useState<number | null>(null);

  return (
    <Container top={1}>
      <View style={styles.container}>
        <Text style={styles.titleText}>BVN</Text>
        <Text style={styles.descText}>Enter your Bank Verification Number</Text>

        <View style={styles.inputSection}>
          <TextInput
            placeholder="Enter your BVN"
            container={{
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 6,
            }}
          />

          <View style={styles.faqSection}>
            {bvnFaqs.map((faq, index) => (
              <Pressable
                key={index}
                accessibilityRole="button"
                onPress={() => setSelected(selected === index ? null : index)}
                style={styles.faqItem}
              >
                <Text style={styles.faqQuestion}>{faq.q}</Text>
                {selected === index && (
                  <Text style={styles.faqAnswer}>{faq.a}</Text>
                )}
              </Pressable>
            ))}
          </View>

          <Button title="Verify" gradient />
        </View>
      </View>
    </Container>
  );
};

export default Tier1Screen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#fff",
    margin: 6,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
  },
  descText: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  inputSection: {
    marginVertical: 20,
    gap: 20,
  },
  faqSection: {
    gap: 16,
  },
  faqItem: {
    paddingVertical: 8,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  faqAnswer: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    lineHeight: 20,
    // animationDuration: 0.5,
    transitionProperty: "",
  },
});
