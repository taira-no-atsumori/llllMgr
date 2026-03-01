<template>
  <v-dialog
    :model-value="modelValue"
    max-width="1000px"
    @update:model-value="closeDialog"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ `${isNew ? 'New' : 'Edit'} Event` }}</span>
      </v-card-title>

      <v-card-text class="px-4 py-2">
        <v-row>
          <v-col cols="8">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="editableItem.id"
                  label="Event ID"
                  :readonly="!isNew"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="editableItem.title"
                  label="Event Title"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                />
              </v-col>

              <v-col cols="8">
                <v-text-field
                  v-model="editableItem.text"
                  label="Sub Title"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                />
              </v-col>

              <v-col cols="4">
                <v-select
                  v-model="editableItem.type"
                  label="Event Type"
                  :items="eventTypes"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                />
              </v-col>

              <v-col cols="6">
                <v-text-field
                  v-model="firstDayInput"
                  label="First Day"
                  type="datetime-local"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="lastDayInput"
                  label="Last Day"
                  type="datetime-local"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="4">
            <v-img :src="previewImageUrl || editableItem.imageUrl || noImage" />
            <div class="d-flex justify-space-evenly mt-3">
              <v-btn
                text="Import Image"
                prepend-icon="mdi-file-import"
                color="primary"
                @click="triggerFileInput"
              />
              <v-btn
                text="Delete"
                prepend-icon="mdi-close"
                color="error"
                :disabled="!selectedFile"
                @click="cancelUpload"
              />
            </div>
            <input
              ref="fileInputRef"
              type="file"
              accept="image/webp"
              style="display: none"
              @change="onNativeFileChange"
            />
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="editableItem.link"
              label="URL"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="py-0">
        <v-spacer />
        <v-btn text="Cancel" color="red" variant="text" @click="closeDialog" />
        <v-btn
          text="Save"
          color="primary"
          variant="text"
          :disabled="
            !editableItem.id ||
            !editableItem.title ||
            !firstDayInput ||
            !lastDayInput
          "
          @click="save"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import type { EventItem } from '@/types/event';
import noImage from '@/assets/images/NO IMAGE_card.webp';

const props = defineProps<{
  modelValue: boolean;
  eventData: EventItem | null;
  isNew: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'save', payload: { event: EventItem; file: File | null }): void;
}>();

const editableItem = ref<EventItem>({} as EventItem);
const previewImageUrl = ref<string | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);
const selectedFile = ref<File | null>(null);

const eventTypes = ['liveGP', 'live', 'movie', 'other'];

const toDatetimeLocal = (arr: number[] | undefined) => {
  if (!arr || !Array.isArray(arr) || arr.length < 5) {
    return '';
  }

  const [y, m, d, h, min] = arr;
  return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}T${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
};

const fromDatetimeLocal = (dateStr: string) => {
  if (!dateStr) {
    return [];
  }

  const date = new Date(dateStr);

  return [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
  ];
};

watch(
  () => props.modelValue,
  (val) => {
    if (val && props.eventData) {
      editableItem.value = JSON.parse(JSON.stringify(props.eventData));
      cancelUpload();
    }
  },
);

const firstDayInput = computed({
  get: () => toDatetimeLocal(editableItem.value.firstDay),
  set: (val) => (editableItem.value.firstDay = fromDatetimeLocal(val)),
});

const lastDayInput = computed({
  get: () => toDatetimeLocal(editableItem.value.lastDay),
  set: (val) => (editableItem.value.lastDay = fromDatetimeLocal(val)),
});

const handleFileSelect = (file: File | File[]) => {
  const targetFile = Array.isArray(file) ? file[0] : file;

  if (!targetFile) {
    cancelUpload();
    return;
  }

  selectedFile.value = targetFile;
  const reader = new FileReader();
  reader.onload = (e) => {
    previewImageUrl.value = e.target?.result as string;
  };
  reader.readAsDataURL(targetFile);
};

const cancelUpload = () => {
  selectedFile.value = null;
  previewImageUrl.value = null;
  if (fileInputRef.value) {
    fileInputRef.value.value = '';
  }
};

const triggerFileInput = () => {
  fileInputRef.value?.click();
};

const onNativeFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.files && target.files.length > 0) {
    handleFileSelect(target.files[0]);
  }
};

const closeDialog = () => {
  emit('update:modelValue', false);
};

const save = () => {
  emit('save', { event: editableItem.value, file: selectedFile.value });
};
</script>
