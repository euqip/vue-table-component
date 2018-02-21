<template>
    <th
        @click="clicked"
        :class="headerClass"
        role="columnheader"
        slot-scope="col"
        :aria-sort="ariaSort"
        :aria-disabled="ariaDisabled"
        v-if="this.isVisible"
    >
        {{ label }}
    </th>
</template>

<script>
    import { classList } from '../helpers';

    export default {
        props: ['column', 'sort', 'asc', 'desc', 'none'],

        computed: {
            // set default values to texts in code
            asctext() {
                return  (this.asc === undefined ? 'ascending' : this.asc);
                },
            desctext() {
                return  (this.asc === undefined ? 'descending' : this.desc);
                },
            nonetext() {
                return  (this.none === undefined ? 'none' : this.none);
                },
            ariaDisabled() {
                if (! this.column.isSortable()) {
                    return 'true';
                }

                return false;
            },

            ariaSort() {
                if (! this.column.isSortable()) {
                    return false;
                }

                if (this.column.show !== this.sort.fieldName) {
                    return this.nonetext;
                }

                return this.sort.order === 'asc' ? this.asctext : this.desctext;
            },

            headerClass() {
                if (! this.column.isSortable()) {
                    return classList('table-component__th', this.column.headerClass);
                }

                if (this.column.show !== this.sort.fieldName) {
                    return classList('table-component__th table-component__th--sort', this.column.headerClass);
                }

                return classList(`table-component__th table-component__th--sort-${this.sort.order}`, this.column.headerClass);
            },

            isVisible() {
                return ! this.column.hidden;
            },

            label() {
                if (this.column.label === null) {
                    return this.column.show;
                }

                return this.column.label;
            },
        },

        methods: {
            clicked() {
                if (this.column.isSortable()) {
                    this.$emit('click', this.column);
                }
            },
        },
    };
</script>
