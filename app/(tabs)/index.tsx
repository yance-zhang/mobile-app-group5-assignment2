import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const friends = [
  { name: "Friend A", note: "no expenses" },
  { name: "Friend B", debtLabel: "you owe", debtAmount: "$276.88" },
];

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topRow}>
        <View style={styles.iconButton}>
          <Text style={styles.iconText}>⌕</Text>
        </View>

        <View style={styles.addFriendsPill}>
          <Text style={styles.addFriendsText}>Add friends</Text>
        </View>
      </View>

      <View style={styles.summaryRow}>
        <Text style={styles.summaryText}>
          Overall, you owe <Text style={styles.summaryAmount}>$276.88</Text>
        </Text>
        <Text style={styles.filterIcon}>☰</Text>
      </View>

      <View style={styles.friendList}>
        {friends.map((friend) => (
          <View key={friend.name} style={styles.friendRow}>
            <View style={styles.avatar} />
            <Text style={styles.friendName}>{friend.name}</Text>
            {friend.note ? (
              <Text style={styles.noExpenseText}>{friend.note}</Text>
            ) : (
              <View style={styles.debtWrap}>
                <Text style={styles.debtLabel}>{friend.debtLabel}</Text>
                <Text style={styles.debtAmount}>{friend.debtAmount}</Text>
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={styles.moreFriendsButton}>
        <Text style={styles.moreFriendsText}>Add more friends</Text>
      </View>

      <View style={styles.addExpenseButton}>
        <Text style={styles.addExpenseText}>+ Add expense</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#232529",
    paddingHorizontal: 14,
    paddingTop: 4,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 18,
  },
  iconButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: "#4f5561",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.01)",
  },
  iconText: {
    color: "#eef1f5",
    fontSize: 25,
    fontWeight: "400",
    marginTop: -2,
  },
  addFriendsPill: {
    height: 58,
    paddingHorizontal: 22,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: "#4f5561",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.01)",
  },
  addFriendsText: {
    color: "#eef1f5",
    fontSize: 18,
    fontWeight: "500",
  },
  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  summaryText: {
    color: "#f3f4f6",
    fontSize: 18,
    fontWeight: "600",
  },
  summaryAmount: {
    color: "#ff7f24",
    fontWeight: "700",
  },
  filterIcon: {
    color: "#f3f4f6",
    fontSize: 22,
    lineHeight: 22,
    marginLeft: 8,
  },
  friendList: {
    marginTop: 6,
    marginBottom: 20,
  },
  friendRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
    backgroundColor: "#5b6472",
  },
  friendName: {
    color: "#eceff4",
    fontSize: 17,
    fontWeight: "500",
    flex: 1,
  },
  noExpenseText: {
    color: "#b6bfcd",
    fontSize: 14,
    fontWeight: "500",
  },
  debtWrap: {
    alignItems: "flex-end",
  },
  debtLabel: {
    color: "#ff7f24",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 2,
  },
  debtAmount: {
    color: "#ff7f24",
    fontSize: 22,
    fontWeight: "500",
  },
  moreFriendsButton: {
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: "#18c2a8",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  moreFriendsText: {
    color: "#18c2a8",
    fontSize: 20,
    fontWeight: "600",
  },
  addExpenseButton: {
    position: "absolute",
    right: 20,
    bottom: 50,
    height: 62,
    paddingHorizontal: 24,
    borderRadius: 31,
    backgroundColor: "#21b69a",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#10a992",
    shadowOpacity: 0.5,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 7,
  },
  addExpenseText: {
    color: "#ebf8f5",
    fontSize: 19,
    fontWeight: "600",
  },
});