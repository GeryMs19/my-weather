import { Image } from 'react-native';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

export default function Profile({navigation}) {
    const toHome = () => {
        navigation.navigate('Home')
    };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/background.png')} style={styles.image}>
        <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 66}}>
         
        <View style={{flexDirection: 'row', marginBottom: 50}}>
            <TouchableOpacity onPress={toHome} style={{marginLeft: 18}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Kembali</Text>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <Text style={{color: '#FFF', fontSize: 24, textAlign: 'center'}}>PROFIL</Text>
            </View>
          </View>

          <View style={{marginTop: 30, marginBottom: 40,alignItems: 'center'}}>
            <Image source={require('../../assets/gerry.png')} style={{ width: 200, height: 200}} resizeMode='contain'/>
          </View>

          <View style={{marginTop: 20, paddingHorizontal: 40}}>
            <Text style={{color: '#FFF', fontSize: 24}}>Nama Lengkap:</Text>
            <Text style={{color: '#FFF', fontSize: 22}}>--------------</Text>
          </View>

          <View style={{marginTop: 20, paddingHorizontal: 40}}>
            <Text style={{color: '#FFF', fontSize: 24}}>NIM:</Text>
            <Text style={{color: '#FFF', fontSize: 22}}>---------------</Text>
          </View>

          <View style={{marginTop: 20, paddingHorizontal: 40}}>
            <Text style={{color: '#FFF', fontSize: 24}}>Kelas:</Text>
            <Text style={{color: '#FFF', fontSize: 22}}>------------</Text>
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
