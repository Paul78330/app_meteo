const appColor = '#B5C393'

export default {
    color: appColor,
    container: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
        color: "red"
    },
    button: {
        backgroundColor: appColor,
        color: '#FFFFFF'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 18,
        color: 'black'
    },
    header: {
        backgroundColor: appColor
    },
    headerTitle: {
        color: '#FFF'
    },
    tabs: {
        backgroundColor: '#92ACC1'
    },
    background: {
        flex: 1,
        resizeMode: 'cover', // ou 'stretch' si vous souhaitez étirer l'image pour qu'elle remplisse l'écran
    }
}