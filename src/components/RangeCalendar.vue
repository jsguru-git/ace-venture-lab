<template>
	<div class="range-calendar">
		<datepicker placeholder="Pick date and time" :config="config"></datepicker>
	</div>
</template>
<script>
	import Datepicker from 'vue-bulma-datepicker'
	export default {
		name: 'range-calendar',
		components: {
			Datepicker
		},
		data() {
			return {
				config: {
					mode: 'range',
					inline: true
				}
			}
		}
	}
</script>
<style lang="sass" scoped>
@import '../mq'
.range-calendar
	margin-top: 30px
</style>