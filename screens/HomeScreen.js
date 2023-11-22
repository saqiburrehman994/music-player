import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Pressable, FlatList } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ArtistCard from "../components/ArtistCard";
import RecentlyPlayedCard from "../components/RecentlyPlayedCard";
const HomeScreen = () => {
    //const [userProfile, setUserProfile] = useState(null);
    //const[recentlyPlayed,setRecentlyPlayed]=useState([]);
    //const [topArtists, setTopArtists] = useState([]);
    // const getProfile = async () => {
    //     const accessToken = await AsyncStorage.getItem("token");
    //     try{
    //         const response = await fetch("https://api.spotify.com/v1/me", {
    //             headers: {
    //                 Authorization: `Bearer ${accessToken}`,
    //             },
    //         });
    //         const data = await response.json();
    //         setUserProfile(data);
    //         return data;
    //     }catch(err){
    //         console.log(err.message)
    //     }
    //     useEffect(()=>{
    //         getProfile();
    //     },[])
    //     console.log(userProfile)
    // }
    // const getRecentlyPlayedSongs = async () => {
    //     const accessToken = await AsyncStorage.getItem("token");
    //     try {
    //       const response = await axios({
    //         method: "GET",
    //         url: "https://api.spotify.com/v1/me/player/recently-played?limit=4",
    //         headers: {
    //           Authorization: `Bearer ${accessToken}`,
    //         },
    //       });
    //       const tracks = response.data.items;
    //       setRecentlyPlayed(tracks);
    //     } catch (err) {
    //       console.log(err.message);
    //     }
    //   };
    //   useEffect(() => {
    //     getRecentlyPlayedSongs();
    //   }, []);
    // useEffect(() => {
    //     const getTopItems = async () => {
    //         try {
    //             const accessToken = await AsyncStorage.getItem("token");
    //             if (!accessToken) {
    //                 console.log("Access token not found");
    //                 return;
    //             }
    //             const type = "artists";
    //             const response = await axios.get(
    //                 `https://api.spotify.com/v1/me/top/${type}`,
    //                 {
    //                     headers: {
    //                         Authorization: `Bearer ${accessToken}`,
    //                     },
    //                 }
    //             );
    //             setTopArtists(response.data.items);
    //         } catch (err) {
    //             console.log(err.message);
    //         }
    //     };

    //     getTopItems();
    // }, []);
    //console.log(recentlyplayed);
    const hardcodedTopArtists = [
        {
            id: '1',
            name: 'The Beatles',
            images: [{ url: 'https://i.pravatar.cc/110' }]
        },
        {
            id: '2',
            name: 'Queen',
            images: [{ url: 'https://i.pravatar.cc/111' }]
        },
        {
            id: '3',
            name: 'Michael Jackson',
            images: [{ url: 'https://i.pravatar.cc/112' }]
        },
        {
            id: '4',
            name: 'Bob Marley',
            images: [{ url: 'https://i.pravatar.cc/113' }]
        },
    ];
    const hardcodedRecentlyPlayed = [
        {
            track: {
                album: {
                    images: [{ url: 'https://i.pravatar.cc/108' }]
                },
                name: 'Smells Like Teen Spirit - Nirvana (1991)'
            }
        },
        {
            track: {
                album: {
                    images: [{ url: 'https://i.pravatar.cc/102' }]
                },
                name: 'Billie Jean - Michael Jackson (1982)'
            }
        },
        {
            track: {
                album: {
                    images: [{ url: 'https://i.pravatar.cc/103' }]
                },
                name: 'Like A Rolling Stone - Bob Dylan (1967)'
            }
        },
        {
            track: {
                album: {
                    images: [{ url: 'https://i.pravatar.cc/104' }]
                },
                name: 'One - U2 (1992)'
            }
        },
    ];
    const renderItem = ({ item }) => {
        return (
            <Pressable
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 10,
                    marginVertical: 8,
                    backgroundColor: "#282828",
                    borderRadius: 4,
                    elevation: 3,
                }}
            >
                <Image
                    style={{ height: 55, width: 55 }}
                    source={{ uri: item.track.album.images[0].url }}
                />
                <View
                    style={{ flex: 1, marginHorizontal: 8, justifyContent: "center" }}
                >
                    <Text
                        numberOfLines={2}
                        style={{ fontSize: 13, fontWeight: "bold", color: "white" }}
                    >
                        {item.track.name}
                    </Text>
                </View>
            </Pressable>
        );
    };
    const GreetingMessage = () => {
        const date = new Date();
        const hour = date.getHours();
        if (hour < 12) {
            return "Good Morning";
        } else if (hour >= 12 && hour <= 17) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };
    return (
        <LinearGradient colors={["#030406", "#131624"]} style={{ flex: 1 }}>
            <ScrollView style={{ marginTop: 50 }}>
                <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                resizeMode: "cover",
                            }} source={{
                                uri: 'https://www.w3schools.com/w3images/avatar2.png'
                                //UserProfile.images[0].url
                            }}
                        />
                        <Text
                            style={{
                                marginLeft: 10,
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "white",
                            }}>{GreetingMessage()}</Text>
                    </View>
                    <MaterialCommunityIcons name="lightning-bolt-outline" size={24} color="white" />
                </View>
                <View style={{
                    marginHorizontal: 12,
                    marginVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                }}>
                    <Pressable style={{ backgroundColor: "#282828", padding: 10, borderRadius: 30 }}>
                        <Text style={{ fontSize: 15, color: 'white' }}>Music</Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor: "#282828", padding: 10, borderRadius: 30 }}>
                        <Text style={{ fontSize: 15, color: 'white' }}>Podcasts & Shows</Text>
                    </Pressable>
                </View>
                <View style={{ height: 10 }} />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Pressable
                        style={{
                            marginBottom: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            flex: 1,
                            marginHorizontal: 10,
                            marginVertical: 8,
                            backgroundColor: "#202020",
                            borderRadius: 4,
                            elevation: 3,
                        }}
                    >
                        <LinearGradient colors={["#3300f6", "#ffffff"]}>
                            <Pressable style={{
                                width: 55,
                                height: 55,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <AntDesign name="heart" size={24} color="white" />
                            </Pressable>
                        </LinearGradient>
                        <Text style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>
                            Liked Songs
                        </Text>
                    </Pressable>
                    <View
                        style={{
                            marginBottom: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            flex: 1,
                            marginHorizontal: 10,
                            marginVertical: 8,
                            backgroundColor: "#202020",
                            borderRadius: 4,
                            elevation: 3,
                        }}
                    >
                        <Image
                            style={{ width: 55, height: 55 }}
                            source={{
                                uri: "https://i.pravatar.cc/101"
                            }} />
                        <View>
                            <Text
                                style={{ color: "white", fontSize: 13, fontWeight: "bold" }}
                            >Hiphop Tamhiza</Text>
                        </View>
                    </View>
                </View>
                <FlatList
                    data={hardcodedRecentlyPlayed}
                    renderItem={renderItem}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                />

                <Text
                    style={{
                        color: "white",
                        fontSize: 19,
                        fontWeight: "bold",
                        marginHorizontal: 10,
                        marginTop: 10,
                    }}
                >
                    Your Top Artists
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {hardcodedTopArtists.map((item, index) => (
                        <ArtistCard item={item} key={index} />
                    ))}
                </ScrollView>
                <View style={{ height: 10 }} />
                <Text
                    style={{
                        color: "white",
                        fontSize: 19,
                        fontWeight: "bold",
                        marginHorizontal: 10,
                        marginTop: 10,
                    }}
                >
                    Recently Played
                </Text>
                <FlatList
                    data={hardcodedRecentlyPlayed}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <RecentlyPlayedCard item={item} key={index} />
                    )}
                />
            </ScrollView>
        </LinearGradient>
    )
}
export default HomeScreen
const styles = StyleSheet.create({})