import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>

      <Text style={styles.topHeading}>FlatCard</Text>

      <View style={styles.container}>
            <View style={[styles.card,styles.card1]}>
                <Text>Card 1</Text>
            </View>

            <View style={[styles.card,styles.card2]}>
                <Text>Card 1</Text>
            </View>

            <View style={[styles.card,styles.card3]}>
                <Text>Card 3</Text>
            </View>

            <View style={[styles.card,styles.card4]}>
                <Text>Card 4</Text>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    topHeading:{
        textAlign:"center",
        marginVertical:10,
        fontSize:24,
        fontWeight:"bold"
    },
    container:{
        // flex:1,
        flexDirection:"row",
        alignItems:"center",
        padding:8,
        margin:8,
        gap:10,
    },
    card:{
        flex:1,
        height:100,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",

    },
    card1:{
        backgroundColor:"red",
    },
    card2:{
        backgroundColor:"blue",
    },
    card3:{
        backgroundColor:"green",
    },
    card4:{
        backgroundColor:"black"
    }

})