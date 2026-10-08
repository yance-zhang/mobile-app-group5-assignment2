import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PlaceholderIcon = ({ size = 18 }) => (
  <View
    style={[
      styles.placeholderIcon,
      {
        width: size,
        height: size,
        borderRadius: size / 2,
      },
    ]}
  />
);

const menuItems = [
  "Scan code",
  "Splitwise Pro",
  "Preferences",
  "Notifications",
  "Security",
  "Appearance",
  "Help & Support",
  "Help center",
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <Text style={styles.pageTitle}>Account</Text>
        </View>

        <View style={styles.userRow}>
          <PlaceholderIcon size={44} />

          <View style={styles.userInfo}>
            <Text style={styles.userName}>Username</Text>
            <Text style={styles.email}>Useremail@gmail.com</Text>
          </View>

          <Text style={styles.editText}>Edit</Text>
        </View>

        <View style={styles.promoCard}>
          <Text style={styles.promoText}>
            Do more with <Text style={styles.promoBold}>Splitwise Pro.</Text>
          </Text>

          <View style={styles.promoButton}>
            <Text style={styles.promoButtonText}>Get Splitwise Pro</Text>
          </View>
        </View>

        <View style={styles.listWrapper}>
          {menuItems.map((item, index) => (
            <Pressable
              key={item}
              onPress={
                item === "Appearance"
                  ? () => router.push("/(tabs)/profile/appearance")
                  : undefined
              }
              disabled={item !== "Appearance"}
              style={[
                styles.listItem,
                index === menuItems.length - 1 && styles.lastItem,
              ]}
            >
              <View style={styles.listLeft}>
                {index < 2 && <PlaceholderIcon size={20} />}
                <Text style={styles.listText}>{item}</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#171b22",
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 28,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  pageTitle: {
    flex: 1,
    textAlign: "center",
    marginRight: 42,
    fontSize: 24,
    color: "#f0f0f0",
    fontWeight: "500",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 26,
  },
  userInfo: {
    flex: 1,
    marginLeft: 14,
  },
  userName: {
    fontSize: 18,
    color: "#f4f4f4",
    fontWeight: "500",
  },
  email: {
    fontSize: 15,
    color: "#c4c6cc",
    marginTop: 4,
  },
  editText: {
    fontSize: 21,
    color: "#8ee7d9",
    fontWeight: "600",
  },
  promoCard: {
    backgroundColor: "#7a42b8",
    borderRadius: 22,
    paddingVertical: 32,
    paddingHorizontal: 22,
    marginBottom: 22,
    overflow: "hidden",
    position: "relative",
  },
  promoText: {
    color: "#f7f4ff",
    fontSize: 24,
    textAlign: "center",
    lineHeight: 40,
    marginTop: 20,
    marginBottom: 22,
  },
  promoBold: {
    fontWeight: "700",
  },
  promoButton: {
    backgroundColor: "#9a5ad9",
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  promoButtonText: {
    color: "#f4f4f4",
    fontSize: 18,
    fontWeight: "600",
  },
  listWrapper: {
    marginTop: 6,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#2b2f36",
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  listLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  listText: {
    marginLeft: 14,
    fontSize: 18,
    color: "#f3f3f3",
  },
  arrow: {
    fontSize: 28,
    color: "#d7d7d7",
  },
  placeholderIcon: {
    backgroundColor: "#d7d7d7",
  },
});
