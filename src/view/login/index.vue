<template>
	<el-container>
		<el-form ref="loginForm" :model="loginInfo">
			<div class="title">admin-site</div>
			<el-form-item>
				<el-input v-model="loginInfo.username" type="text" name="username" placeholder="username"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input v-model="loginInfo.password" type="password" name="password" placeholder="password"></el-input>
			</el-form-item>
			<el-form-item>
		    	<el-button type="primary" @click="doLogin">login</el-button>
		  	</el-form-item>
		</el-form>
	</el-container>
</template>

<script type="text/javascript">
	export default {
		name: 'login',
		data () {
			return {
				loginInfo: {
					username: 'admin',
					password: '123456'
				}
			};
		},
		mounted (){
			this.valiCookies();
		},
		methods: {
			valiCookies (){
				
			},
			doLogin () {
				var _self = this;
				_self.$store.dispatch('Login', _self.loginInfo).then(data => {
					if(data.errorCode === 0){
						_self.$router.push('/backstage');
					}else{
						alert('fail');
					}
				});
			}
		}
	}
</script>

<style type="text/css">
	html,body{
		height: 100%;
	}
	.el-form{
		width: 300px;
		margin: 150px auto;
	}
	.el-button{
		width: 300px;
	}
	.title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-family: PingFang SC;
    }
</style>