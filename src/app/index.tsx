import React from "react";
import { View, Text, Alert, Pressable, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PLAYLIST, SongItem } from "../constants/musicData";
import { musicStyles } from "../styles/musicStyles";

export default function Index() {
  // 1. Custom Function untuk memunculkan Alert saat lagu ditekan
  const handlePlaySong = (title: string, artist: string) => {
    Alert.alert("Memutar Lagu", `Sedang memutar: ${title} - ${artist}`);
  };

  // 2. Custom Function untuk render item lagu
  const renderSongCard = (song: SongItem) => (
    <Pressable
      key={song.id}
      onPress={() => handlePlaySong(song.title, song.artist)}
      style={musicStyles.card}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <Ionicons name="musical-notes" size={24} color="#1DB954" />
        <View>
          <Text style={musicStyles.songTitle}>{song.title}</Text>
          <Text style={musicStyles.artistName}>
            {song.artist} • {song.genre ?? "General"}
          </Text>
        </View>
      </View>
      <Text style={musicStyles.duration}>{song.duration}</Text>
    </Pressable>
  );

  return (
    <View style={musicStyles.container}>
      {/* Header (Mengkombinasikan External Style + Inline Style) */}
      <Text style={[musicStyles.headerTitle, { color: "#1DB954" }]}>
        My Music Player 🎧
      </Text>

      {/* Looping menggunakan FlatList */}
      <FlatList
        data={PLAYLIST}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderSongCard(item)}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}