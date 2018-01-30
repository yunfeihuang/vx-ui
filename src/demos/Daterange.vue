<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Daterange</div>
    </x-nav>
    <x-body slot="body">
      <br />
      <x-form>
        <x-form-item label="yyyy-MM-dd">
          <x-input>
            <daterange v-model="date" placeholder="请选择截止时间" required/>
          </x-input>
        </x-form-item>
      </x-form>
    </x-body>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      date: []
    }
  }
}
</script>

<style lang="scss">

</style>
