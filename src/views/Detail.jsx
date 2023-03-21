import { Image } from 'react-native';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function Detail({ navigation }) {
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
                <Text style={{color: '#FFF', fontSize: 24, textAlign: 'center'}}>7 DAYS</Text>
            </View>
          </View>

            {/* List cuaca */}
          <View style={{marginBottom: 5, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 22, alignItems: 'center'}}>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22, textAlign: 'left'}}>Monday</Text>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center'}}>
                <Image source={require('../../assets/jenis/panas.png')} style={{ width: 80, height: 80}} resizeMode='contain'/>
                <Text style={{color: '#fff', fontSize: 18}}>Sunny</Text>
            </View>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22}}>+31 +51</Text>
            </View>
          </View>

          <View style={{marginBottom: 5, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 22, alignItems: 'center'}}>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22, textAlign: 'left'}}>Tuesday</Text>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center'}}>
                <Image source={require('../../assets/jenis/hujan-petir.png')} style={{ width: 80, height: 80}} resizeMode='contain'/>
                <Text style={{color: '#fff', fontSize: 18}}>Thunder</Text>
            </View>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22}}>+31 +51</Text>
            </View>
          </View>

          <View style={{marginBottom: 5, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 22, alignItems: 'center'}}>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22, textAlign: 'left'}}>Wednesday</Text>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center'}}>
                <Image source={require('../../assets/jenis/cerah.png')} style={{ width: 80, height: 80}} resizeMode='contain'/>
                <Text style={{color: '#fff', fontSize: 18}}>Sunny</Text>
            </View>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22}}>+31 +51</Text>
            </View>
          </View>

          <View style={{marginBottom: 5, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 22, alignItems: 'center'}}>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22, textAlign: 'left'}}>Thursday</Text>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center'}}>
                <Image source={require('../../assets/jenis/mendung.png')} style={{ width: 80, height: 80}} resizeMode='contain'/>
                <Text style={{color: '#fff', fontSize: 18}}>Cloudy</Text>
            </View>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22}}>+31 +51</Text>
            </View>
          </View>

          <View style={{marginBottom: 5, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 22, alignItems: 'center'}}>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22, textAlign: 'left'}}>Friday</Text>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center'}}>
                <Image source={require('../../assets/jenis/cerah.png')} style={{ width: 80, height: 80}} resizeMode='contain'/>
                <Text style={{color: '#fff', fontSize: 18}}>Sunny</Text>
            </View>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22}}>+31 +51</Text>
            </View>
          </View>

          <View style={{marginBottom: 5, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 22, alignItems: 'center'}}>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22, textAlign: 'left'}}>Saturday</Text>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center'}}>
                <Image source={require('../../assets/jenis/panas.png')} style={{ width: 80, height: 80}} resizeMode='contain'/>
                <Text style={{color: '#fff', fontSize: 18}}>Sunny</Text>
            </View>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22}}>+31 +51</Text>
            </View>
          </View>

          <View style={{marginBottom: 5, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 22, alignItems: 'center'}}>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22, textAlign: 'left'}}>Sunday</Text>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center'}}>
                <Image source={require('../../assets/jenis/cerah.png')} style={{ width: 80, height: 80}} resizeMode='contain'/>
                <Text style={{color: '#fff', fontSize: 18}}>Sunny</Text>
            </View>
            <View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22}}>+31 +51</Text>
            </View>
          </View>
            {/* List cuaca */}


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
