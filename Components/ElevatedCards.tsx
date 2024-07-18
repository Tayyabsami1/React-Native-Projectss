import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.topHeading} >ElevatedCards</Text>

            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.cardText}>Great</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.cardText}>Now</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.cardText}>You</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.cardText}>can</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.cardText}>Scroll</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.cardText}>Hehe</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.cardText}>Enjoy</Text>
                </View>
            </ScrollView>
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
        padding:8,
        margin:8,
        // flex:1,
    },
    card:{
        flex:1,
        height:100,
        width:100,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"lightgreen",
        margin:8 
    },
    cardText:{
        color:"black"
    },
    elevatedCard:{
        elevation:4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:"grey"
    }
})