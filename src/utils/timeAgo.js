import en from "javascript-time-ago/locale/en";
import TimeAgo from "javascript-time-ago";
import { round } from "javascript-time-ago/steps";

TimeAgo.addDefaultLocale(en);

const customLabels = {
  second: {
    past: {
      one: "{0}s ago",
      other: "{0}s ago",
    },
  },
  minute: {
    past: {
      one: "{0}min ago",
      other: "{0}min ago",
    },
  },
  hour: {
    past: {
      one: "{0}h ago",
      other: "{0}h ago",
    },
  },
  day: {
    past: {
      one: "{0}d ago",
      other: "{0}d ago",
    },
  },
  week: {
    past: {
      one: "{0}w ago",
      other: "{0}w ago",
    },
  },
  month: {
    past: {
      one: "{0}m ago",
      other: "{0}m  ago",
    },
  },
  year: {
    past: {
      one: "{0}y ago",
      other: "{0}y ago",
    },
  },
};

TimeAgo.addLabels("en", "custom", customLabels);

export const timeAgo = new TimeAgo("en-US");

export const timeAgoCustomStyle = {
  steps: round,
  labels: "custom",
};
