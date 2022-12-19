import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icons from '@expo/vector-icons/FontAwesome5';

const CategoryLine = ({ iconBackground, iconName, title, subTitle }) => {
    function getSubTitle(subTitle) {
        if (subTitle.length > 40)
            return subTitle.slice(0, 40) + "..."
        else
            return subTitle;
    }
    return (
        <View>
            <TouchableOpacity style={styles.line} activeOpacity={0.7}>
                <View style={[styles.iconBg, { backgroundColor: iconBackground }]}>
                    <Icons name={iconName} size={20} color="#000" />
                </View>
                <View>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.subTitle}>
                        {
                            getSubTitle(subTitle)
                        }
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={styles.bottomLine} />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        line:
        {
            width: '100%',
            height: 64,
            flexDirection: 'row',
            backgroundColor: '#000',
            alignItems: 'center',
            padding: 10,
        },
        iconBg:
        {
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10
        },
        bottomLine:
        {
            backgroundColor: '#bfbfbf',
            height: 1,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            right: -60,
            flex: 1,
        },
        title:
        {
            fontSize:16,
            color:'#fff'
        },
        subTitle:
        {
            color: '#bfbfbf',
            fontSize: 12
        }
    }
)

export default CategoryLine;