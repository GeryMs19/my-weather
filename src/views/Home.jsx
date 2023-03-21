import { Image } from 'react-native';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
  const toDetail = () => {
    navigation.navigate('Detail')
  };

  const toProfile = () => {
    navigation.navigate('Profile')
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/background.png')} style={styles.image}>
        <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 66}}>
         
          <View styles={{flexDirection: 'row', flex: 1}}>
            <Text style={{color: '#FFF', fontSize: 24, textAlign: 'center'}}>BANDAR LAMPUNG</Text>
          </View>

          <View style={{marginTop: 80, alignItems: 'center'}}>
            <Text style={{color: '#FFF', fontSize: 28, textAlign: 'center', fontWeight: 'bold'}}>RANLY</Text>
            <Image source={require('../../assets/rainy.png')} style={{ width: 200, height: 200}} resizeMode='contain'/>
            <Text style={{color: '#FFF', fontSize: 58, textAlign: 'center', fontWeight: 'bold'}}>23</Text>
            <Text style={{color: '#FFF', fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>WEDNESDAY, 21 MARET 2023 || 10.00</Text>
          </View>

          <View style={{marginTop: 150, justifyContent: 'center', flexDirection: 'row'}}>
            <TouchableOpacity style={styles.button} onPress={toProfile}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>PROFILE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toDetail}>
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
    marginHorizontal: 8
  },
});
