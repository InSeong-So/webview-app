import { View, Text, Button } from 'react-native';

const Settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="스케쥴 알림 예약" />
    </View>
  );
};

export default Settings;
