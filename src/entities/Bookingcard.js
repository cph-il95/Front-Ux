export class BookingCard {
  // Opret en ny instans af BookingCard med ønskede data
  constructor(selectedDate, selectedRoom) {
    // Nu kan du bruge instansen til at få adgang til de valgte data
    this.selectedDate = selectedDate; // Udskriver eksempelvis'2023-12-31'
    this.selectedRoom = selectedRoom; // Udskriver  eksempelvis'Room 101'
  }
}
