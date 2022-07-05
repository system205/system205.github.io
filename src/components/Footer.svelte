<script lang="ts">
	import { base } from '$app/paths';
</script>

<footer>
	<div>
		<span>Social Media</span>
		<nav>
			<a href="https://vk.com/arsen205" target="_blank"
				><img id="VK-img" class="media-image" src="./images/vk.png" title="VK" alt="VK" />
			</a>
			<a href="https://www.youtube.com/channel/UCn2PB--35GVCPU_CH7JUlkQ/videos" target="_blank"
				><img
					id="YouTube-img"
					class="media-image"
					src="images/youtube.png"
					title="YouTube"
					alt="YouTube"
				/></a
			>
			<a href="https://t.me/system205" target="_blank">
				<img
					id="Telegram-img"
					class="media-image"
					src="/images/telegram.png"
					title="Telegram"
					alt="Telegram"
				/></a
			>
			<a href="https://discord.gg/cWRF6yFfVd" target="_blank">
				<img
					id="Discord-img"
					class="media-image"
					src="images/discord.png"
					title="Discord"
					alt="Discord"
				/></a
			>
		</nav>
	</div>
</footer>

<style>
	footer {
		border-top: 3px solid #1b2631;
		border-radius: 15px 15px 0 0;
		text-align: center;
		background: linear-gradient(-35deg, #1b2631, #aeb6bf, #ebedef);
	}
	span {
		font-size: 18px;
		font-weight: bold;
	}
	.media-image {
		height: 50px;
	}
</style>
