import { Pressable, StyleSheet, Text, View } from 'react-native';

const TicketItem = ({ ticket, onEdit, onDelete, onRate }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Created':
        return '#007AFF';
      case 'Under Assistance':
        return '#FF9500';
      case 'Completed':
        return '#34C759';
      default:
        return '#8E8E93';
    }
  };

  return (
    <View style={styles.ticketContainer}>
      <View style={styles.ticketHeader}>
        <Text style={styles.ticketTitle}>{ticket.title}</Text>
        <View style={styles.actions}>
          <Pressable onPress={() => onEdit(ticket)} style={styles.actionButton}>
            <Text style={styles.actionText}>Edit</Text>
          </Pressable>
          <Pressable onPress={() => onDelete(ticket.id)} style={[styles.actionButton, styles.deleteButton]}>
            <Text style={styles.actionText}>Delete</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.ticketDescription}>{ticket.description}</Text>

      <View style={styles.ticketFooter}>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: getStatusColor(ticket.status) }
          ]}
        >
          <Text style={styles.statusText}>{ticket.status}</Text>
        </View>

        {ticket.status === 'Completed' && (
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingLabel}>Rating: </Text>
            {[1, 2, 3, 4, 5].map((star) => (
              <Pressable
                key={star}
                onPress={() => onRate(ticket.id, star)}
                style={styles.starButton}
              >
                <Text style={[
                  styles.star,
                  star <= (ticket.rating || 0) ? styles.starFilled : styles.starEmpty
                ]}>
                  ★
                </Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ticketContainer: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  ticketTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#007AFF',
    borderRadius: 4,
    marginLeft: 8,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
  actionText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  ticketDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  ticketFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingLabel: {
    fontSize: 12,
    color: '#666',
    marginRight: 4,
  },
  starButton: {
    padding: 2,
  },
  star: {
    fontSize: 16,
  },
  starFilled: {
    color: '#FFD700',
  },
  starEmpty: {
    color: '#E5E5E5',
  },
});

export default TicketItem;