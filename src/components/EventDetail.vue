<template>
	<div class="event-detail">
	  <div class="event-detail-item">
	  	<div class="event-title box-shadow">
		  	<div class="hero is-link">
		  		<p class="title">Intro to Crypto's</p>
		  		<p><a class="button is-white"><strong>Join</strong></a></p>
		  	</div>
		</div>
	  </div>
	  <div class="event-detail-item">
		  <div class="columns">
		  	<div class="column is-8">
		  		<div class="event-description box-shadow">
			  		<p class="title is-4">Description:</p>
			  		<div>
				  		<p class="subtitle">
					  		HR tech world Amsterdam is the biggest HR tech event conference 
					  		of its kind in the world! Meet with over 150 start ups, investors, 
					  		and corporate partners to watch your workforce excel!
				  		</p>
				  		<p class="subtitle">
				  			This time join us for our 4th annual meet up ever. Featuring special 
				  			quests sucha as rabobank and ranstad. Together you can see what the latest 
				  			innovative technologies are and understand the future of our workforce.
				  		</p>
				  		<p class="subtitle">The event begins on october 26 from 1pm to 9pm, make sure to get your tickets early</p>
				  	</div>
			  	</div>
		  	</div>
		  	<div class="column is-4">
		  		<div class="event-date box-shadow">
			  		<div>
			  			<p class="title is-4">When:</p>
			  			<p class="">
			  				Thursday, October 26th<br>
			  				1:00 PM to 5:00 PM
			  			</p>
			  			<p style="font-size: 17px; color: #a2a2a2; padding-top: 5px;">Add to Calendar</p>
			  		</div>
			  		<div style="margin-top: 25px">
			  			<p class="title is-4">Where:</p>
			  			<p>
			  				Merkspace - Event space A<br>
			  				Herengracht 499<br>
			  				1017BT Amsterdam
			  			</p>
			  		</div>
			  	</div>
		  	</div>
		  </div>
	  </div>
	  <div class="event-detail-item">
		  <div class="columns">
		  	<div class="column is-4">
		  		<div class="members box-shadow">
		  			<div class="columns">
		  				<div class="column">
		  					<p class="title is-4">Who is going?</p>
		  				</div>
		  				<div class="column">
		  					<p style="font-style: italic;">6 members will be there!</p>		
		  				</div>
		  			</div>
		  			<div class="event-carousel">
		  				<members-carousel></members-carousel>
		  			</div>
		  		</div>
		  	</div>
		  	<div class="column is-4">
		  		<div class="host box-shadow">
		  			<p class="title is-4">Host:</p>
		  			<p>Bitcone Amsterdam</p>
		  			<p>www.bitcone.nl</p>
		  		</div>
		  	</div>
		  	<div class="column is-4">
		  		<div class="tags box-shadow">
		  			<p class="title is-4">Tags:</p>
		  			<tag-list v-model="event.tags"></tag-list>
		  		</div>
		  	</div>
		  </div>
	  </div>
	</div>
</template>

<script>
import MembersCarousel from './MembersCarousel'
import TagList from './TagList'
export default {
  name: 'event-detail',
  components: {
  	MembersCarousel,
  	TagList
  },
  data() {
  	return {
	  	event: {
	  		title: 'event',
	  		tags: ['Al', 'Scale Ups', 'Saas', 'Software']
	  	},
	};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
.event-title
	position: relative
	background: url("../assets/bitcoin.jpg") no-repeat
	background-size: cover
	-webkit-background-size: cover
	width: 100%
	padding-top: 20%
	border-radius: 15px
	text-align: center
	@include tablet
		min-height: 200px
	@include mobile
		min-height: 250px
.event-title .hero
	position: absolute
	padding-top: 2.5%
	width: 40%
	top: 50%
	left: 50%
	transform: translate(-50%, -50%)
	@include mobile
		width: 90%
.event-title .button
	width: 40%
	font-size: 23px
	border-radius: 10px
.event-title .title
	border-bottom: 1.5px solid white
	padding-bottom: 6px
.hero.is-link
	background-color: inherit
.event-detail .event-detail-item
	padding-bottom: 20px
.event-detail-item .box-shadow
	border-radius: 15px
	box-shadow: 2px 2px 50px 0px #c3c3c3
	height: 100%
.event-description
	padding: 5% 7%
.event-date, .host, .tags
	padding: 8% 11%
.event-date
	font-size: 20px
.members
	padding: 7% 6%
.event-carousel
	padding: 0 5%
.host
	font-size: 1.5rem
</style>