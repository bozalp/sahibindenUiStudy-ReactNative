import { View, Text, StyleSheet } from 'react-native';

const InfoTableRow = ({ title, value, textColor }) => {
    return (
        <View>
            <View style={styles.info_table}>
                <Text style={{ color: "white" }}>
                    {title}
                </Text>
                <Text style={{ color: textColor }}>
                    {value}
                </Text>
            </View>
            <View style={styles.seperate_line} />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        info_table:
        {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        seperate_line:
        {
            width: '100%',
            height: 1,
            backgroundColor: '#333',
            marginTop: 10,
            marginBottom: 10,
        },
    }
)

export default InfoTableRow;