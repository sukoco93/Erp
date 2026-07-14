import { createApp, ref, reactive, computed, watch, onMounted, toRefs } from 'vue';
import { C, TABS, FILTER_OPTS, SEED_TEMPLATE } from './constants.js';
import { Query, Command } from './db.js';
import { useToast, useFilter, useForm } from './composables.js';
import { MainPipeline, ContextInventory, ContextSales, ContextFinance } from './pipeline.js';
import { debounce } from './directives.js';
import { formatRupiah, formatDate, todayStr, sum } from './utils.js';

// Global state untuk UI
const app = createApp({
  setup() {
    const queryState = reactive({ pelanggan: [], barang: [], konsinyasi: [], kas: [], pembayaran: [], produksi: [], stok_log: [], saldo_log: [] });
    const isLoading = ref(false);
    const hasGlobalError = ref(false);
    const globalErrorMessage = ref('');
    const { toast, showToast } = useToast();
    const filter = useFilter();
    const { filterKirim, filterKas, filterProduksi, filterKirimDateStart, filterKirimDateEnd, filterKasDateStart, filterKasDateEnd, filterProduksiDateStart, filterProduksiDateEnd, setFilter, getPredicate } = filter;

    // UI state
    const activeTab = ref(C.TAB.KIRIM);
    const searchKirim = ref('');
    const searchKas = ref('');
    const pageKirim = ref(1);
    const pageKas = ref(1);
    const pageSize = 10;

    // ... (computed, methods, lifecycle seperti sebelumnya)

    const reloadApp = () => window.location.reload();
    const resetAndReload = async () => {
      await Command.reset();
      window.location.reload();
    };

    return { /* semua yang dibutuhkan template */ };
  }
});

app.directive('debounce', debounce);

app.config.errorHandler = (err, vm, info) => {
  console.error('[Global]', err, info);
  try {
    if (vm?.$root?.showToast) vm.$root.showToast('⚠️ ' + err.message, C.TOAST.ERROR);
  } catch {
    alert('Error: ' + err.message);
  }
};

app.mount('#app');
