<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#card-img {
  width: 100%;
  cursor: pointer;
  transition-duration: 0.3s;
}

#card-img:hover {
  opacity: 0.6;
  transition-duration: 0.3s;
}

.sample1 {
	position:		relative;	/* 相対位置指定 */
}
.sample1 .caption {
	font-size:		130%;
	text-align: 		center;
	padding-top:		60px;
	color:			#fff;
}
.sample1 .mask {
	width:			100%;
	height:			100%;
	position:		absolute;	/* 絶対位置指定 */
	top:			0;
	left:			0;
	opacity:		0;	/* マスクを表示しない */
	background-color:	rgba(0,0,0,0.4);	/* マスクは半透明 */
	-webkit-transition:	all 0.2s ease;
	transition:		all 0.2s ease;
}
.sample1:hover .mask {
	opacity:		1;	/* マスクを表示する */
}
</style>
