<template>
	<div class="members-carousel">
		<slick ref="slick" :options="slickOptions">
			<div class="member-img">
				<img src="../assets/john.png" class="img-circle">
				<p class="member-name">John Doe</p>
			</div>
			<div class="member-img">
				<img src="../assets/janes.png" class="img-circle">
				<p class="member-name">John Doe</p>
			</div>
			<div class="member-img">
				<img src="../assets/leila.png" class="img-circle">
				<p class="member-name">John Doe</p>
			</div>
			<div class="member-img">
				<img src="../assets/smith.png" class="img-circle">
				<p class="member-name">John Doe</p>
			</div>
			<div class="member-img">
				<img src="../assets/janes.png" class="img-circle">
				<p class="member-name">John Doe</p>
			</div>
		</slick>
	</div>
</template>
<script>
import Slick from 'vue-slick'

export default {
	name: 'members-carousel',
	components: {
		Slick
	},
	data() {
		return {
		    slickOptions: {
		        slidesToShow: 4,
		        // Any other options that can be got from plugin documentation
		    },
		};
	},

	// All slick methods can be used too, example here
	methods: {
	    next() {
	        this.$refs.slick.next();
	    },

	    prev() {
	        this.$refs.slick.prev();
	    },

	    reInit() {
	        // Helpful if you have to deal with v-for to update dynamic lists
	        this.$nextTick(() => {
	            this.$refs.slick.reSlick();
	        });
	    },
	}
}
</script>
<style lang="sass" scoped>
@import '../mq'
@import '../../node_modules/slick-carousel/slick/slick.css'
@import '../../node_modules/slick-carousel/slick/slick-theme.css'
.member-img
	padding: 10% 10%
.member-name
	font-size: 15px
	color: #a2a2a2
	text-align: center
</style>
<style>
	/*.slick-prev:before, .slick-next:before { font-family: "slick"; line-height: 1; color: #11709e; opacity: 0.75; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-weight: bold; }   

	.slick-prev:before { content: "<"; }
	[dir="rtl"] .slick-prev:before { content: ">"; }

	[dir="rtl"] .slick-next { left: -10px; top: 70px; right: auto; }
	.slick-next:before { content: ">"; }
	[dir="rtl"] .slick-next:before { content: "<"; }*/

	.slick-prev:before, .slick-next:before { font-family: FontAwesome; font-size: 20px; line-height: 1; color: #39a7dc; opacity: 0.75; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }   

	.slick-prev:before { content: "\f053"; }
	[dir="rtl"] .slick-prev:before { content: "\f054"; }

	[dir="rtl"] .slick-next { left: -10px; top: 70px; right: auto; }
	.slick-next:before { content: "\f054"; }
	[dir="rtl"] .slick-next:before { content: "\f053"; }
</style>
