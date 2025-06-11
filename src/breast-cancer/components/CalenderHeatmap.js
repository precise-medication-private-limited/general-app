import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import moment from "moment";
import Swiper from "react-native-swiper";
import { FontFamily, Color } from "../../../utils/GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const getColor = (painLevel) => {
  switch (painLevel) {
    case 1:
      return "#66FF33";
    case 2:
      return "#99FF33";
    case 3:
      return "#FFCC00";
    case 4:
      return "#FF9900";
    case 5:
      return "#FF3300";
    default:
      return "#FFF";
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    return token ? token : null;
  } catch (error) {
    console.error("Error retrieving token", error);
    return null;
  }
};

const CalendarHeatmap = () => {
  const [heatmapData, setHeatmapData] = useState({
    "2024-01": {
      "2024-01-01": 1,
      "2024-01-02": 2,
      "2024-01-03": 3,
      "2024-01-04": 4,
      "2024-01-05": 5,
      "2024-01-06": 1,
      "2024-01-07": 2,
      "2024-01-08": 3,
      "2024-01-09": 4,
      "2024-01-10": 5,
      "2024-01-11": 1,
      "2024-01-12": 2,
      "2024-01-13": 3,
      "2024-01-14": 4,
      "2024-01-15": 5,
      "2024-01-16": 1,
      "2024-01-17": 2,
      "2024-01-18": 3,
      "2024-01-19": 4,
      "2024-01-20": 5,
      "2024-01-21": 1,
      "2024-01-22": 2,
      "2024-01-23": 3,
      "2024-01-24": 4,
      "2024-01-25": 5,
      "2024-01-26": 1,
      "2024-01-27": 2,
      "2024-01-28": 3,
      "2024-01-29": 4,
      "2024-01-30": 5,
      "2024-01-31": 1,
    },
    "2024-02": {},
    "2024-03": {},
    "2024-04": {},
    "2024-05": {},
    "2024-06": {},
    "2024-07": {},
    "2024-08": {},
    "2024-09": {},
    "2024-10": {},
    "2024-11": {},
    "2024-12": {},

  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const year = 2024;

  const fetchHeatmapData = async (monthIndex) => {
    try {
      const token = await getToken();
      const response = await axios.get(
        `${process.env.API_URL_ankan1}/patient/questions/get-daily-entry`,
        {
          params: { month: monthIndex, year },
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data.reduce((acc, entry) => {
        const dateKey = moment(entry.date).format("YYYY-MM-DD");
        acc[dateKey] = entry.painLevel;
        return acc;
      }, {});

      // Only save data if the month has entries
      if (Object.keys(data).length > 0) {
        setHeatmapData((prevData) => ({
          ...prevData,
          [`${year}-${monthIndex < 10 ? `0${monthIndex}` : monthIndex}`]: data,
        }));
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const fetchDataForYear = async () => {
        setLoading(true);
        await Promise.all(
          Array.from({ length: 12 }, (_, index) => fetchHeatmapData(index + 1))
        );
        setLoading(false);
      };
      fetchDataForYear();
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF7EA7" />
      </View>
    );
  }

  if (error) {
    return (
      <Text style={{ fontFamily: FontFamily.Montserrat_SemiBold }}>
        Error fetching data: {error.message}
      </Text>
    );
  }

  // Filter months that have data in heatmapData
  const monthsWithData = Object.keys(heatmapData).map((key) => {
    const monthIndex = parseInt(key.split("-")[1], 10) - 1;
    return { monthName: moment.months()[monthIndex], monthIndex };
  });

  return (
    <View style={styles.container}>
      <Swiper showsPagination={false} loop={false}>
        {monthsWithData.map(({ monthName, monthIndex }) => {
          const monthKey = `${year}-${monthIndex + 1 < 10 ? `0${monthIndex + 1}` : monthIndex + 1
            }`;
          const startDate = moment(`${year}-${monthIndex + 1}-01`);
          const dates = [];
          while (startDate.month() === monthIndex) {
            dates.push(startDate.clone());
            startDate.add(1, "day");
          }

          const monthData = heatmapData[monthKey] || {};

          return (
            <View key={monthIndex} style={styles.monthContainer}>
              <View style={styles.monthHeader}>
                <Text style={styles.monthTitle}>
                  {monthName} ({year})
                </Text>
              </View>
              <View style={styles.monthBody}>
                <View style={styles.calendar}>
                  {dates.map((date, dateIndex) => (
                    <View
                      key={dateIndex}
                      style={[
                        styles.day,
                        {
                          backgroundColor: getColor(
                            monthData[date.format("YYYY-MM-DD")] || 0
                          ),
                        },
                      ]}
                    >
                      <Text style={styles.dayText}>{date.date()}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: height * 0.29,
    borderRadius: 3,
    backgroundColor: Color.patientNotificationBoxColor,
  },
  loaderContainer: {
    height: height * 0.29,
    justifyContent: "center",
    alignItems: "center",
  },
  monthContainer: {
    height: height * 0.29,
  },
  monthHeader: { marginTop: 15 },
  monthBody: { alignItems: "center", justifyContent: "center", marginLeft: 27 },
  monthTitle: {
    fontFamily: FontFamily.Montserrat_Regular,
    fontSize: 17,
    marginBottom: 12,
    textAlign: "center",
    width: "100%",
  },
  calendar: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: width * 0.9,
  },
  day: {
    width: width / 10 - 2.3,
    height: width / 10 - 2,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  dayText: {
    fontSize: 12,
    fontFamily: FontFamily.Montserrat_Regular,
  },
});

export default CalendarHeatmap;
