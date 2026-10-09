import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const activities = [
  {
    title: 'Michael J. added "Coffee Shop" in "Current Expenses"',
    price: "You owe CAD $13.28",
    time: "Sunday at 11:31 AM",
    icon: require("../../assets/images/food-icon.png"),
  },
  {
    title: 'Ella M. added "T&T" in "Current Expenses"',
    price: "You owe CAD $19.72",
    time: "Saturday at 2:36 PM",
    icon: require("../../assets/images/gift-icon.png"),
  },
  {
    title: 'Michael J. added "Groceries" in "Current Expenses"',
    price: "You owe CAD $65.11",
    time: "Thursday at 5:22 PM",
    icon: require("../../assets/images/shop-icon.png"),
  },
  {
    title: 'Michael J. added "Paper towels" in "Current Expenses"',
    price: "You owe CAD $37.50",
    time: "Wednesday at 4:54 PM",
    icon: require("../../assets/images/shop-icon.png"),
  },
  {
    title: 'Michael J. added "Coffee Shop" in "Current Expenses"',
    price: "You owe CAD $13.28",
    time: "Wednesday at 11:52 AM",
    icon: require("../../assets/images/food-icon.png"),
  },
  {
    title: 'Michael J. added "Tim Hortons" in "Current Expenses"',
    price: "You owe CAD $19.20",
    time: "Tuesday at 1:42 PM",
    icon: require("../../assets/images/food-icon.png"),
  },
  {
    title: 'Ella M. added "Barnes & Noble" in "Current Expenses"',
    price: "You owe CAD $35.01",
    time: "Monday at 6:05 PM",
    icon: require("../../assets/images/book-icon.png"),
  },
];

const PlaceholderIcon = ({ size = 18, source }) => (
  <View style={[styles.iconStack, { width: size, height: size }]}>
    <Image
      source={source}
      style={[
        styles.placeholderIcon,
        {
          width: size,
          height: size,
          borderRadius: 2,
        },
      ]}
      resizeMode="cover"
    />

    <Image
      source={require("../../assets/images/profile.png")}
      style={[
        styles.profileImage,
        {
          width: 28,
          height: 28,
          borderRadius: 14,
        },
      ]}
      resizeMode="cover"
    />
  </View>
);

export default function ActivityScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <Text style={styles.pageTitle}>Recent Activity</Text>
        </View>

        {activities.map((activity, index) => (
          <View key={`${activity.time}-${index}`} style={styles.activityRow}>
            <PlaceholderIcon size={44} source={activity.icon} />

            <View style={styles.activityInfo}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityPrice}>{activity.price}</Text>
              <Text style={styles.activityTime}>{activity.time}</Text>
            </View>
          </View>
        ))}

        <Pressable style={styles.expensesButton}>
          <Text style={styles.expensesButtonText}>🧾 Add expense</Text>
        </Pressable>
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
    marginRight: 42,
    fontSize: 24,
    color: "#f0f0f0",
  },
  expensesButton: {
    backgroundColor: "#1aa683",
    borderRadius: 99,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  expensesButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  activityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 26,
  },
  activityInfo: {
    flex: 1,
    marginLeft: 20,
  },
  activityTitle: {
    fontSize: 18,
    color: "#f4f4f4",
    fontWeight: "500",
  },
  activityPrice: {
    fontSize: 15,
    color: "#ef6420",
    marginTop: 4,
  },
  activityTime: {
    fontSize: 15,
    color: "#c4c6cc",
    marginTop: 4,
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
  iconStack: {
    position: "relative",
  },
  placeholderIcon: {
    backgroundColor: "#d7d7d7",
  },
  profileImage: {
    position: "absolute",
    right: -6,
    bottom: -6,
    backgroundColor: "#d7d7d7",
    borderWidth: 2,
    borderColor: "#171b22",
  },
});
