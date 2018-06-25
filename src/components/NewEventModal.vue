<template>
	<div class="new-event-modal">
		<div class="modal is-active">
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="box">
					<div class="modal-form-group">
						<div class="level">
							<div class="level-item has-text-centered">
								<p class="title">Create a new event</p>	
							</div>
						</div>
						<p>
							Have a great idea for an event? Fill out the form below 
							and start planning it with your community manager!
						</p>
					</div>
					<div class="modal-form-group">
						<div class="field is-horizontal">
							<div class="field-label is-normal">
								<label class="label">Event Name</label>
							</div>
							<div class="field-body">
								<div class="field">
									<div class="control">
										<input class="input" type="text" placeholder="Event name">
									</div>
								</div>
							</div>
						</div>
						<div class="field is-horizontal">
							<div class="field-label is-normal">
								<label class="label">Description</label>
							</div>
							<div class="field-body">
								<div class="field">
									<div class="control">
										<textarea class="textarea" placeholder="Description"></textarea>
									</div>
								</div>
							</div>
						</div>
						<div class="field is-horizontal">
							<div class="field-label is-normal">
								<label class="label">Date</label>
							</div>
							<div class="field-body">
								<div class="field">
									<div class="control">
										<!-- <flat-pickr v-model="date_start" :config="config" placeholder="Start"></flat-pickr> -->
										<datepicker placeholder="placeholder"
													ref="startPicker"
													:config="{ minDate: 'today', enableTime: true, dateFormat: 'Y-m-d H:i' }"></datepicker>
									</div>
								</div>
								<div class="field">
									<div class="control">
										<!-- <flat-pickr v-model="date_end" :config="config" placeholder="End"></flat-pickr> -->
										<datepicker placeholder="placeholder" 
													ref="endPicker"
													:config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"></datepicker>
									</div>
								</div>
							</div>
						</div>
						<div class="field is-horizontal">
							<div class="field-label is-normal">
								<label class="label">Tags</label>
							</div>
							<div class="field-body">
								<div class="field">
									<div class="control">
										<input class="input" type="text" placeholder="Add tags like 'sales'...">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="level">
						<div class="level-item has-text-centered">
							<a class="button is-success is-outlined">Create event</a>	
						</div>
					</div>
				</div>
				<button class="modal-close" @click="$emit('close')">close</button>
			</div>
		</div>
	</div>
</template>
<script>
	// import flatPickr from 'vue-flatpickr-component'
	import Datepicker from 'vue-bulma-datepicker'
	export default {
		name: 'new-event-modal',
		data() {
			return {
				date_start: null,
				date_end: null,
				// https://chmln.github.io/flatpickr/options/
				config: {
					altFormat: "F j, Y",
					altInput: true
				}
			}
		},
		components: {
			// flatPickr,
			Datepicker
		},
		mounted() {
			const {startPicker, endPicker} = this.$refs
			startPicker.datepicker.set('onChange', function(selectedDates, dateStr, instance) {
		    	endPicker.datepicker.set('minDate', selectedDates[0].fp_incr(1))
		    })
		    endPicker.datepicker.set('onChange', function(selectedDates, dateStr, instance) {
		    	startPicker.datepicker.set('maxDate', dateStr)
		    })
		}
	}
</script>
<style lang="sass" scoped>
	@import '../mq'
	.modal
		position: absolute
	.modal-content
		overflow: initial
	.modal-close
		position: absolute
		top: -30px
		right: -30px
		max-height: 35px
		max-width: 35px
		min-height: 35px
		min-width: 35px
	.new-event-modal .control .input,
	.new-event-modal .control .textarea,
	.new-event-modal .control .button,
	.new-event-modal .level .button
		border-radius: 15px
	.new-event-modal .control .button
		border-width: 1px
		border-color: #d4d4d4
		color: #9a9a9a
	.box
		padding: 3rem 2rem
		border-radius: 10px
	.field-label
		@include tablet
			text-align: left
	.modal-form-group
		margin-bottom: 3rem
	.new-event-modal .level .button
		height: 4rem
		padding-left: 1.5rem
		padding-right: 1.5rem
		font-size: 26px
		font-weight: 500
		border-width: 1px
</style>