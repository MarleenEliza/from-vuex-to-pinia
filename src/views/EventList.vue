<script>
import EventCard from '../components/EventCard.vue'
import { useEventStore } from "../stores/EventStore";

export default {
    setup() {
    const eventStore = useEventStore();

    return {
      eventStore,
    };
  },
  components: {
    EventCard
  },
  created() {
    this.eventStore.fetchEvents().catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
}
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    There are {{eventStore.getAmountOfEvents}} events
    <EventCard v-for="event in eventStore.events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
