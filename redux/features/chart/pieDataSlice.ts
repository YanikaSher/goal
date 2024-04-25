"use client";
import { IPieChartState } from "@/redux/interfaces";
import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: IPieChartState = {
  labels: ["свободное время"],
  datasets: [
    {
      label: " часов",
      data: [86400000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(100, 102, 255, 0.2)",
        "rgba(200, 157, 64, 0.2)",
        "rgba(193, 33, 255, 0.2)",
        "rgba(20, 100, 224, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(100, 102, 255, 0.2)",
        "rgba(200, 157, 64, 0.2)",
        "rgba(193, 33, 255, 0.2)",
        "rgba(20, 100, 224, 0.2)",
      ],
      borderWidth: 2,
    },
  ],
  gaps: []

};

export const pieChartSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    setupLabels: (state, action: PayloadAction<{labels: string}>) => {
      state.labels.push(action.payload.labels);
    },

    calculateFreeTime: (state, action: PayloadAction<{partOfDay: number}>) => {
      const freeTime = state.datasets[0].data[0];
      const remainingFreeTime = freeTime - action.payload.partOfDay;
      state.datasets[0].data[0] = remainingFreeTime;
      state.datasets[0].data.push(action.payload.partOfDay);
    },
    setupGaps: (state, action: PayloadAction<{gaps: string}>) => {
      state.gaps.push(action.payload);
    }
  },
});

export const { setupLabels, calculateFreeTime, setupGaps } = pieChartSlice.actions;
export const selectChartData = (state: RootState) =>
  state.charts.datasets[0].data;
export const selectChartLabels = (state: RootState) => state.charts.labels;
export const selectChart = (state: RootState) => state.charts;
export default pieChartSlice.reducer;
