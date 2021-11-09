<template>
	<a
		:href="`${meta ? sourceURL(meta.path, meta.file, meta.line) : sourceURL(path ?? '')}`"
		target="_blank"
		rel="noopener"
		aria-label="Go to source"
	>
		<heroicons-outline-code
			class="
				text-xl
				fill-current
				text-discord-red-530
				hover:text-discord-red-500
				dark:text-discord-red-330 dark:hover:text-discord-red-300
			"
			aria-hidden="true"
		/>
	</a>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

import { useStore } from '~/store';

import type { DocumentationClassMeta } from '~/interfaces/Documentation';

const store = useStore();

defineProps<{ meta?: DocumentationClassMeta; path?: string }>();

const docs = computed(() => store.state.docs);

const sourceURL = (path: string, file?: string, line?: string | number) =>
	new URL(`${docs.value?.tag ?? ''}/${path}${file ? `/${file}` : ''}${line ? `#L${line}` : ''}`, docs.value?.source);
</script>
