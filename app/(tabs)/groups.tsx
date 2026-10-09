
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Expense = {
  id: string;
  date: string;
  title: string;
  paid: string;
  amount: number;
  emoji: string;
  color: string;
};

const initialExpenses: Expense[] = [
  {
    id: '1',
    date: 'Oct\n04',
    title: 'Weekend Brunch',
    paid: 'Alex Morgan. paid $42.80',
    amount: 42.80,
    emoji: '☕',
    color: '#E0E3E9'
  },
  {
    id: '2',
    date: 'Oct\n03',
    title: 'Groceries',
    paid: 'Alex Morgan. paid $76.35',
    amount: 40.88,
    emoji: '🛒',
    color: '#D5E9DC'
  },
  {
    id: '3',
    date: 'Oct\n03',
    title: 'Household Supplies',
    paid: 'Alex Morgan. paid $54.34',
    amount: 12.34,
    emoji: '🛍️',
    color: '#D5E9DC'
  },
  {
    id: '4',
    date: 'Oct\n03',
    title: 'Pizza',
    paid: 'Alex Morgan. paid $44.99',
    amount: 40.99,
    emoji: '🧴',
    color: '#F1EFC2'
  },
  {
    id: '5',
    date: 'Oct\n01',
    title: 'Gift',
    paid: 'Alex Morgan. paid $20.00',
    amount: 20,
    emoji: '🎁',
    color: '#F7DCD4'
  },
  {
    id: '6',
    date: 'Oct\n01',
    title: 'Grocery',
    paid: 'Alex Morgan. paid $41.57',
    amount: 41.57,
    emoji: '🍜',
    color: '#E0E3E9'
  },
  {
    id: '7',
    date: 'Sep\n30',
    title: 'nike',
    paid: 'Alex Morgan. paid $69.38',
    amount: 22.9,
    emoji: '🍽️',
    color: '#E0E3E9'
  },
  {
    id: '8',
    date: 'Sep\n30',
    title: 'Pet food',
    paid: 'Alex Morgan. paid $67.67',
    amount: 67.67,
    emoji: '🍽️',
    color: '#E0E3E9'
  },
];

export default function GroupsScreen() {

  const renderExpense = (expense: Expense) => (
    <View
      key={expense.id}
      style={styles.expenseRow}
    >
      <Text style={styles.date}>{expense.date}</Text>

      <View
        style={[
          styles.expenseIcon,
          { backgroundColor: expense.color },
        ]}
      >
        <Text style={styles.expenseEmoji}>
          {expense.emoji}
        </Text>
      </View>

      <View style={styles.expenseInfo}>
        <Text style={styles.expenseTitle} numberOfLines={1}>
          {expense.title}
        </Text>
        <Text style={styles.expensePaid} numberOfLines={1}>
          {expense.paid}
        </Text>
      </View>

      <View style={styles.amountInfo}>
        <Text style={styles.borrowed}>you borrowed</Text>
        <Text style={styles.amount}>
          ${expense.amount.toFixed(2)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Group header */}
        <View style={styles.header}>
          <View style={styles.headerActions}>
            <View style={styles.roundButton}>
              <Text style={styles.headerButtonText}>‹</Text>
            </View>
            <View style={styles.roundButton}>
              <Text style={styles.headerButtonText}>•••</Text>
            </View>
          </View>

          <Text style={styles.groupTitle}>
            Institute of technology{'\n'} 16 Ave NW
          </Text>

          <View style={styles.headerChips}>
            <View
              style={[styles.chip, styles.dateChip]}
            >
              <Text style={styles.chipText}>
                + Add settle up date
              </Text>
            </View>

            <View style={styles.chip}>
              <Text style={styles.chipText}>♙  4 people</Text>
            </View>
          </View>
        </View>

        {/* Balance summary */}
        <View style={styles.main}>
          <Text style={styles.balanceText}>
            You owe Alex Morgan.{' '}
            <Text style={styles.orange}>$184.50</Text>
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.actions}
          >
            <View
              style={styles.settleButton}
            >
              <Text style={styles.settleText}>
                Settle up
              </Text>
            </View>

            <View
              style={styles.outlineButton}
            >
              <Text style={styles.outlineText}>
                ◆ Convert to USD
              </Text>
            </View>

            <View
              style={styles.outlineButton}
            >
              <Text style={styles.outlineText}>
                ◆ Charts
              </Text>
            </View>
          </ScrollView>

          {/* October expenses */}
          <Text style={styles.sectionTitle}>
            October 2026
          </Text>

          {initialExpenses
            .filter(
              (expense) =>
                expense.date.startsWith('Oct') ||
                expense.date === 'Today'
            )
            .map(renderExpense)}

          {/* September expenses */}
          <Text style={styles.sectionTitle}>
            September 2026
          </Text>

          {initialExpenses
            .filter((expense) =>
              expense.date.startsWith('Sep')
            )
            .map(renderExpense)}
        </View>
      </ScrollView>

      {/* Add expense button */}
      <View
        style={styles.addButton}
      >
        <Text style={styles.addButtonSymbol}>＋</Text>
        <Text style={styles.addButtonText}>
          Add expense
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202223'
  },
  scroll: {
    flex: 1
  },
  content: {
    paddingBottom: 110
  },
  header: {
    backgroundColor: '#34302C',
    paddingHorizontal: 22,
    paddingTop: 15,
    paddingBottom: 22
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32
  },
  roundButton: {
    width: 43,
    height: 43,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#68727A',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#293137'
  },
  headerButtonText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '600'
  },
  groupTitle: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: '800',
    lineHeight: 42,
    marginBottom: 18
  },
  headerChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#777C80',
    backgroundColor: '#302C28'
  },
  dateChip: {
    borderColor: '#20B99A'
  },
  chipText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600'
  },
  main: {
    paddingHorizontal: 18,
    paddingTop: 27
  },
  balanceText: {
    color: '#FFFFFF',
    fontSize: 17,
    marginBottom: 25
  },
  orange: {
    color: '#FF681F'
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    paddingRight: 10,
    marginBottom: 24
  },
  settleButton: {
    backgroundColor: '#F45B00',
    borderRadius: 28,
    paddingHorizontal: 17,
    paddingVertical: 11
  },
  settleText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700'
  },
  outlineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4CAD0',
    borderRadius: 26,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  outlineText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600'
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 19,
    marginBottom: 10
  },
  expenseRow: {
    minHeight: 67,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 9
  },
  date: {
    color: '#B8C1CB',
    fontSize: 12,
    width: 33
  },
  expenseIcon: {
    width: 46,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  expenseEmoji: {
    fontSize: 25
  },
  expenseInfo: {
    flex: 1,
    minWidth: 0,
    gap: 5
  },
  expenseTitle: {
    color: '#FFFFFF',
    fontSize: 15
  },
  expensePaid: {
    color: '#B8C1CB',
    fontSize: 11
  },
  amountInfo: {
    alignItems: 'flex-end',
    gap: 4
  },
  borrowed: {
    color: '#FF681F',
    fontSize: 10
  },
  amount: {
    color: '#FF681F',
    fontSize: 15
  },
  addButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    backgroundColor: '#18A88A',
    paddingHorizontal: 19,
    paddingVertical: 14,
    borderRadius: 32,
    elevation: 6
  },
  addButtonSymbol: {
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 25
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700'
  },
});