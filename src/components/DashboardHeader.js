import {
  Heading,
  Center,
  Pressable,
  IconButton,
  Select,
  CheckIcon,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { useAuth0 } from "react-native-auth0";
import { useNavigation } from "@react-navigation/native";

function DashboardHeader() {
  const { user } = useAuth0();
  const navigation = useNavigation();
  const [selectedPortfolio, setSelectedPortfolio] = useState("");
  return (
    <SafeAreaView alignSelf="center" style={styles.container}>
      <View style={[styles.firstRowContainer, styles.row]}>
        <Pressable onPress={() => navigation.navigate("Settings")}>
          <Center
            _text={{
              fontSize: "md",
              fontWeight: "medium",
            }}
            style={styles.accountButton}
          >
            {user.email.substring(0, 2).toUpperCase()}
          </Center>
        </Pressable>
        <View style={[styles.row, styles.actionContainer]}>
          <View style={styles.actionButtonContainer}>
            <IconButton
              borderRadius="full"
              colorScheme="text"
              variant="outline"
              size="sm"
              _icon={{
                as: AntDesign,
                name: "plus",
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.secondRowContainer}>
        <Select
          selectedValue={selectedPortfolio}
          minWidth="200"
          accessibilityLabel="Choose Portfolio"
          placeholder="Choose Portfolio"
          _selectedItem={{
            bg: "teal.400",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setSelectedPortfolio(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </View>
    </SafeAreaView>
  );
}

export default DashboardHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
  },
  firstRowContainer: {
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
  },
  actionContainer: {
    paddingRight: 10,
  },
  actionButtonContainer: {
    paddingLeft: 10,
  },
  secondRowContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
  accountButton: {
    backgroundColor: "#CDC8FF",
    padding: 5,
    width: 40,
    height: 40,
    marginLeft: 10,
    borderRadius: 20,
  },
});
