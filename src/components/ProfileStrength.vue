<template>
	<div class="profile-strength">
		<div class="progress-bar-left-center">
			<progress class="progress is-success vertical" value="82" max="100">60%</progress>
		</div>
		<div style="padding-left: 25px">
			<figure class="image is-175x175">
				<img class="img-circle" src="../assets/user.png">
			</figure>	
			Profile strength: <code>82%</code>
		</div>
	</div>
</template>

<script>
export default {
  name: 'profile-strength'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.vertical
	display: inline-block
	-webkit-transform: rotate(-90deg) /* Chrome, Safari, Opera */
  	transform: rotate(-90deg)
.is-175x175
	height: 170px
	width: 170px
.progress-bar-left-center
	position: relative
	transform: translate(-90px, 90px)
.progress-bar-left-center progress
	position: absolute
	height: 0.4rem
	width: 190px
</style>