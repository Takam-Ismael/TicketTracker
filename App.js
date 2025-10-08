import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import TicketItem from './components/TicketItem';

export default function App() {
  const [tickets, setTickets] = useState([
    {
      id: '1',
      title: 'Login Issue',
      description: 'Unable to login to the application',
      status: 'Created',
      rating: null
    },
    {
      id: '2',
      title: 'Payment Failed',
      description: 'Credit card payment not processing',
      status: 'Under Assistance',
      rating: null
    },
    {
      id: '3',
      title: 'Feature Request',
      description: 'Add dark mode support',
      status: 'Completed',
      rating: 4
    }
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [currentTicket, setCurrentTicket] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Created');

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setStatus('Created');
    setCurrentTicket(null);
  };

  const handleAddTicket = () => {
    if (title.trim() === '') return;

    const newTicket = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      status: status,
      rating: status === 'Completed' ? 0 : null
    };

    setTickets([...tickets, newTicket]);
    setModalVisible(false);
    resetForm();
  };

  const handleEdit = (ticket) => {
    setCurrentTicket(ticket);
    setTitle(ticket.title);
    setDescription(ticket.description);
    setStatus(ticket.status);
    setModalVisible(true);
  };

  const handleUpdateTicket = () => {
    if (title.trim() === '') return;

    const updatedTickets = tickets.map(ticket =>
      ticket.id === currentTicket.id
        ? {
            ...ticket,
            title: title.trim(),
            description: description.trim(),
            status: status,
            rating: status === 'Completed' && ticket.rating === null ? 0 : ticket.rating
          }
        : ticket
    );

    setTickets(updatedTickets);
    setModalVisible(false);
    resetForm();
  };

  const handleDelete = (id) => {
    setTickets(tickets.filter(ticket => ticket.id !== id));
  };

  const handleRate = (id, rating) => {
    setTickets(tickets.map(ticket =>
      ticket.id === id ? { ...ticket, rating } : ticket
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Support Ticket Tracker</Text>

      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TicketItem
            ticket={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onRate={handleRate}
          />
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          resetForm();
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {currentTicket ? 'Edit Ticket' : 'Add New Ticket'}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Ticket Title"
              value={title}
              onChangeText={setTitle}
            />

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={3}
            />

            <Text style={styles.label}>Status:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={status}
                onValueChange={(itemValue) => setStatus(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Created" value="Created" />
                <Picker.Item label="Under Assistance" value="Under Assistance" />
                <Picker.Item label="Completed" value="Completed" />
              </Picker>
            </View>

            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setModalVisible(false);
                  resetForm();
                }}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </Pressable>

              <Pressable
                style={[styles.modalButton, styles.saveButton]}
                onPress={currentTicket ? handleUpdateTicket : handleAddTicket}
              >
                <Text style={styles.modalButtonText}>
                  {currentTicket ? 'Update' : 'Save'}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable
        style={styles.addButton}
        onPress={() => {
          resetForm();
          setModalVisible(true);
        }}
      >
        <Text style={styles.addButtonText}>Add New Ticket</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  cancelButton: {
    backgroundColor: '#8E8E93',
  },
  saveButton: {
    backgroundColor: '#007AFF',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});