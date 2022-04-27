<template>
  <div class="test">
    <button class="test__btn" @click="showTable" :disabled="isShow">Сгенерировать</button>
    <div class="test__table" v-if="isShow">
        <table class="test__table-header">
          <tr class="test__table-row">
            <td class="test__table-data" v-for="name in headers" :key="name">{{name}}</td>
          </tr>
        </table>
        <table class="test__table-body">
          <tr class="test__table-row" v-for="item in getDataTable" :key="item.name">
            <td class="test__table-data">{{ item.name }}</td>
            <td class="test__table-data">{{ item.price }}</td>
            <td class="test__table-data">{{ item.quantity }}</td>
            <td class="test__table-data">{{ item.cost }}</td>
          </tr>
        </table>
      <span class="test__total">Стоимость: {{getTotal}}</span>
    </div>
  </div>
</template>

<script lang="js" src="./DataTable.js"/>
<style lang="scss" src="./DataTable.scss" scoped />
