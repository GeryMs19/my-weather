import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
  const onPressHandler = () => {
    console.log('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={require('./assets/background.png')} style={styles.image}>
        <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 46}}>
         
          <View styles={{flexDirection: 'row', flex: 1}}>
            <Text style={{color: '#FFF', fontSize: 24, textAlign: 'center'}}>BANDAR LAMPUNG</Text>
          </View>

          <View style={{marginTop: 60, alignItems: 'center'}}>
            <Text style={{color: '#FFF', fontSize: 28, textAlign: 'center', fontWeight: 'bold'}}>RANLY</Text>
            <Image source={require('./assets/rainy.png')} style={{ width: 200, height: 200}} resizeMode='contain'/>
            <Text style={{color: '#FFF', fontSize: 48, textAlign: 'center', fontWeight: 'bold'}}>23</Text>
            <Text style={{color: '#FFF', fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>WEDNESDAY, 21 MARET 2023 || 10.00</Text>
          </View>

          <View style={{marginTop: 100, alignItems: 'center'}}>
            <TouchableOpacity style={styles.button} onPress={onPressHandler}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>PROFILE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressHandler}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>SEE DETAIL</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#9B85D0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
