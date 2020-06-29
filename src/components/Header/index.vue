<template>
  <div class="m-header">
    <el-row>
      <Top-Ber />
    </el-row>
    <el-row>
      <Search-Ber />
    </el-row>
  </div>
</template>

<script>
import TopBer from './topber'
import SearchBer from './searchBer'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    TopBer,
    SearchBer
  }
}
</script>

<style scoped>
</style>
