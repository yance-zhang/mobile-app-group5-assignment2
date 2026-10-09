import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type ThemeMode = "light" | "dark" | "system";

const themeOptions: Array<{
  key: ThemeMode;
  label: string;
  description?: string;
  iconGlyph: string;
}> = [
  {
    key: "light",
    label: "Light",
    iconGlyph: "☼",
  },
  {
    key: "dark",
    label: "Dark",
    iconGlyph: "☾",
  },
  {
    key: "system",
    label: "System",
    description: "App appearance adjusts to match your system settings",
    iconGlyph: "◐",
  },
];

export default function Appearance() {
  const [selected, setSelected] = useState<ThemeMode>("system");

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        {themeOptions.map((option) => {
          return (
            <Pressable
              key={option.key}
              onPress={() => setSelected(option.key)}
              style={styles.row}
            >
              <View style={styles.rowLeft}>
                <Text style={styles.icon}>{option.iconGlyph}</Text>

                <View style={styles.textWrap}>
                  <Text style={styles.optionLabel}>{option.label}</Text>
                  {option.description ? (
                    <Text style={styles.optionDescription}>
                      {option.description}
                    </Text>
                  ) : null}
                </View>
              </View>

              {selected === option.key ? (
                <Text style={styles.checkmark}>✓</Text>
              ) : (
                <Text style={styles.checkmark}></Text>
              )}
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#3a3f47",
    paddingHorizontal: 18,
    paddingTop: 8,
  },
  card: {
    borderRadius: 26,
    backgroundColor: "#252729",
    overflow: "hidden",
  },
  row: {
    minHeight: 86,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#3c4048",
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    fontSize: 28,
    color: "white",
    marginRight: 14,
  },
  textWrap: {
    flex: 1,
    paddingRight: 12,
  },
  optionLabel: {
    color: "#f0f3f8",
    fontSize: 39 / 2,
    fontWeight: "500",
  },
  optionDescription: {
    marginTop: 6,
    color: "#bcc6d3",
    fontSize: 16,
    lineHeight: 24 / 1,
  },
  checkmark: {
    color: "#1fc49f",
    fontSize: 34 / 2,
    fontWeight: "700",
    marginLeft: 8,
  },
});
