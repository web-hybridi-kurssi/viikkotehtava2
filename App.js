import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react'
import {BackHandler, Modal,Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)

  const showModal = () => {
    setModalVisible(!modalVisible)
  }

  const handleBackPress = () => {
    if(modalVisible){
      setModalVisible(false)
      return true
    }
    return false
  }

  useEffect(() => {
    if(modalVisible){
      BackHandler.addEventListener('hardwareBackPress', handleBackPress)
    } else {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
    }
    
    return () => {
      
    }
  }, [modalVisible])

  return (
    <View style={styles.container}>
        <Pressable onPress={showModal}>
          <Text>Show modal message</Text>
        </Pressable>
        <Modal visible={modalVisible}
        animationType='slide'
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
          <View style={styles.modalView}>
          <Text style={styles.text1}>This is modal...</Text>
          <Pressable onPress={showModal}>
            <Text style={styles.text2}>Close</Text>
          </Pressable>
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    position: 'relative',
    top: 150,
    left: 0,
    paddingLeft: 0,
    marginLeft: 0,
    margin: 20,
    backgroundColor: '#f8f8ff',
    
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    width: '100%'
  },
  text1:{
    paddingBottom: 40,
    paddingTop: 20
  },
  text2:{
    fontWeight: 'bold',
    paddingBottom: 10
  }
});
