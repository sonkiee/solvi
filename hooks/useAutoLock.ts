import { useCallback, useEffect, useRef } from "react";
import { AppState, AppStateStatus } from "react-native";

const AUTO_LOCK_IDLE_TIME = 5 * 60 * 1000; // 5 min
const AUTO_LOCK_BACKGROUND_TIME = 2 * 60 * 1000; // 2 min

export function useAutoLock(onLock: () => void) {
  const idleTimer = useRef<number | null>(null);
  const backgroundTime = useRef<number | null>(null);
  const appState = useRef<AppStateStatus>(AppState.currentState);

  const resetIdleTimer = useCallback(() => {
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
    }
    idleTimer.current = setTimeout(() => {
      onLock();
    }, AUTO_LOCK_IDLE_TIME) as unknown as number;
  }, [onLock]);

  const handleAppStateChange = useCallback(
    (nextAppState: AppStateStatus) => {
      if (
        appState.current === "active" &&
        (nextAppState === "inactive" || nextAppState === "background")
      ) {
        backgroundTime.current = Date.now();
      }

      if (
        (appState.current === "inactive" ||
          appState.current === "background") &&
        nextAppState === "active"
      ) {
        const now = Date.now();
        if (
          backgroundTime.current &&
          now - backgroundTime.current > AUTO_LOCK_BACKGROUND_TIME
        ) {
          onLock();
        } else {
          resetIdleTimer();
        }
      }

      appState.current = nextAppState;
    },
    [onLock, resetIdleTimer]
  );

  const handleUserActivity = useCallback(() => {
    resetIdleTimer();
  }, [resetIdleTimer]);

  useEffect(() => {
    resetIdleTimer();
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );
    return () => {
      subscription.remove();
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
    };
  }, [handleAppStateChange, resetIdleTimer]);

  return { handleUserActivity, resetIdleTimer };
}
