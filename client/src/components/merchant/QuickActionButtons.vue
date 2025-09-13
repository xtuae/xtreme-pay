<template>
  <div>
    <div class="flex space-x-2">
      <Button @click="showPaymentUI = true">
        <Link class="w-4 h-4 mr-2" />
        Create Payment Link
      </Button>
      <Button @click="showAddProductUI = true">
        <Plus class="w-4 h-4 mr-2" />
        Add New Product
      </Button>
      <Button @click="showInvoiceUI = true">
        <FileText class="w-4 h-4 mr-2" />
        Generate Invoice
      </Button>
    </div>

    <div
      v-if="showPaymentUI"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50"
    >
      <div class="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-6 space-y-6">
        <div class="flex justify-between items-center border-b pb-3">
          <h2 class="text-xl font-bold">Create Payment</h2>
          <span class="text-gray-500">Admin</span>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold mb-2">Select Product</h3>
              <input
                v-model="search"
                type="text"
                placeholder="Search products..."
                class="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div class="border rounded-lg p-2 max-h-48 overflow-auto">
              <div
                v-for="p in filteredProducts"
                :key="p.id"
                @click="selectProduct(p)"
                class="p-2 rounded-lg cursor-pointer hover:bg-blue-50 flex justify-between items-center"
              >
                <div>
                  <div class="font-medium">{{ p.name }}</div>
                  <div class="text-xs text-gray-500">ID: {{ p.id }}</div>
                </div>
                <div class="text-sm font-semibold">{{ formatCurrency(p.price) }}</div>
              </div>
              <div v-if="filteredProducts.length === 0" class="text-sm text-gray-500 p-2">
                No products match.
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div class="border rounded-xl p-4 space-y-3">
              <div v-if="selectedProduct">
                <div class="flex justify-between">
                  <div>
                    <div class="font-medium">{{ selectedProduct.name }}</div>
                    <div class="text-xs text-gray-500">Product ID: {{ selectedProduct.id }}</div>
                  </div>
                  <div class="text-sm text-gray-500">Unit: {{ formatCurrency(selectedProduct.price) }}</div>
                </div>

                <div class="flex items-center space-x-2 mt-2">
                  <label class="text-sm">Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    v-model.number="selectedQty"
                    class="w-20 border rounded-lg px-2 py-1"
                  />
                </div>

                <div class="space-y-1 text-sm mt-2">
                  <div class="flex justify-between">
                    <span>Price</span>
                    <span>{{ formatCurrency(selectedSubtotal) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Taxes and Charges ({{ (taxRate * 100).toFixed(0) }}%)</span>
                    <span>{{ formatCurrency(selectedTaxes) }}</span>
                  </div>
                  <div class="flex justify-between font-bold text-blue-600">
                    <span>Total</span>
                    <span>{{ formatCurrency(selectedTotal) }}</span>
                  </div>
                </div>

                <div class="flex space-x-2 pt-3">
                  <Button
                    :disabled="!selectedProduct"
                    @click="addMoreProduct"
                    class="flex-1 rounded-2xl bg-blue-600 text-white hover:opacity-90"
                  >
                    Add More Product
                  </Button>

                  <Button
                    @click="createPaymentLink"
                    class="flex-1 rounded-2xl bg-blue-600 text-white hover:opacity-90"
                  >
                    Create Payment Link
                  </Button>
                </div>
              </div>

              <div v-else class="text-gray-500 text-center py-6">
                Select a product from the list to see details here.
              </div>
            </div>

            <div class="border rounded-lg p-4">
              <div class="flex justify-between items-center mb-3">
                <h4 class="font-semibold">Cart</h4>
                <div class="text-sm text-gray-500">{{ cart.length }} item(s)</div>
              </div>

              <div v-if="cart.length === 0" class="text-sm text-gray-500">No products added yet.</div>

              <ul v-else class="space-y-2 max-h-40 overflow-auto">
                <li
                  v-for="(item, idx) in cart"
                  :key="item.product.id"
                  class="flex justify-between items-start"
                >
                  <div>
                    <div class="font-medium">{{ item.product.name }}</div>
                    <div class="text-xs text-gray-500">ID: {{ item.product.id }} • Qty: {{ item.qty }}</div>
                  </div>
                  <div class="text-right">
                    <div class="font-medium">{{ formatCurrency(item.product.price * item.qty) }}</div>
                    <button
                      @click="removeFromCart(idx)"
                      class="text-xs text-red-500 underline mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              </ul>

              <div class="mt-4 text-sm">
                <div class="flex justify-between">
                  <span>Subtotal</span>
                  <span>{{ formatCurrency(cartSubtotal) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Taxes and Charges</span>
                  <span>{{ formatCurrency(cartTaxes) }}</span>
                </div>
                <div class="flex justify-between font-bold text-blue-600">
                  <span>Grand Total</span>
                  <span>{{ formatCurrency(cartTotal) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-2">Payment Link</h3>
          <div class="flex gap-2">
            <input
              type="text"
              readonly
              :value="paymentLink"
              placeholder="Click 'Create Payment Link' to generate"
              class="w-full border rounded-lg px-3 py-2 bg-gray-100"
            />
            <button
              @click="copyLink"
              :disabled="!paymentLink"
              class="px-4 py-2 rounded-lg border bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Copy
            </button>
            <button
              @click="pay"
              :disabled="!paymentLink"
              class="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50"
            >
              Pay
            </button>
          </div>
        </div>

        <div class="text-center">
          <button
            @click="closeModal"
            class="text-gray-500 text-sm underline mt-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="showAddProductUI"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50"
    >
      <div class="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6 space-y-6">
        <div class="flex justify-between items-center border-b pb-3">
          <h2 class="text-xl font-bold">Add Product</h2>
          <button @click="closeAddProduct" class="text-gray-500 text-sm underline">Close</button>
        </div>

        <form class="grid md:grid-cols-2 gap-6">
          <div class="flex flex-col">
            <label class="text-sm font-semibold mb-1">Product Name</label>
            <input
              v-model="newProduct.name"
              type="text"
              placeholder="Enter your product name"
              class="border rounded-lg px-3 py-2"
            />
          </div>

          <div class="flex flex-col">
            <label class="text-sm font-semibold mb-1">Product ID</label>
            <input
              v-model="newProduct.id"
              type="text"
              placeholder="Enter your product Id"
              class="border rounded-lg px-3 py-2"
            />
          </div>

          <div class="flex flex-col">
            <label class="text-sm font-semibold mb-1">Price</label>
            <input
              v-model.number="newProduct.price"
              type="number"
              placeholder="Enter your product price"
              class="border rounded-lg px-3 py-2"
            />
          </div>

          <div class="flex flex-col">
            <label class="text-sm font-semibold mb-1">Product Code</label>
            <input
              v-model="newProduct.code"
              type="text"
              placeholder="Enter your product code"
              class="border rounded-lg px-3 py-2"
            />
          </div>

          <div class="flex flex-col md:col-span-2">
            <label class="text-sm font-semibold mb-1">Product Description</label>
            <textarea
              v-model="newProduct.description"
              placeholder="Enter your product detailed description here ......"
              rows="4"
              class="border rounded-lg px-3 py-2"
            ></textarea>
          </div>
        </form>

        <div class="text-right">
          <button
            @click="addProduct"
            class="px-6 py-2 rounded-2xl bg-blue-600 text-white font-semibold hover:opacity-90"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="showInvoiceUI"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50"
    >
      <div class="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 space-y-6">
        <div class="grid md:grid-cols-2 gap-6 p-4 rounded-xl">
          <div class="space-y-4">
            <h2 class="text-xl font-bold text-gray-800 mb-2">Generating Invoice</h2>
            <div class="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Transactions"
                class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Name"
                class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="enter your mail"
                class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Description"
                rows="2"
                class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <input
                type="number"
                placeholder="Amount"
                class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              class="w-full mt-4 px-4 py-2 rounded-2xl bg-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Preview Invoice
            </button>
          </div>

          <div class="space-y-4 p-4 bg-blue-50 rounded-2xl">
            <h3 class="text-xl font-bold text-gray-800">Invoice Preview</h3>
            <div class="bg-blue-100 rounded-lg p-4 shadow-md">
              <div class="text-lg font-bold text-gray-800 mb-2 text-center">Invoice</div>
              <div class="space-y-1 text-sm">
                <div class="flex justify-between">
                  <span>Services</span>
                  <span>...</span>
                </div>
                <div class="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>0.00</span>
                </div>
                <div class="flex justify-between font-bold text-blue-700 text-md">
                  <span>Grand Total</span>
                  <span>0.00</span>
                </div>
              </div>
              <p class="text-center text-gray-600 mt-4 text-xs">Thank You</p>
            </div>
            <button
              class="w-full px-4 py-2 rounded-2xl bg-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Send Invoice
            </button>
          </div>
        </div>
        
        <div class="text-center">
          <button
            @click="closeInvoiceModal"
            class="text-gray-500 text-sm underline mt-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Link, Plus, FileText } from 'lucide-vue-next'

interface Product {
  id: string
  name: string
  price: number
  code?: string
  description?: string
}

const products = ref<Product[]>([
  { id: 'P1001', name: 'Premium Plan', price: 500 },
  { id: 'P1002', name: 'Basic Plan', price: 250 },
  { id: 'P1003', name: 'Pro Addon', price: 150 },
  { id: 'P1004', name: 'Gift Card', price: 1000 },
])

/* Payment UI state */
const showPaymentUI = ref(false)
const search = ref('')
const selectedProduct = ref<Product | null>(null)
const selectedQty = ref<number>(1)
const cart = ref<{ product: Product; qty: number }[]>([])
const paymentLink = ref('')
const taxRate = 0.18

/* Add Product UI state */
const showAddProductUI = ref(false)
const newProduct = ref<Product>({
  id: '',
  name: '',
  price: 0,
  code: '',
  description: '',
})

/* Invoice UI state */
const showInvoiceUI = ref(false)

const filteredProducts = computed(() =>
  products.value.filter(
    (p) =>
      p.name.toLowerCase().includes(search.value.toLowerCase()) ||
      p.id.toLowerCase().includes(search.value.toLowerCase())
  )
)

const selectedSubtotal = computed(() =>
  selectedProduct.value ? selectedProduct.value.price * selectedQty.value : 0
)
const selectedTaxes = computed(() =>
  Math.round((selectedSubtotal.value * taxRate + Number.EPSILON) * 100) / 100
)
const selectedTotal = computed(() =>
  Math.round((selectedSubtotal.value + selectedTaxes.value + Number.EPSILON) * 100) / 100
)

const cartSubtotal = computed(() =>
  cart.value.reduce((s, it) => s + it.product.price * it.qty, 0)
)
const cartTaxes = computed(() =>
  Math.round((cartSubtotal.value * taxRate + Number.EPSILON) * 100) / 100
)
const cartTotal = computed(() =>
  Math.round((cartSubtotal.value + cartTaxes.value + Number.EPSILON) * 100) / 100
)

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount)
}

/* Actions */
function selectProduct(p: Product) {
  selectedProduct.value = { ...p }
  selectedQty.value = 1
}

function addMoreProduct() {
  if (!selectedProduct.value) return
  const existing = cart.value.find((c) => c.product.id === selectedProduct.value!.id)
  if (existing) {
    existing.qty += selectedQty.value
  } else {
    cart.value.push({ product: { ...selectedProduct.value }, qty: selectedQty.value })
  }
  selectedProduct.value = null
  selectedQty.value = 1
  search.value = ''
  paymentLink.value = ''
}

function removeFromCart(idx: number) {
  cart.value.splice(idx, 1)
  paymentLink.value = ''
}

function generateToken() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

function createPaymentLink() {
  const items = cart.value.slice()
  if (selectedProduct.value) {
    items.push({ product: selectedProduct.value, qty: selectedQty.value })
  }
  if (items.length === 0) {
    alert('Please add at least one product before creating a payment link.')
    return
  }

  const subtotal = items.reduce((s, it) => s + it.product.price * it.qty, 0)
  const taxes = Math.round((subtotal * taxRate + Number.EPSILON) * 100) / 100
  const total = Math.round((subtotal + taxes + Number.EPSILON) * 100) / 100

  const token = generateToken()
  const merchantId = 'merchant123'
  const baseUrl = window.location.origin || 'https://example.com'

  paymentLink.value = `${baseUrl}/pay/${encodeURIComponent(merchantId)}/${token}?amount=${total}&currency=INR`
}

async function copyLink() {
  if (!paymentLink.value) return
  try {
    await navigator.clipboard.writeText(paymentLink.value)
    alert('Payment link copied to clipboard')
  } catch (e) {
    window.prompt('Copy this link', paymentLink.value)
  }
}

function pay() {
  if (!paymentLink.value) return
  window.open(paymentLink.value, '_blank')
}

function closeModal() {
  showPaymentUI.value = false
  selectedProduct.value = null
  selectedQty.value = 1
  search.value = ''
}

/* Add Product Modal Actions */
function closeAddProduct() {
  showAddProductUI.value = false
  newProduct.value = { id: '', name: '', price: 0, code: '', description: '' }
}

function addProduct() {
  if (!newProduct.value.name || !newProduct.value.id) {
    alert('Please fill in Product Name and Product ID.')
    return
  }
  products.value.push({ ...newProduct.value })
  alert('Product added successfully!')
  closeAddProduct()
}

/* Invoice Modal Actions */
function closeInvoiceModal() {
  showInvoiceUI.value = false
}
</script>