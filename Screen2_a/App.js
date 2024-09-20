import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import people_icon from './assets/people_icon.png'
import eye_icon from './assets/eye_icon.png'
import padlock_icon from './assets/padlock_icon.png'
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient
      colors={['#FBCB00', '#BF9A00']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>LOGIN</Text>
        </View>
        <View style={styles.loginInfo}>
          <View style={styles.input}>
            <Image source={people_icon} style={styles.icon}/>
            <TextInput value='Name' placeholder='Name'/>
          </View>
          <View style={styles.input}>
            <Image source={padlock_icon} style={styles.icon}/>
            <TextInput value='Password' placeholder='Password'/>
            <Image source={eye_icon} style={styles.eyeIcon}/>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.heading2}>CREATE ACCOUNT</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    padding:20,
  },
  heading:{
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 35,
    textAlign: 'left',
    marginBottom: 50
  },
  loginInfo:{
    flexDirection:'column',
    margin: 20,
  },
  input:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 340,
    height: 70
  },
  icon:{
    width: 50,
    height: 50,
    marginRight: 10
  },
  eyeIcon:{
    width: 50,
    height: 50,
    marginLeft: 150
  },
  button:{
    width: 340,
    height: 50,
    backgroundColor: '#000',
    justifyContent:'center',
    marginBottom: 30
  },
  buttonText:{
    color: '#fff',
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 23
  },
  heading2:{
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23,
    textAlign: 'center',
    marginBottom: 50
  },
});
