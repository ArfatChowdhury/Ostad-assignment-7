import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../Contex/UserContext'


const FavoriteScreen = () => {
    const { favorite = [], removeFav } = useContext(UserContext) || {}
    return (
        <View style={styles.container}>
            { favorite.length === 0 ? (
                <View style={styles.emptyWrap}>
                    <Text style={styles.emptyTitle}>No favorites yet</Text>
                    <Text style={styles.emptyText}>Add some users from the Home tab.</Text>
                </View>
            ) : (
                <FlatList
                    data={favorite}
                    keyExtractor={(item) => String(item.id)}
                    contentContainerStyle={styles.listContent}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.name}>{item.name}</Text>
                            {!!item.email && <Text style={styles.email}>{item.email}</Text>}
                            <TouchableOpacity style={styles.removeButton} onPress={()=>removeFav(item.id)}>
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </View>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    listContent: {
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    emptyWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111'
    },
    emptyText: {
        marginTop: 6,
        color: '#666',
        textAlign: 'center'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        color: '#111'
    },
    email: {
        marginTop: 6,
        color: '#333'
    },
    removeButton: {
        marginTop: 12,
        alignSelf: 'flex-start',
        backgroundColor: '#ff3b30',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8
    },
    removeButtonText: {
        color: '#fff',
        fontWeight: '600'
    }
})