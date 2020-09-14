export default {
  computed: {
    // daysLeft must return (paycheckDay in next month) - today
    daysLeft() {
      const today = new Date();
      const nextPaycheck = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        this.$store.state.paycheckDay,
      );
      return Math.floor((nextPaycheck - today) / (1000 * 60 * 60 * 24));
    },
  },
};
