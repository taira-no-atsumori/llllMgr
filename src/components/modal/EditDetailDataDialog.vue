<template>
  <v-dialog
    :model-value="modelValue"
    max-width="1200px"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>Edit Detail Data</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="2">
            <v-text-field
              v-model="initNumber"
              label="Init Number"
              type="number"
              min="0"
              step="0.1"
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="2">
            <v-switch
              v-model="is14"
              label="14"
              color="pink"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model="decimalPoint"
              label="Decimal Point"
              type="number"
              max="9"
              min="0"
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="3">
            <div class="d-flex align-center">
              <v-select
                v-model="selectedDataFormat"
                :items="
                  Object.entries(dataFormatType).map(([key, label]) => ({
                    title: label,
                    value: key,
                  }))
                "
                item-title="title"
                item-value="value"
                label="Data Format Type"
                variant="outlined"
                density="compact"
                hide-details
                class="mr-3"
              />
              <v-btn
                text="Set"
                color="primary"
                prepend-icon="mdi-plus"
                @click="copyToDetail(selectedDataFormat)"
              />
            </div>
          </v-col>

          <v-col cols="12">
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-center">Level</th>
                  <th class="text-center">倍率</th>
                  <th
                    v-for="(value, key) in dataFormatType"
                    :key="key"
                    class="text-center"
                  >
                    {{ value }}
                  </th>
                  <th class="text-center" style="width: 125px">Result</th>
                  <th class="text-center">
                    <v-checkbox
                      v-model="selectAll"
                      color="pink"
                      density="compact"
                      hide-details
                      @update:model-value="toggleAll"
                    />
                  </th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="(value, i) in multipliers" :key="i">
                  <td>{{ i + 1 }}</td>
                  <td>{{ value }}</td>
                  <td>{{ Math.trunc(fixFloat(baseNumber * value)) }}</td>
                  <td>
                    {{
                      Math.floor(
                        fixFloat(
                          baseNumber * value * Math.pow(10, decimalPoint),
                        ),
                      ) / Math.pow(10, decimalPoint)
                    }}
                  </td>
                  <td>
                    {{
                      Math.round(
                        fixFloat(
                          baseNumber * value * Math.pow(10, decimalPoint),
                        ),
                      ) / Math.pow(10, decimalPoint)
                    }}
                  </td>
                  <td>
                    {{
                      Math.ceil(
                        fixFloat(
                          baseNumber * value * Math.pow(10, decimalPoint),
                        ),
                      ) / Math.pow(10, decimalPoint)
                    }}
                  </td>
                  <td>
                    <v-text-field
                      v-model="detailInput[i]"
                      variant="underlined"
                      density="compact"
                      hide-details
                      @keyup.enter="save"
                    >
                      <template #append-inner>
                        <v-btn
                          size="x-small"
                          variant="text"
                          color="grey"
                          class="pa-0"
                          style="min-width: 24px"
                          text="null"
                          @click="detailInput[i] = 'null'"
                        />
                      </template>
                    </v-text-field>
                  </td>
                  <td>
                    <v-checkbox
                      v-model="selectedRows[i]"
                      color="pink"
                      density="compact"
                      hide-details
                      @update:model-value="updateQuestionMark(i)"
                    />
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          text="Cancel"
          color="error"
          @click="$emit('update:modelValue', false)"
        />
        <v-btn text="Save" color="primary" @click="save" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  initialValues: (string | number | null)[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'save', values: (string | number | null)[]): void;
}>();

const multipliers = [
  1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.5,
];
const dataFormatType = {
  trunc: '整数',
  floor: '切り捨て',
  round: '四捨五入',
  ceil: '切り上げ',
};

const initNumber = ref(0);
const is14 = ref(false);
const decimalPoint = ref(2);
const selectedDataFormat = ref('ceil');
const selectAll = ref(false);
const selectedRows = ref<boolean[]>([]);
const detailInput = ref<(string | number | null)[]>([]);

const baseNumber = computed(() => {
  return is14.value ? initNumber.value / 2.5 : initNumber.value;
});

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      const rawValues = JSON.parse(JSON.stringify(props.initialValues || []));
      detailInput.value = rawValues.map((v: string | number | null) =>
        v === null ? 'null' : v,
      );
      selectedRows.value = detailInput.value.map((val: string | number) =>
        String(val).endsWith('?'),
      );
      selectAll.value = selectedRows.value.every(Boolean);
    }
  },
);

const fixFloat = (num: number) => parseFloat(num.toFixed(10));

const updateQuestionMark = (index: number) => {
  const currentVal = String(detailInput.value[index] || '');
  if (selectedRows.value[index]) {
    if (!currentVal.endsWith('?')) {
      detailInput.value[index] = currentVal + '?';
    }
  } else {
    if (currentVal.endsWith('?')) {
      detailInput.value[index] = currentVal.slice(0, -1);
    }
  }
};

const toggleAll = () => {
  selectedRows.value = selectedRows.value.map(() => selectAll.value);
  selectedRows.value.forEach((_, i) => updateQuestionMark(i));
};

const copyToDetail = (type: string) => {
  const p = Math.pow(10, decimalPoint.value);
  detailInput.value = multipliers.map((value, i) => {
    const num = baseNumber.value * value;
    let result: number | string = 0;

    switch (type) {
      case 'trunc':
        result = Math.trunc(fixFloat(num));
        break;
      case 'floor':
        result = Math.floor(fixFloat(num * p)) / p;
        break;
      case 'round':
        result = Math.round(fixFloat(num * p)) / p;
        break;
      case 'ceil':
        result = Math.ceil(fixFloat(num * p)) / p;
        break;
      default:
        result = 0;
    }

    if (selectedRows.value[i]) {
      return String(result) + '?';
    }
    return result;
  });
};

const save = () => {
  const values = detailInput.value.map((v: string | number | null) => {
    const strVal = String(v);
    return strVal === 'null' ? null : strVal;
  });
  emit('save', values);
  emit('update:modelValue', false);
};
</script>
