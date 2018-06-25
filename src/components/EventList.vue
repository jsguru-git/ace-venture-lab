<template>
	<div class="event-list">
		<new-event-modal v-show="showModal" @close="showModal = false"></new-event-modal>
		<div class="columns is-multiline">
			<div class="column is-7">
				<div class="level">
					<div class="level-left">
						<div class="level-item">
							<p class="subtitle">Events and workshops happening soon</p>
						</div>
					</div>
					<div class="level-right">
						<div class="level-item">
							<a class="button is-rounded">All Locations</a>
						</div>
					</div>
				</div>
				<p class="title">Today</p>
				<div class="event-item back-bitcoin">
					<div class="event-item-header">
						<div class="hero is-link">
							<div class="columns">
								<div class="column">
									<p class="title">Intro to Crypto's</p>
									<p class="subtitle">Hosted by Colin from Bitcone</p>
								</div>
								<div class="column is-narrow">
									<router-link to="/detail" class="button is-success is-inverted is-rounded"><strong>Join!</strong></router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="event-item-bottom">
						<div class="hero is-link">
							<div class="level">
								<div class="level-left">
									<div class="level-item">
										<p class="subtitle">Where: Merkspace Amsterdam, MR 2</p>		
									</div>
								</div>
								<div class="level-right">
									<div class="level-item">
										<p class="subtitle">When: 19:00, 9/12/17</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="event-item back-seminar">
					<div class="event-item-header">
						<div class="hero is-link">
							<div class="columns">
								<div class="column">
									<p class="title">Sales Hackers AMS</p>
									<p class="subtitle">Hosted by Freelance Masterminds</p>
								</div>
								<div class="column is-narrow">
									<router-link to="/detail" class="button is-success is-inverted is-rounded"><strong>Join!</strong></router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="event-item-bottom">
						<div class="hero is-link">
							<div class="level">
								<div class="level-left">
									<div class="level-item">
										<p class="subtitle">Where: Merkspace Amsterdam, MR 2</p>		
									</div>
								</div>
								<div class="level-right">
									<div class="level-item">
										<p class="subtitle">When: 19:00, 9/12/17</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<p class="title">January</p>
				<div class="event-item back-react">
					<div class="event-item-header">
						<div class="hero is-link">
							<div class="columns">
								<div class="column">
									<p class="title">React.js meet up</p>
									<p class="subtitle">Hosted by react society</p>
								</div>
								<div class="column is-narrow">
									<router-link to="/detail" class="button is-success is-inverted is-rounded"><strong>Join!</strong></router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="event-item-bottom">
						<div class="hero is-link">
							<div class="level">
								<div class="level-left">
									<div class="level-item">
										<p class="subtitle">Where: Merkspace Amsterdam, MR 2</p>		
									</div>
								</div>
								<div class="level-right">
									<div class="level-item">
										<p class="subtitle">When: 19:00, 9/12/17</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="column is-5">
				<div class="wrapper">
					<div class="columns">
						<div class="column is-1"></div>
						<div class="column is-8">
							<div class="events">
								<p class="subtitle">Events</p>
								<span style="color: #afafaf">
									Have a great idea for an events? Fill out the form below and start planning it with your community manager!<br>
								</span>
								<a class="button is-success is-rounded" @click="showModal = true">Add new event</a>
							</div>
							<!-- <events-calendar></events-calendar> -->
							<range-calendar></range-calendar>
						</div>
						<div class="column is-3"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	// import EventsCalendar from './EventsCalendar'
	import NewEventModal from './NewEventModal'
	import RangeCalendar from './RangeCalendar'
	export default {
		name: 'event-list',
		components: {
			// EventsCalendar,
			NewEventModal,
			RangeCalendar
		},
		data() {
			return {
				showModal: false
			};
		}
	}
</script>

<style lang="sass" scoped>
@import '../mq'
/*.subtitle
	color: #616161
	font-size: 1rem*/
.event-list
	position: relative
.button.is-rounded
	padding-left: 2.3em
	padding-right: 2.3em
	font-size: .8rem
.event-item
	position: relative
	width: 100%
	padding-top: 45%
	margin-bottom: 35px
	border-radius: 15px
	@include mobile
		min-height: 350px
	@include tablet
		min-height: 250px
.back-bitcoin
	background: url("../assets/bitcoin.jpg") no-repeat
	background-size: cover
	-webkit-background-size: cover
.back-seminar
	background: url("../assets/seminar.jpg") no-repeat
	background-size: cover
	-webkit-background-size: cover
.back-react
	background: url("../assets/react.jpg") no-repeat
	background-size: cover
	-webkit-background-size: cover
.event-item-header, .event-item-bottom
	position: absolute
	width: 100%
	padding: 0 30px
.event-item-header
	top: 30px
.event-item-bottom
	bottom: 20px
.hero.is-link
	background-color: inherit
.column .title
	border-bottom: 1px solid white
	padding-bottom: 2px
.column .subtitle
	padding-top: 5px
.events, 
.events-calendar,
.range-calendar
	border-radius: 15px
	box-shadow: 2px 2px 50px 0px #c3c3c3
.events
	padding: 15px 25px 25px 25px
	text-align: center
.events-calendar
	margin-top: 30px
.events a
	margin-top: 1.5rem
	color: #000000
	font-weight: bold
</style>