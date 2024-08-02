import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Linking, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import images from '../../assets/images';
import icons from '../../assets/icons';
import components from '../../components';

export default function DrawerContent(props) {

    return (
        <ScrollView style={{ width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,1)" }}>
            <ImageBackground
                source={images.drawerBackground}
                resizeMode="repeat"
                style={styles.backgroundImage}>
                <View style={styles.overlay}>
                    <View style={styles.drawerHeader}>
                        <ImageBackground
                            source={images.drawerHeaderBg}
                            resizeMode="cover"
                            style={styles.drawerHeaderBg}>
                            <View style={styles.headerWrapper}>
                                <View style={styles.headerContent}>
                                    <View style={styles.profileContainer}>
                                        <View style={styles.profileImageWrapper}>
                                            <View style={styles.profileImageContainer}>
                                                <Image source={images.profile} style={styles.profileImage} />
                                            </View>
                                            <View style={styles.onlineIndicator} />
                                        </View>
                                        <View style={styles.profileDetailsContainer}>
                                            <View style={styles.profileNameContainer}>
                                                <Text style={styles.profileName}>Wasaam Qazi</Text>
                                                <icons.editPencil style={styles.profileEditIcon} width={6} height={6} />
                                            </View>
                                            <Text style={styles.joinDate}>Joined May 25 2022</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
                        <components.DrawerItem
                            label="MetaMask"
                            bottom="connected"
                            IconComponent={icons.metaMask}
                        // onPress={() => Linking.openURL('https://mywebsite.com/home')}
                        />

                        <components.DrawerItem
                            label="Home"
                            IconComponent={icons.home}
                            focused
                            onPress={() => props.navigation.navigate("Home")}
                        />

                        <components.DrawerItem
                            label="My Commics"
                            IconComponent={icons.book}
                            onPress={() => Linking.openURL('https://mywebsite.com/home')}
                        />

                        <components.DrawerItem
                            label="My Tanents"
                            IconComponent={icons.handShake}
                            onPress={() => Linking.openURL('https://mywebsite.com/home')}
                        />

                        <components.DrawerItem
                            label="Svet Rewards"
                            top="Svet 10000"
                            IconComponent={icons.wealth}
                            onPress={() => Linking.openURL('https://mywebsite.com/home')}
                        />

                        <components.DrawerItem
                            label="Archived Book"
                            IconComponent={icons.reading}
                            onPress={() => Linking.openURL('https://mywebsite.com/home')}
                        />

                        <components.DrawerItem
                            label="Wish List"
                            IconComponent={icons.list}
                            onPress={() => Linking.openURL('https://mywebsite.com/home')}
                        />

                        <components.DrawerItem
                            label="Stats"
                            IconComponent={icons.stats}
                            onPress={() => Linking.openURL('https://mywebsite.com/home')}
                        />

                        <components.DrawerItem
                            label="About"
                            onPress={() => Linking.openURL('https://mywebsite.com/home')}
                        />
                    </DrawerContentScrollView>



                </View>




            </ImageBackground>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        margin: 0,

    },
    overlay: {
        flex: 1,
        backgroundColor: '#021A28',
        opacity: 0.8,
        height: '100%',
        // paddingBottom: 90
    },
    drawerHeader: {
        width: '100%',
        height: 130,
        overflow: 'hidden',
    },
    drawerHeaderBg: {
        width: '100%',
        height: '100%',
        transform: [{ scale: 2.7 }], // Apply zoom
        position: 'absolute',
        top: 50,
        left: -10,
    },
    drawerContent: {
        flex: 1,
    },
    headerWrapper: {
        marginLeft: 91,
        marginTop: 22,
        width: "37.5%",
        height: "37.5%",
        justifyContent: "center",
        alignItems: "center"
    },
    headerContent: {
        height: "40%",
        width: "80%",
    },
    profileContainer: {
        flexDirection: "row"
    },
    profileImageWrapper: {
        flexDirection: "row"
    },
    profileImageContainer: {
        borderWidth: 1,
        borderColor: "#fff",
        height: 25,
        width: 25,
        borderRadius: 50,
        overflow: "hidden"
    },
    profileImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",

    },
    onlineIndicator: {
        backgroundColor: "#13E90F",
        width: 5,
        height: 5,
        borderRadius: 20,
        marginLeft: -9
    },
    profileDetailsContainer: {
        marginTop: -3,
        marginLeft: 7,
        height: "100%",
        justifyContent: "flex-end"
    },
    profileNameContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 1
    },
    profileName: {
        fontSize: 5,
        color: "#fff",
        fontFamily: "Sunflower-Bold",
    },
    profileEditIcon: {

    },
    joinDate: {
        marginTop: 1,
        fontSize: 4,
        color: "#DFDADA",
        fontFamily: "Sunflower-Medium"
    },
});