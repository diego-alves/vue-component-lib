import { DefineComponent, Plugin } from 'vue';

declare const VueComponentLib: DefineComponent<{}, {}, any> & { install: Exclude<Plugin['install'], undefined> };
export default VueComponentLib;
