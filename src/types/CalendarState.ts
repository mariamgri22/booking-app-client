export interface CalendarState {
    availableHours: string[][];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    selectedHour: string | null;
    selectedDay: string | null;
    currentDay: string;
  }