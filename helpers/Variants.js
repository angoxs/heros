export const variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },

  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
