<template>
	<div class="tag-list">
		<span v-for="tag in value" class="tag is-info is-inverted">
			{{tag}}
		</span>
	</div>
</template>
<script>
	export default {
		name: 'tag-list',
		props: ['value']
	}
</script>
<style lang="sass" scoped>
	@import '../mq'
	.tags .tag
		margin-right: 1.5rem
		margin-bottom: 1rem
		height: 2.5rem
		padding-right: 1.5em
		padding-left: 1.5em
	.tag:not(body).is-info.is-inverted
		background-color: #fff
		color: #209cee
		border: 1px solid #8fcff9
		border-radius: 5px
	.tag-list
		padding-left: 60px
</style>