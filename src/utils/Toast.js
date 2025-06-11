import Toast from 'react-native-root-toast';

// This function can be called directly to show the toast
export function ToastMessage(message) {
    Toast.show(`  ${message}  `, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        backgroundColor: "#fff",
        textColor: "#000",
        hideOnPress: true,
        shadow: true,
        containerStyle: { padding: 5 }
    });
}
